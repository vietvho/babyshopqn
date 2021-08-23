<?php 

/* ghtk*/
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {

	function ghtk_shipping_method_init() {
		if ( ! class_exists( 'WC_GHTK_Shipping_Method' ) ) {
			class WC_GHTK_Shipping_Method extends WC_Shipping_Method {
				
				public function __construct() {
					$this->id                 = 'ghtk_shipping_method'; // Id for your shipping method. Should be uunique.
					$this->method_title       = __( 'Giao hàng tiết kiệm' );  // Title shown in admin
					$this->method_description = __( 'Giao hàng tiết kiệm' ); // Description shown in admin

					$this->enabled            = "yes"; // This can be added as an setting but for this example its forced enabled
					$this->title              = "Giao hàng tiết kiệm"; // This can be added as an setting but for this example its forced.
					$this->domain = 'bbs';
					$this->init();
					$this->sender_token       = '28fe6c75b3919BF9348b022CA14178E0a82ee65c';
					$this->service_url = 'https://services.ghtklab.com';
				}

				/**
				 * Init your settings
				 *
				 * @access public
				 * @return void
				 */
				function init() {
					// Load the settings API
					$this->init_form_fields(); // This is part of the settings API. Override the method to add your own settings
					$this->init_settings(); // This is part of the settings API. Loads settings you previously init.

					// Save settings in admin if you have any defined
					add_action( 'woocommerce_update_options_shipping_' . $this->id, array( $this, 'process_admin_options' ) );
				}

				/**
				 * calculate_shipping function.
				 *
				 * @access public
				 * @param mixed $package
				 * @return void
				 */
				public function calculate_shipping( $package ) {
					$products         = $package['contents'];
					$weight_unit = get_option('woocommerce_weight_unit');
					if ( $weight_unit == 'g' ) {
						$default_weight = 100;
					}
					else {
						$default_weight = 0.1;
					}
					foreach ( $products as $product ) {
						$product_data = wc_get_product( $product['product_id'] )->get_data() ;
						$weight       = (float) $product_data['weight'];
						$weight = max($default_weight,$weight);
						if ( $product['quantity'] > 1 && $weight > 0 ) {
							$product_weight = $weight * $product['quantity'];
						} else {
							$product_weight = $weight;
						}
		
						$total_weight = $total_weight + $product_weight;
					}
					
					if ( $weight_unit == 'g' ) {
						$total_weight = $total_weight;
					} else {
						$total_weight = $total_weight*1000;
					}
					
					$data =  [
						'weight' => $total_weight,
						'destination' => $package['destination'],
						'cart_subtotal' => $package['cart_subtotal']
					];
					$this->calculate_ghtk_fee($data);
				}
				function calculate_ghtk_fee($data){
				
					$store_raw_country = get_option( 'woocommerce_default_country' );

					// Split the country/state
					$split_country = explode( ":", $store_raw_country );

					// Country and state separated:
					$store_country = $split_country[0];
					$provinces = new Provinces();
					$store_state =  $provinces->get_vn_state( $split_country[1]);
					$state =   $provinces->get_vn_state( $data['destination']['state']);
					
					$body = array(
						"pick_province" => $store_state['province'],
						"pick_district" => $store_state['district'],
						"province" => $state['province'],
						"district" => $state['district'],
						"address" =>  $data['destination']['address'],
						"weight" => $data['weight'],
						"value" => $data['cart_subtotal'],
						"transport" => "road",
					);
                    // var_dump($body);
                    // return;
                    // $body = array(
                    //     "pick_province"=>
                    //     "Da Nang"
                    //     ,"pick_district"=>
                    //     "Quận Hải Châu"
                    //     ,"province"=>
                    //     "Lang Son"
                    //     ,"district"=>
                    //      "Chi Lăng"
                    //     ,"address"=>
                    //     "khuối kháo, xã bắc thủy"
                    //     ,"weight"=>
                    //     100
                    //     ,"value"=>
                    //     "2.00"
                    //     ,"deliver_option"=>
                    //     "xteam"
                    // );
					$response = wp_remote_get( $this->service_url."/services/shipment/fee?".http_build_query( $body ), array(
						'method'  => 'GET',
						'headers' => array( 'Token' => $this->sender_token ),
						)
					);

                    // var_dump($response);
			
					// echo $this->service_url;
			
					if ( !is_wp_error( $response ) ) {
						$response = json_decode( wp_remote_retrieve_body( $response ) );
						if ( isset(  $response->fee->delivery ) && $response->fee->delivery ) {
						    $rate = array(
						        'id'    => $this->id,
						        'label' => $this->title,
						        'cost'  => $response->fee->fee,
						        'meta_data' => [
									__('Pick Province',$this->domain) => $body['pick_province'],
									__('Pick District',$this->domain) => $body['pick_district'],
									__('Province',$this->domain) => $body['province'],
									__('District',$this->domain) => $body['district'],
									__('Address',$this->domain) => $body['address']
								]
						    );
						    $this->add_rate( $rate );
						}
					}
				}
			}
		}
	}



	add_action( 'woocommerce_shipping_init', 'ghtk_shipping_method_init' );

	function add_ghtk_shipping_method( $methods ) {
		$methods['ghtk_shipping_method'] = 'WC_GHTK_Shipping_Method';
		return $methods;
	}

	add_filter( 'woocommerce_shipping_methods', 'add_ghtk_shipping_method' );
}
?>