<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
if(isset($_GET['unapproved'])){
	get_template_part('/popup/popup_thankyou_review');
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( 'c-product', $product ); ?>>
	<div class="c-product__area">
		<div class="c-product__slider">
			<div class="c-product__slider-outer">

						
				<?php
				/**
				 * Hook: woocommerce_before_single_product_summary.
				 *
				 * @hooked woocommerce_show_product_sale_flash - 10
				 * @hooked woocommerce_show_product_images - 20
				 */
				do_action( 'woocommerce_before_single_product_summary' );
				?>

			</div>
		</div>
		<div class="c-product__info">

			<!-- <div class="summary entry-summary">
				<?php
				/**
				 * Hook: woocommerce_single_product_summary.
				 *
				 * @hooked woocommerce_template_single_title - 5
				 * @hooked woocommerce_template_single_rating - 10
				 * @hooked woocommerce_template_single_price - 10
				 * @hooked woocommerce_template_single_excerpt - 20
				 * @hooked woocommerce_template_single_add_to_cart - 30
				 * @hooked woocommerce_template_single_meta - 40
				 * @hooked woocommerce_template_single_sharing - 50
				 * @hooked WC_Structured_Data::generate_product_data() - 60
				 */
				// do_action( 'woocommerce_single_product_summary' );
				
				?>


			</div> -->

			<!-- BEGIN ENTRY -->
			<?php woocommerce_template_single_title(); ?>
			
			<div class="c-product__infobar">
				<ul>
					<?php 
					ob_start();
						woocommerce_template_single_rating();
					$woocommerce_template_single_rating = ob_get_clean();
					if (!empty($woocommerce_template_single_rating)): ?>
						<li>
							<?php echo woocommerce_template_single_rating() ?>
						</li>
					<?php endif ?>
					<li>
						<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.34255 3.7779C1.5687 3.23194 1.90017 2.73586 2.31804 2.31799C2.7359 1.90012 3.23198 1.56865 3.77795 1.3425C4.32392 1.11635 4.90909 0.999954 5.50004 0.999954C6.09099 0.999954 6.67616 1.11635 7.22213 1.3425C7.7681 1.56865 8.26417 1.90012 8.68204 2.31799L10 3.63599L11.318 2.31799C12.162 1.47407 13.3066 0.999966 14.5 0.999966C15.6935 0.999966 16.8381 1.47407 17.682 2.31799C18.526 3.16191 19.0001 4.30651 19.0001 5.49999C19.0001 6.69347 18.526 7.83807 17.682 8.68199L10 16.364L2.31804 8.68199C1.90017 8.26413 1.5687 7.76805 1.34255 7.22208C1.1164 6.67611 1 6.09095 1 5.49999C1 4.90904 1.1164 4.32387 1.34255 3.7779Z" fill="#2fa483ff" stroke="#2fa483ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<!-- <span><?php echo YITH_WCWL()->count_product_occurrences(); ?> loves</span> -->
						<span><?php echo YITH_WCWL()->count_add_to_wishlist(); ?> <?php esc_html_e( 'loves', 'bbs' ); ?></span>
					</li>
				</ul>
			</div>
			<?php woocommerce_template_single_price(); ?>
			<div class="c-product__slider--mobile">
				<?php woocommerce_show_product_images();?>
			</div>
			<?php woocommerce_template_single_add_to_cart(); ?>


			<!-- Frequently bought together -->
			<?php ob_start() ?>
			<?php woocommerce_cross_sell_display() ?>
			<?php $woocommerce_cross_sell_display = ob_get_clean() ?>
				<div class="frequently_bought_together">
					<div class="cross-sells">
						<?php echo woocommerce_cross_sell_display() ?>
					</div>
					<?php echo do_shortcode('[yith_wcwl_add_to_wishlist]'); ?>
				</div>
			<?php //endif ?>

			<?php if ( have_rows( 'product_other_description_list' ) ) : ?>
				<div class="c-product__tabinfo">
					<div class="c-product__tabinfo-list">
				<?php while ( have_rows( 'product_other_description_list' ) ) : the_row(); ?>
					
					<?php if ( get_sub_field( 'is_enable' ) == 1 ) {  ?>
						<!-- <span data-id="0" class="active">Product info</span> -->
						<div class="c-product__tabinfo-item c-article" data-title="<?php the_sub_field( 'title' ); ?>">
							<?php the_sub_field( 'description' ); ?>
						</div>
					<?php }  ?>

				<?php endwhile; ?>
					</div>
				</div>
			<?php endif; ?>

		</div>

	</div>
	<div class="c-product__ratings_reviews">
		<h2 class="contributions-title"><?php esc_html_e( 'Ratings & Reviews', 'bbs' ); ?></h2>
		<div class="c-product__rating">
			<?php wc_get_template( 'single-product/rating-custom.php' );?>
			<p class="write_a_review"><a href="javascript:void(0)" data-idreview="<?php the_ID(); ?>" class="action_writeReview"><?php esc_html_e( 'Write a review', 'bbs' ); ?></a></p>
			<?php wc_get_template( 'single-product/review-custom.php' ); ?>
		</div>
	</div>
	<div class="clear"></div>
	<div class="sells">
		<?php
			woocommerce_related_products( array(
			    'posts_per_page' => 8,
			    'columns'        => 4,
			    'orderby'        => 'rand'
			) );
		?>
		<div class="upsell">
			<?php woocommerce_upsell_display() ?>
		</div>
	</div>
</div>
<?php do_action( 'woocommerce_after_single_product' ); ?>
