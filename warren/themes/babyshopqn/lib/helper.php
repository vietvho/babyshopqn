<?php 
function bbs_lazy_get_attachment_image($image_id,$size){
    return str_replace('src','src="' . THEME_CHILD_URI .'/assets/img/favicon/apple-touch-icon.png" data-src',wp_get_attachment_image($image_id,$size,false,['class'=>'swiper-lazy']));
}
function bbs_display_current_endpoint() {
    if ( is_account_page() ) {
        $endpoint = WC()->query->get_current_endpoint();
        $enpoints = wc_get_account_menu_items();
        switch ($endpoint) {
            case 'view-order':
                break;
            case '':
                $endpoint_title = $enpoints['dashboard'];
                echo '<h1 class="endpoint-title">' . $endpoint_title . '</h1>';  
                break;
            default :
                $endpoint_title = $enpoints[$endpoint];
                echo '<h1 class="endpoint-title">' . $endpoint_title . '</h1>';  
            break;
        }
        // if ($endpoint != 'view-order'){
        //     $endpoint_title = $enpoints[$endpoint];
        //     echo '<h1 class="endpoint-title">' . $endpoint_title . '</h1>';
        // }
        // print_r($enpoints);
    }
}

add_shortcode( 'current_endpoint', 'bbs_display_current_endpoint' );
// Function check verify
function bbs_check_verify_nonce($_x_security_key = '') {
  $_x_rs_wp_verify_nonce = wp_verify_nonce( $_x_security_key, 'sweb_security_ajax_refer' );
  if ( 
      ! isset( $_x_security_key ) 
      || ! $_x_rs_wp_verify_nonce
  ) {
    $_x_str_messages = __('Xin lỗi, nonce của bạn chưa được xác minh', 'bbs') ;
    $arr = array(
      'errors' => array($_x_str_messages),
    );
    wp_send_json($arr);
    exit;
    die();
  }
}
// add_filter( 'woocommerce_get_query_vars', 'myaccount_custom_endpoints_query_vars' );
// function myaccount_custom_endpoints_query_vars( $query_vars ) {
//     $query_vars['my-wishlist'] = __('Yêu thích','bbs');
//     return $query_vars;
// }
add_filter( 'woocommerce_endpoint_my-wishlist_title', 'change_my_account_wishlist_title' );
function change_my_account_wishlist_title( $title ) {
    return __( "Yêu Thích", "woocommerce" );
}
function get_translate_url($page_slug){
    if (function_exists('pll_get_page_url')) {
        return pll_get_page_url ( $page_slug);
    }
    else {
        return $page_slug;
    }
}

function bbs_get_product_short_desc($_product){
   if( $_product->is_type( 'simple' ) ){ return $_product->get_short_description(); } else { $product_id = $_product->get_parent_id(); $product = wc_get_product($product_id); return $product->get_short_description(); } 
}