<?php 

add_filter('acf/load_value/key=field_600d87a560278',  'acf_load_my_defaults', 10, 3);
function acf_load_my_defaults($value, $post_id, $field) {
  if ($value === false) {
    $value = array();
    $value[] = array(
      'field_600d87bc60279' => __('Thông tin sản phẩm', 'bbs'),
      'field_600d87c86027a' => true,
      'field_600d87d76027b' => __('<p>Say hello to our Purely Ageless Rejuvenating Day Cream! It will be your best friend if you are wanting to fight premature ageing, as well as fine lines! This is all due to our new natural, firming miracle ingredient- pure ribose! The super sugar, obtained from corn seed works to visibly reduce the appearance of wrinkles (total area) by up to 78%, making the skin more elastic after just 14 days. It is also infused with White Hibiscus and Baobab to naturally plump, firm and hydrate skin, while Cocoa Butter, Goji Berry and Vitamin E soften and soothe dry skin, leaving skin smoother and rejuvenated!</p><p>TIP: Before applying our Rejuvenating Day Cream, massage our Intensive Firming Serum or Hydration Elixir into the skin!</p>', 'bbs'),
    );
    $value[] = array(
      'field_600d87bc60279' => __('Hướng dẫn sử dụng', 'bbs'),
      'field_600d87c86027a' => true,
      'field_600d87d76027b' => __('-> How to use', 'bbs'),
    );
    $value[] = array(
      'field_600d87bc60279' => __('Thành phần', 'bbs'),
      'field_600d87c86027a' => true,
      'field_600d87d76027b' => __('-> Ingredients', 'bbs'),
    );
    $value[] = array(
      'field_600d87bc60279' => __('Về Thương hiệu', 'bbs'),
      'field_600d87c86027a' => true,
      'field_600d87d76027b' => __('-> About the Brands', 'bbs'),
    );
    $value[] = array(
      'field_600d87bc60279' => __('Vận chuyển & Trả hàng', 'bbs'),
      'field_600d87c86027a' => true,
      'field_600d87d76027b' => __('-> Shipping & Returns', 'bbs'),
    );
  }
  return $value;
}


remove_action ('woocommerce_after_shop_loop_item_title','woocommerce_template_loop_price',10);
remove_action ('woocommerce_after_shop_loop_item_title','woocommerce_template_loop_rating',5);
remove_action ('woocommerce_after_shop_loop_item','woocommerce_template_loop_add_to_cart',10);
remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0);
remove_action('woocommerce_cart_collaterals','woocommerce_cross_sell_display',10);
remove_action( 'woocommerce_register_form', 'wc_registration_privacy_policy_text', 20 );
add_action ('woocommerce_after_shop_loop_item','woocommerce_template_loop_price',15);
add_action('woocommerce_after_shop_loop_item','woocommerce_template_product_desc',10);
add_action( 'woocommerce_before_shop_loop', 'woocommerce_remove_count', 1 );
remove_action('woocommerce_before_shop_loop','woocommerce_catalog_ordering',30);
add_action('woocommerce_after_main_content','woocommerce_nice_select');
function woocommerce_nice_select(){
  echo '<script src="'.THEME_CHILD_URI.'/assets/js/jquery.nice-select.min.js"></script>';
}
function woocommerce_remove_count(){
    remove_action('woocommerce_before_shop_loop','woocommerce_result_count',20);
}
function woocommerce_template_product_desc(){
    echo '<div class="product-desc">'.wp_trim_words(get_the_excerpt(),10).'</div>';
}

add_filter('woocommerce_pagination_args','woocommerce_pagination_mod');
function woocommerce_pagination_mod($args){
    $args['next_text']= feature_rendersvg(THEME_CHILD_DIR."/assets/img/nav-next.svg" );
    $args['prev_text']= feature_rendersvg(THEME_CHILD_DIR."/assets/img/nav-prev.svg" );
    $args['type']='array';
    return $args;
}

// Add filter
add_filter( 'woocommerce_placeholder_img_src', 'custom_woocommerce_placeholder', 10 );

/**
 * Function to return new placeholder image URL.
 */
function custom_woocommerce_placeholder( $image_url ) {
  $image_url = THEME_CHILD_URI .'/assets/img/placeholder.jpg';  // change this to the URL to your custom placeholder
  return $image_url;
}

//remove display name 
add_filter('woocommerce_save_account_details_required_fields','woocommerce_save_account_modify');
function woocommerce_save_account_modify($acc){
    unset($acc['account_display_name'])  ;
    return $acc;
}

add_filter('woocommerce_account_menu_items','woocommerce_account_menu_modify');
function woocommerce_account_menu_modify($menus){
  unset($menus['edit-account']);
  $menus['dashboard']= __('Account Information','bbs');
  return $menus;
}

if(!function_exists('yith_woocommerce_add_wishlist_button_name')) {
  function yith_woocommerce_add_wishlist_button_name( $cart_item, $cart_item_key)
  {

     echo do_shortcode( "[yith_wcwl_add_to_wishlist product_id=".$cart_item['product_id']."]");
  }

  add_action('woocommerce_cart_item_action', 'yith_woocommerce_add_wishlist_button_name', 10, 3);
}

if ( ! function_exists( 'yith_wcwl_custom_remove_from_wishlist_label' ) ) {
	function yith_wcwl_custom_remove_from_wishlist_label( $label ) {
		return '';
	}
	add_filter( 'yith_wcwl_remove_from_wishlist_label', 'yith_wcwl_custom_remove_from_wishlist_label' );
}

add_filter ( 'woocommerce_account_menu_items', 'bbs_modifying_my_account_links' );
//modifying menu dashboard my account
function bbs_modifying_my_account_links( $menu_links ){
  unset( $menu_links['downloads'] ); // Disable Downloads
  $tmp['customer-logout'] = ( $menu_links['customer-logout'] ); // Disable Downloads
  unset( $menu_links['customer-logout'] ); // Disable Downloads
  $menu_links['my-wishlist'] = __('My wishlist', 'bbs');
  $menu_links = array_merge( $menu_links,$tmp);
	return $menu_links;
}

add_action('init', function() {
	add_rewrite_endpoint('my-wishlist', EP_ROOT | EP_PAGES);
});

add_action('woocommerce_account_my-wishlist_endpoint', function() {
	echo do_shortcode('[bbs_wishlist_extra_view title="none" view_all="none" layout="list"]');
});


add_action( 'woocommerce_save_account_details', 'bbs_save_account_details' );
function bbs_save_account_details( $user_id ) {
	update_user_meta( $user_id, 'billing_phone', sanitize_text_field( $_POST['billing_phone'] ) );
 
}
 