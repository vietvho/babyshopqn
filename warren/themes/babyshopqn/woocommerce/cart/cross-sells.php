<?php
/**
 * Cross-sells
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cross-sells.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.4.0
 */

defined( 'ABSPATH' ) || exit;
$args = array(
	'post_type'      => 'product',
	'showposts'      => 10,
	'posts_per_page' => 10,
);
$product_id = get_the_ID();
$product = new WC_Product($product_id);
$crosssells = $product->get_cross_sell_ids();
   	if (!$crosssells)
    return;
$meta_query = WC()->query->get_meta_query();
$args['meta_key'] = 'total_sales';
$args['order'] = 'DESC';
$args['post__in'] = $crosssells;
$loop = new WP_Query( $args );
if ( $loop ) : ?>

	<div class="cross-sells">
		<?php
		$heading = apply_filters( 'woocommerce_product_cross_sells_products_heading', __( 'Frequently bought together', 'bbs' ) );

		if ( $heading ) :
			?>
			<h2 class="frequently_bought_together__title"><?php echo esc_html( $heading ); ?></h2>
		<?php endif; ?>

		<?php woocommerce_product_loop_start(); ?>
			<?php while ( $loop->have_posts() ) : $loop->the_post();?>
			<li>
				
				<div class="cross-sells__thumb">
					<a href="javascript:void(0)" class="product-quickview" data-id="<?php the_ID()?>">
						<?php
							$_thumbnail_id = get_post_thumbnail_id( get_the_ID() );
			           		$_url = get_the_post_thumbnail_url(get_the_ID(), 'medium');
							$_alt = get_post_meta($_thumbnail_id, '_wp_attachment_image_alt', true);
			            	echo '<img src="'. $_url . '" width="300" height="250" alt="Placeholder" alt="' . $_alt . '"/>'; 
						?>
					</a>
				</div>
				<div class="cross-sells__content">
					<a href="javascript:void(0)" class="product-quickview" data-id="<?php the_ID()?>">
						<h3><?php the_title()?></h3>
						<?php wc_get_template( 'loop/price.php' );?>
					</a>
					<span><?php woocommerce_template_loop_add_to_cart(array('text_btn' => __('Add')))  ?></span>
				</div>

			</li>
			<?php endwhile; ?>
		<?php woocommerce_product_loop_end(); ?>

	</div>
	<?php
endif;

wp_reset_postdata();
