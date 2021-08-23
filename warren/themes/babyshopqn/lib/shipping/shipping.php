<?php 
class bbsShip {
    public function __construct() {
        // $this->id                 = 'svw_shipping_ghtk';
        // $this->method_title       = esc_html__( 'Giao Hàng Tiết Kiệm', 'svw' );
        // $this->method_description = esc_html__( 'Kích hoạt tính năng ship hàng qua GHTK', 'svw' );
        // $this->enabled            = $this->get_option( 'enabled' );
        // $this->title              = $this->get_option( 'title' );
        // $this->sender_province     = $this->get_option( 'sender_province' );
        // $this->sender_district    = $this->get_option( 'sender_district' );
        // $this->sender_ward        = $this->get_option( 'sender_ward' );
        $this->sender_token       = '28fe6c75b3919BF9348b022CA14178E0a82ee65c';
        $this->service_url = 'https://services.ghtklab.com';
        // $this->service_url = 'https://khachhang.ghtklab.com';
        
        // $thí->service_url = ' https://services.giaohangtietkiem.vn';
    }
    function calculate_ghtk_fee(){
        $data = array(
            "pick_province" => "Hà Nội",
            "pick_district" => "Quận Hai Bà Trưng",
            "province" => "Hà nội",
            "district" => "Quận Cầu Giấy",
            "address" => "P.503 tòa nhà Auu Việt, số 1 Lê Đức Thọ",
            "weight" => 1000,
            "value" => 3000000,
            // "transport" => "fly",
            "deliver_option" => "xteam"
        );
        $response = wp_remote_get( $this->service_url."/services/shipment/fee?".http_build_query( $data ), array(
            'method'  => 'GET',
            'headers' => array( 'Token' => $this->sender_token ),
            )
        );

        echo $this->service_url;

        if ( !is_wp_error( $response ) ) {
            $response = json_decode( wp_remote_retrieve_body( $response ) );
            var_dump($response);
            // if ( isset(  $response->fee->delivery ) && $response->fee->delivery ) {
            //     $rate = array(
            //         'id'    => $this->id,
            //         'label' => $this->title,
            //         'cost'  => $response->fee->fee,
            //         'meta_data' => array(
            //             'pick_province' => SVW_Ultility::get_detail_province( $from_province_id ),
            //             'pick_district' => SVW_Ultility::get_detail_district( $from_district_id ),
            //             'province'      => SVW_Ultility::get_detail_province( $to_province_id ),
            //             'district'      => SVW_Ultility::get_detail_district( $to_district_id ),
            //             'total_weight'  => $total_weight
            //         ),
            //     );
            //     $this->add_rate( $rate );
            // }
        }
    }
    function create_ghtk_order(){
        // $response = wp_remote_post( "https://services.giaohangtietkiem.vn/services/shipment/order", array(
        //     'body'    => json_encode( $body ),
        //     'headers' => array(
        //         'token'        => $this->sender_token,
        //         'Content-Type' => 'application/json; charset=utf-8',
        //     )
        // ));
        // $products    = array();
        // $order       = wc_get_order( $_POST['order_id'] );
        // foreach ( $order->get_items() as $item_id => $item_data ) {
        //     $product      = $item_data->get_product();
        //     $products[] = array(
        //         'name'     => $product->get_name(),
        //         'weight'   => $product->get_weight(),
        //         'quantity' => $item_data->get_quantity(),
        //     );
        // }
        $products = [[
            "name"=> "bút",
            "weight"=> 0.1,
            "quantity"=> 1,
            "product_code"=> 1241
        ],
        [
            "name"=> "thước",
            "weight"=> 0.1,
            "quantity"=> 1,
            "product_code"=> 1241
        ],
        [
            "name"=> "tẩy",
            "weight"=> 0.2,
            "quantity"=> 1,
            "product_code"=> 1254
        ]];
        $info_order=[
            'products' => $products,
            "order"=>[
                "id"=> "test-6",
                "pick_name"=> "HCM-nội thành",
                "pick_address"=> "590 CMT8 P.11",
                "pick_province"=> "TP. Hồ Chí Minh",
                "pick_district"=> "Quận 3",
                "pick_ward"=> "Phường 1",
                "pick_tel"=> "0911222333",
                "tel"=> "0911222333",
                "name"=> "GHTK - HCM - Noi Thanh",
                "address"=> "123 nguyễn chí thanh",
                "province"=> "TP. Hồ Chí Minh",
                "district"=> "Quận 1",
                "ward"=> "Phường Bến Nghé",
                "hamlet"=> "Khác",
                "is_freeship"=> "1",
                "pick_date"=> "2016-09-30",
                "pick_money"=> 47000,
                "note"=> "Khối lượng tính cước tối đa: 1.00 kg",
                "value"=> 3000000,
                "transport"=> "fly",
                "pick_option"=>"cod",      
                "deliver_option" => "xteam",  
                "pick_session" => 2 
            ]
        ];
        // $info_order = array(
        //     'products' => $products,
        //     'order' => array (
        //         'id'            => $_POST['order_id'],
        //         'pick_name'     => $_POST['pick_name'],
        //         'pick_address'  => $_POST['pick_address'],
        //         'pick_province' => $_POST['pick_province'],
        //         'pick_district' => $_POST['pick_district'],
        //         'pick_ward'     => $_POST['pick_ward'],
        //         'pick_tel'      => $_POST['pick_tel'],
        //         'tel'           => $_POST['tel'],
        //         'name'          => $_POST['name'],
        //         'address'       => $_POST['address'],
        //         'province'      => $_POST['province'],
        //         'district'      => $_POST['district'],
        //         'ward'          => $_POST['ward'],
        //         'hamlet'        => "Khác",
        //         'is_freeship'   => 1,
        //         'pick_money'    => $_POST['pick_money'],
        //         'note'          => $_POST['note'],
        //         'total_weight'  => $_POST['total_weight'],
        //     )
        // );
        echo $this->service_url."/services/shipment/order";
        $response = wp_remote_post( $this->service_url."/services/shipment/order", array(
            'method'  => 'POST',
            'timeout' => 5000,
            'body'    => json_encode( $info_order ),
            'headers' => array( 'Content-Type' => 'application/json; charset=utf-8', 'Token' => $this->sender_token ),
            )
        );
        // echo $this->service_url;
        if ( !is_wp_error( $response ) ) {
            $response = json_decode( wp_remote_retrieve_body( $response ) );
            var_dump($response );
            if ( isset( $response->success ) && $response->success ) {
                echo '<div class="repsonse-success">Thành Công !<br>Mã đơn hàng của bạn là: '.$response->order->label.'</div>';
                update_post_meta( $_POST['order_id'], '_ghtk_code', $response->order->label );
            } elseif ( isset( $response->success ) && !$response->success ) {
                echo '<div class="repsonse-error"><span class="code-message">'.$response->message.'</span></div>';
            } else {
                echo '<div class="server-error">';
                esc_html_( 'Lỗi hosting/ server : API không hoạt động', 'svw' );
                echo '</div>';
            }
        }
        // die();
    }
}
require get_template_directory() . '/inc/shipping/provinces.php';
// require get_template_directory() . '/inc/shipping/district.php';
require get_template_directory() . "/inc/shipping/ghtk_method.php";
