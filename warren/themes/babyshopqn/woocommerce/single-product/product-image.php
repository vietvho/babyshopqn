<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.1
 */

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
	return;
}

global $product;

$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = $product->get_image_id();
$attachment_ids = $product->get_gallery_image_ids();
?>


<div class="product-image" >
	<figure class="swiper-wrapper">
		<?php
		if ( $post_thumbnail_id ) {
			$img_atts = wp_get_attachment_image_src($post_thumbnail_id, 'full');
			$html = '<div class="swiper-slide">

			<span id="zoomit" data-zoom-image="' . $img_atts[0] . '" data-caption="' . esc_attr(get_the_title()) . '" class="productZoom" >
			'. wp_get_attachment_image( $post_thumbnail_id,[448,448] ) .'
			</span>
			</div>';
		} elseif (count($attachment_ids) ==0) {
			$html = sprintf( '<div class="swiper-slide"><img src="%s" alt="%s" class="wp-post-image" /></div>', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
		}
		echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id ); // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped
		?>
		<?php
		if ( $attachment_ids) {
			foreach ( $attachment_ids as $attachment_id ) {
				$img_atts = wp_get_attachment_image_src($attachment_id, 'full');
				echo '<div class="swiper-slide">
				<span data-zoom-image="' . $img_atts[0] . '" data-caption="' . esc_attr(get_the_title()) . '" class="productZoom" >
				'. wp_get_attachment_image( $attachment_id,[448,448] ).'
				</span>
				</div>'; // phpcs:disable WordPress.XSS.EscapeOutput.OutputNotEscaped
			}
		}?>
	</figure>
	<!-- Add Pagination -->
	<div class="swiper-pagination"></div>
</div>
<div class="product-gallery">
	<figure class="swiper-wrapper">
		<?php
		if ($post_thumbnail_id ) {
			echo '<div class="swiper-slide">'.wp_get_attachment_image( $post_thumbnail_id ,[128,128]).'</div>';
		}
		if ( $attachment_ids ) {
			foreach ( $attachment_ids as $attachment_id ) {
				echo '<div class="swiper-slide">'.wp_get_attachment_image( $attachment_id,[128,128]).'</div>';
			}
		}?>
	</figure>
</div>