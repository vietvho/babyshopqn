<?php
/**
 * Single Product Up-Sells
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/up-sells.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( $upsells ) : ?>

	<section class="up-sells upsells products">
		<?php
		$heading = apply_filters( 'woocommerce_product_upsells_products_heading', __( 'You may also like', 'bbs' ) );

		if ( $heading ) :
			?>
			<h2><?php echo esc_html( $heading ); ?></h2>
		<?php endif; ?>

		<?php //woocommerce_product_loop_start(); ?>
			<div class="c-carousel-product-list">
				<div class="c-carousel-product-list__slider">
					<div class="swiper-container" data-swiperid="112">
						<ul class="swiper-wrapper">
							<?php foreach ( $upsells as $upsell ) : ?>

								<?php
								$post_object = get_post( $upsell->get_id() );

								setup_postdata( $GLOBALS['post'] =& $post_object ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited, Squiz.PHP.DisallowMultipleAssignments.Found

								wc_get_template_part( 'content', 'product-custom' );
								?>

							<?php endforeach; ?>
						</ul>
					</div>
					<span class="bbs-slide-prev c-carousel-product-list__slider-prev" data-swiper_previd="112"><?php echo file_get_contents(THEME_CHILD_DIR."/assets/img/prev.svg" );?></span>
			        <span class="bbs-slide-next c-carousel-product-list__slider-next" data-swiper_nextid="112"><?php echo file_get_contents(THEME_CHILD_DIR."/assets/img/next.svg" );?></span>
			        <span class="bbs-slide-pagination c-carousel-product-list__slider-pagination" data-swiper_pagination="112"></span>
			    </div>
			</div>
		<?php //woocommerce_product_loop_end(); ?>

	</section>

	<?php
endif;

wp_reset_postdata();
