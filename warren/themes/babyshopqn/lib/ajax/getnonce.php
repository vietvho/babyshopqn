<?php 
add_action('wp_ajax_bbs_browserprivacy_norecaptcha', 'bbs_browserprivacy_norecaptcha' );
add_action('wp_ajax_nopriv_bbs_browserprivacy_norecaptcha', 'bbs_browserprivacy_norecaptcha' );
function bbs_browserprivacy_norecaptcha() {
  // __ SECURITY


  $rs = array(
    '_isok' => false,
    '_isme' => false,
  );

  // Ktra và trả lỗi
  $_key_wpajaxrefer = wp_create_nonce( "sweb_security_ajax_refer" );

  
  // trả thông tin tại CMS
  $rs['_isok'] = true;
  $rs['_key_wpajaxrefer'] = $_key_wpajaxrefer;
  
  wp_send_json($rs);
  die();
}


// ===== 
// LOAD MORE BUTTON 
// ===== 
add_action('wp_ajax_loadmore', 'bbs_loadmore_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_loadmore', 'bbs_loadmore_ajax_handler'); // wp_ajax_nopriv_{action}
function bbs_loadmore_ajax_handler(){
  // prepare our arguments for the query
  $args =  $_POST['query'];
  $args['paged'] = $_POST['page'] + 1; // we need next page to be loaded
  // $args['post_type'] = 'game_albums';
  $args['post_status'] = 'publish';
  // $args['numberposts'] = 2;
  $args = (array) $args;
  // it is always better to use WP_Query but not here
  query_posts( $args );
  if( have_posts() ) :
    // global $post;
    while( have_posts() ): the_post();
      $_the_ID = get_the_ID();
      $_x_linktop = get_permalink($_the_ID);
      get_template_part('/parts/content', 'blogblock');
    endwhile;
  endif;
  die; // here we exit the script and even no wp_reset_query() required!
}

/**
 * Show cart contents / total Ajax
 */

add_filter( 'woocommerce_add_to_cart_fragments', 'header_add_to_cart_fragment', 30, 1 );
function header_add_to_cart_fragment( $fragments ) {
    global $woocommerce;
    ob_start();
    woocommerce_mini_cart();
    ?>
    <?php
    $fragments['.mini-cart-ajax'] = ob_get_clean();
    ob_start();?>
    <div class="count-return">
      <?php if (WC()->cart->get_cart_contents_count()): ?>
        <span class="ncount"><?php echo WC()->cart->get_cart_contents_count();?></span>
      <?php endif ;
    echo '</div>';
    $fragments['.count-return'] = ob_get_clean();
    return $fragments;
}