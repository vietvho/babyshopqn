<?php
/**
 * Display single product reviews (comments)
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product-reviews.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.3.0
 */

defined( 'ABSPATH' ) || exit;

global $product;
if ( ! comments_open() ) {
	return;
}

?>
<div id="reviews" class="woocommerce-Reviews">
	<div id="comments">
		<?php if ( have_comments() ) : ?>
			<ol class="commentlist">
				<?php wp_list_comments( apply_filters( 'woocommerce_product_review_list_args', array( 'callback' => 'woocommerce_comments' ) ) ); ?>
			</ol>

			<?php
			if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
				echo '<nav class="woocommerce-pagination">';
				paginate_comments_links(
					apply_filters(
						'woocommerce_comment_pagination_args',
						array(
							'prev_text' => '&larr;',
							'next_text' => '&rarr;',
							'type'      => 'list',
						)
					)
				);
				echo '</nav>';
			endif;
			?>
		<?php else : ?>
			<p class="woocommerce-noreviews"><?php esc_html_e( 'There are no reviews yet.', 'woocommerce' ); ?></p>
		<?php endif; ?>
	</div>
	<!-- show popup review -->
	<div id="formReview" class="c-modal">
		<div class="c-modal__container">
			<div class="c-modal__title">
				<h3><?php echo esc_html__( 'Review your order', 'bbs' );?></h3>
			</div>
			<div class="c-modal__content">
				<?php if ( get_option( 'woocommerce_review_rating_verification_required' ) === 'no' || wc_customer_bought_product( '', get_current_user_id(), $product->get_id() ) ) : ?>
					<div class="product-review-popup">
						<div class="img-product-popup">
							<?php echo "<img width='80px' height='80px' src='".wp_get_attachment_url( $product->image_id )."' alt='".$product->name."'/>";?>
						</div>
						<div class="title-product-popup">
							<?php echo "<p>".$product->name."</p>";?>	
						</div>
					</div>
					<div id="review_form_wrapper">
						<div id="review_form">
							<div class="list-rate">
								<?php echo "<p class='please-rate'>".esc_html__( 'Please rate this product', 'woocommerce' )."</p>"?>
								<br>
								<p class="rating">
								<?php
									for ($i=1; $i <= 5 ; $i++) { 
										echo "<a href='javascript:void(0)' class='actionStar' data-star='".$i."'>";
										echo file_get_contents(THEME_CHILD_DIR."/assets/img/check-star.svg" );
										echo "</a>";
									}
								?>
								</p>
							</div>
							<?php
							if ( wc_review_ratings_enabled() ) {
								$comment_form['comment_field'] = '<div class="comment-form-rating"><label for="rating">' . esc_html__( 'Your rating', 'woocommerce' ) . ( wc_review_ratings_required() ? '&nbsp;<span class="required">*</span>' : '' ) . '</label><select name="rating" id="rating" required>
									<option value="">' . esc_html__( 'Rate&hellip;', 'woocommerce' ) . '</option>
									<option value="5">' . esc_html__( 'Perfect', 'woocommerce' ) . '</option>
									<option value="4">' . esc_html__( 'Good', 'woocommerce' ) . '</option>
									<option value="3">' . esc_html__( 'Average', 'woocommerce' ) . '</option>
									<option value="2">' . esc_html__( 'Not that bad', 'woocommerce' ) . '</option>
									<option value="1">' . esc_html__( 'Very poor', 'woocommerce' ) . '</option>
								</select></div>';
							}

							$comment_form['comment_field'] .= '<p class="comment-form-comment"><textarea id="comment" name="comment" placeholder="' .esc_html__( 'Please share your feeling about this product', 'woocommerce' ) . '" cols="45" rows="8" required></textarea></p>';

							comment_form( apply_filters( 'woocommerce_product_review_comment_form_args', $comment_form ) );
							?>
						</div>
					</div>
				<?php else : ?>
					<p class="woocommerce-verification-required"><?php esc_html_e( 'Only logged in customers who have purchased this product may leave a review.', 'woocommerce' ); ?></p>
				<?php endif; ?>
			</div>
			<span class="c-modal__close"></span>
		</div>
	</div>
	<!-- end popup -->
	<div class="clear"></div>
</div>
