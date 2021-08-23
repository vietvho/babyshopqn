<?php
/**
 * Empty cart page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-empty.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

defined( 'ABSPATH' ) || exit;

/*
 * @hooked wc_empty_cart_message - 10
 */
// do_action( 'woocommerce_cart_is_empty' ); ?>
<div class="woocommerce__cart-empty">
<h1 class="page-title text--left"><?the_title();?></h1>
<h2><strong><?_e('Your basket is currently empty.','bbs');?></strong></h2>
<?php if (!is_user_logged_in()){
echo '<p>'.__('Please login in if you are trying to retrieve a basket created in the past.','bbs');
echo '</p>';
echo '<a class="btn" href="'.get_permalink( get_option('woocommerce_myaccount_page_id') ).'">'.__('Log in','bbs').'</a></div>';
}
else {
	if ( wc_get_page_id( 'shop' ) > 0 ) : ?>
		<p>
			<a class="btn" href="<?php echo esc_url( apply_filters( 'woocommerce_return_to_shop_redirect', wc_get_page_permalink( 'shop' ) ) ); ?>">
				<?php
					/**
					 * Filter "Return To Shop" text.
					 *
					 * @since 4.6.0
					 * @param string $default_text Default text.
					 */
					echo esc_html( apply_filters( 'woocommerce_return_to_shop_text', __( 'Return to shop', 'woocommerce' ) ) );
				?>
			</a>
		</p>
	<?php endif; 
}
?>
<div class="cart-page__recommend">
	<?php include THEME_CHILD_DIR . '/regions/carousel-slider-product.php'; ?>
</div>
<?php 
echo do_shortcode('[yith_wcwl_wishlist layout="grid" can_user_edit_title="false"]') ;?>
