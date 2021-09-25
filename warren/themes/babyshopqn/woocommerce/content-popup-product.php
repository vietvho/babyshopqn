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
?>
<div class="c-modal__title">
	<h3 class="popup-product-title"><?php the_title(); ?></h3>
</div>
<div class="c-modal__content">
	<div id="product-<?php the_ID(); ?>" <?php wc_product_class( 'c-product', $product ); ?>>
		<div class="c-product__area">
			<div class="c-product__slider img-product-detail">
				<div class="c-product__slider-outer">

							
					<?php
					/**
					 * Hook: woocommerce_before_single_product_summary.
					 *
					 * @hooked woocommerce_show_product_sale_flash - 10
					 * @hooked woocommerce_show_product_images - 20
					 */
					woocommerce_show_product_sale_flash();
					$_thumbnail_id = get_post_thumbnail_id( get_the_ID() );
	           		$_url = get_the_post_thumbnail_url(get_the_ID(), 'medium');
					$_alt = get_post_meta($_thumbnail_id, '_wp_attachment_image_alt', true);

	            	echo '<img src="'. $_url . '" alt="Placeholder" alt="' . $_alt . '"/>'; 
					// do_action( 'woocommerce_before_single_product_summary' );
					?>

				</div>
			</div>
			<div class="c-product__info">
				
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
							<span><?php echo YITH_WCWL()->count_add_to_wishlist(); ?> <?php esc_html_e( 'loves', 'bbs' ); ?></span>
						</li>
					</ul>
				</div>
				<?php
					$_content = babyshopqn_string_limit_words($product->post->post_excerpt, 500); 
					if(empty(trim($_content))) {
						$_content = babyshopqn_string_limit_words($product->post->post_content, 16);
					}
				?>
				<p class="popup-product-content"><?php echo $_content; ?></p>
				<?php woocommerce_template_single_price(); ?>
				<!-- <div class="c-product__slider--mobile">
					<?php //woocommerce_show_product_images();?>
				</div> -->
				<?php //woocommerce_template_single_add_to_cart(); ?>
				<?php
					if ( $product && $product->is_type( 'simple' ) && $product->is_purchasable() && $product->is_in_stock() && ! $product->is_sold_individually() ) {
					        // Get the necessary classes
					        $class = implode( ' ', array_filter( array(
					            'button',
					            'product_type_' . $product->get_type(),
					            $product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '',
					            $product->supports( 'ajax_add_to_cart' ) ? 'ajax_add_to_cart' : '',
					        ) ) );

					        // Embedding the quantity field to Ajax add to cart button
					        $html = sprintf( '%s<a rel="nofollow" href="%s" data-quantity="%s" data-product_id="%s" data-product_sku="%s" class="%s">%s</a>',
					            woocommerce_quantity_input( array(), $product, false ),
					            esc_url( $product->add_to_cart_url() ),
					            esc_attr( isset( $quantity ) ? $quantity : 1 ),
					            esc_attr( $product->get_id() ),
					            esc_attr( $product->get_sku() ),
					            esc_attr( isset( $class ) ? $class : 'button' ),
					            esc_html( $product->add_to_cart_text() )
					        );
					        // Add to cart ajax
					        echo "<div class='add_cart_area add_cart_area-popup'>"; // Start wapper
					        echo "<div class='add-to-cart-popup'>";
					        echo $html;
					        echo "</div>";
					        ?>
					        	<div class="buy-now-popup">
					        	<!-- Buy now -->
					        		<form class="cart single-product" method="post" enctype='multipart/form-data' action="/checkout?set-cart-qty_<?php echo $product->get_id();?>=1">
						        	    <button type="submit"  class="single_add_to_cart_button button alt cart-buttton buy-now"><?php _e('Buy Now','bbs');?></button>
						        	    <input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" />
						        	</form>
					        	</div>
					        </div> <!-- End wapper -->
					        <?php
					    }
				?>
				<div class="popup-product-link">
						<div class="yith-wcwl-add-to-wishlist add-to-wishlist-<?php the_ID();?>  wishlist-fragment on-first-load" data-fragment-ref="<?php the_ID();?>" data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:true,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:&quot;<?php the_ID();?>&quot;,&quot;parent_product_id&quot;:&quot;<?php the_ID();?>&quot;,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
						<div class="yith-wcwl-add-button">
							<a href="?add_to_wishlist=<?php the_ID();?>" rel="nofollow" data-product-id="<?php the_ID();?>" data-product-type="simple" data-original-product-id="<?php the_ID();?>" class="add_to_wishlist single_add_to_wishlist" data-title="">
								<i class="yith-wcwl-icon fa fa-heart-o"></i><span></span>
							</a>
						</div>		
					</div>
					<?php //echo do_shortcode('[yith_wcwl_add_to_wishlist product_id="'.get_the_ID().'"]');?>
					<a href="<?php the_permalink() ?>" class="link-detail" title="<?php the_title(); ?>"><?php esc_html_e( 'See product details', 'bbs' ); ?></a>
				</div>
			</div>
		</div>
	</div>
</div>
<?php do_action( 'woocommerce_after_single_product' );?>

<?php wp_reset_postdata();?>
