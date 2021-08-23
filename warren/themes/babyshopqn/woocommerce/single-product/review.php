<?php
/**
 * Review Comments Template
 *
 * Closing li is left out on purpose!.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/review.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
$like 		= $comment->comment_like;
$unlike 	= $comment->comment_unlike;
if ($like == '' || $like == 0) {
	$like 	= 0;
}else{
	$like = count(explode(',',$like));
}
if ($unlike == '' || $unlike == 0) {
	$unlike = 0;
}else{
	$unlike = count(explode(',',$unlike));
}
?>
<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">

	<div id="comment-<?php comment_ID(); ?>" class="comment_container">
		<div class="row">
			<div class="display__wapper_left col-md-7">
				<div class="">
					<div class="display__gravatar">
						<?php
							/**
							 * The woocommerce_review_before hook
							 *
							 * @hooked woocommerce_review_display__gravatar - 10
							 */
							do_action( 'woocommerce_review_before', $comment );
						?>
					</div>
					<div class="display__name">
						<p><strong class="woocommerce-review__author"><?php comment_author(); ?> </strong></p>
						<p class="text-small-color"><?=esc_html__( 'Verified Buyer', 'woocommerce' );?></p>
					</div>
				</div>
			</div>
			<div class="display__wapper_right col-md-5">
				<div class="text-right">
					<?php
					/**
					 * The woocommerce_review_meta hook.
					 *
					 * @hooked woocommerce_review_display__meta - 10
					 */
					do_action( 'woocommerce_review_meta', $comment );
					?>
					<p class="rating">
						<?php
						/**
						 * The woocommerce_review_before_comment_meta hook.
						 *
						 * @hooked woocommerce_review_display__rating - 10
						 */
						do_action( 'woocommerce_review_before_comment_meta', $comment );

						?>
					</p>
					<p class="text-small-color recommends"> <?php echo file_get_contents(THEME_CHILD_DIR."/assets/img/line.svg" );?> <?=esc_html__( 'Recommends this product', 'bbs' );?></p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<?php
					do_action( 'woocommerce_review_before_comment_text', $comment );

					/**
					 * The woocommerce_review_comment_text hook
					 *
					 * @hooked woocommerce_review_display__comment_text - 10
					 */
					do_action( 'woocommerce_review_comment_text', $comment );

					do_action( 'woocommerce_review_after_comment_text', $comment );
				?>
				<div class="text-right">
					<p class="was-helpful"><?=esc_html__( 'Was This Review Helpful?', 'bbs' );?></p>
					<br/>
					<p>
						<a href="javascript:void(0)" data-idcomment="<?php comment_ID(); ?>" data-like="like" class="actionHelpful"><?php echo file_get_contents(THEME_CHILD_DIR."/assets/img/like.svg" );?> <small class="like-<?php comment_ID(); ?>"><?php echo $like;?></small> </a>
						&nbsp;&nbsp;
						<a href="javascript:void(0)" data-idcomment="<?php comment_ID(); ?>" data-like="unlike" class="actionHelpful"> <?php echo file_get_contents(THEME_CHILD_DIR."/assets/img/not_like.svg" );?> <small class="unlike-<?php comment_ID(); ?>"><?php echo $unlike;?></small></a>
					</p>
				</div>
			</div>
		</div>
	</div>
