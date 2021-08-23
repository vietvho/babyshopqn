<?php
/**
 * Single Product Rating
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/rating.php.
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

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $product;

if ( ! wc_review_ratings_enabled() ) {
	return;
}

$rating_count = $product->get_rating_count();
$review_count = $product->get_review_count();
$average      = $product->get_average_rating();

if ( $rating_count > 0 ) : ?>
    <div class="product-rating-summary">
    	<p><?php echo str_replace("00","0",$average);?>/5.0 <span><?php echo $review_count;?> reviews</span></p>	    	
    </div>
    <div class="c-product__rating-details">
        <table>
            <tbody>
            	<?php
            		for ($j=5; $j > 0; $j--) { 
            			?>
            			<tr>
            			    <td class="rating-number">
            			        <a href="">
            			        	<span>
            			        	<?php 
            			        		// show vector pink
            			            	for ($i=0; $i < $j ; $i++) { 
            			            		echo file_get_contents(THEME_CHILD_DIR."/assets/img/vector.svg" );
            			            	}
            			            	// show vector white
            			            	for ($z=5-$j; $z > 0 ; $z--) { 
            			            		echo file_get_contents(THEME_CHILD_DIR."/assets/img/vector_blank.svg" );
            			            	}
            			        	?>
            			        	</span>
            			        </a>
            			    </td>
            			    <td class="rating-graph">
            			    	<?php
            			    		$precent = round(($product->rating_counts[$j]*100)/$review_count, 2);
            			    	?>
            			        <a href="" class="bar" style="width: <?php echo $precent;?>%;" title="<?php echo $precent;?>%"></a>
            			    </td>
            			    <td class="rating-count">
            			        <p><?php echo $product->rating_counts[$j] ? $product->rating_counts[$j] : 0;?></p>
            			    </td>
            			</tr>
            			<?php
            		}
            	?>
            </tbody>
        </table>
    </div>
    <div class="product-rating-percent">
        <p class="percent">95%</p>
        <p><?php esc_html_e( 'would recommend', 'bbs' ); ?></p>
    </div>
<!-- close div c-product__rating -->
</div>
    <div class="c-product__review">
<?php else :?>
    </div>
    <div class="c-product__review c-product__no-yet">
<?php endif; ?>