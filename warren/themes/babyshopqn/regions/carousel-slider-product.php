<?php 
$_type    = $row['type'];
$_title     = $row['title'];
$_has_button = $row['has_button'];
$title_align = isset($row['title_align']) && $row['title_align'] ? $row['title_align'] : 'text--center';
$container = isset($row['container']) && $row['container'] ? $row['container'] : 'bbs2-container';
if(empty($_title)) {
	$_title = $_type['label'];
}
$row_index = isset($row_index) ? $row_index + 1 : 0;
?>
<?php 

$args = array(
	'post_type'      => 'product',
	'showposts'      => 10,
	'posts_per_page' => 10,
);
/* 
	new-product : New Product
	best-sellers : Best Sellers
	new-arrivals : New Arrivals
	flash-sales : Flash Sales
	natural-beauty-offers : Natural Beauty Offers
	similar-products : Similar Products
*/
if(isset($_type['value'])):
	switch ($_type['value']) {
		case 'new-product':
			// Best Seller
			$args['meta_key'] = 'total_sales';
			$args['orderby'] = 'meta_value_num';
			break;

		case 'best-sellers':
			// New Arrivals
			$args['meta_key'] = 'total_sales';
			$args['order'] = 'DESC';
			break;
		
		case 'new-arrivals':
			// Flash Seller
			$args['meta_key'] = 'total_sales';
			$args['order'] = 'DESC';
			break;
			
		case 'flash-sales':
			// Natural Beauty Offers
			$args['meta_key'] = 'total_sales';
			$args['order'] = 'DESC';
			break;
		
		case 'natural-beauty-offers':
			// Natural Beauty Offers
			$args['meta_key'] = 'total_sales';
			$args['order'] = 'DESC';
			break;
		
		case 'similar-products':
			// Natural Beauty Offers
			$args['meta_key'] = 'total_sales';
			$args['order'] = 'DESC';
			break;
		
		case 'categories-choice-make-list':
			// Natural Beauty Offers
			// $args['category__in'] = array($row['list_categories']);

		    $args['tax_query'] = array(
		        'relation' => 'AND',
		        array(
		            'taxonomy' => 'product_cat',
		            'terms' => $row['list_categories'],
		            'operator' => 'IN',
		        ),
		    );

			break;
		
		case 'you-may-also-like':
			// Request:
			// Cái này cần id của trang product để bật lên
			// đặt ở trang Product sẽ hợp hơn
			$product_id = get_the_ID();

			$product = new WC_Product($product_id);
		    $upsells = $product->get_upsells();
			   	if (!$upsells)
		        return;

			$meta_query = WC()->query->get_meta_query();

			$args['meta_key'] = 'total_sales';
			$args['order'] = 'DESC';
			$args['post__in'] = $upsells;

			break;
		
		case 'custom-choice-to-list':
			// Natural Beauty Offers
			$_list_product = $row['list_product'];
			$args['post__in'] = $_list_product;
			break;
		
		default:
			# code...
			break;
	}
endif;

$loop = new WP_Query( $args );
if  ($loop->have_posts() ):
?>
<section class="c-carousel-product-list <?= $row['spacing'];?>">
	<div class="<?= $container;?>">
		<h2 class="c-carousel-product-list__title <?=$title_align;?>"><?= $_title ?></h2>
		<div class="c-carousel-product-list__slider">
			<div class="swiper-container" data-swiperid="<?= $row_index ?>">
				<div class="swiper-wrapper">
				<?php 
				while ( $loop->have_posts() ) : $loop->the_post(); 
				// Display price
				global $post, $product;
				$gallery_image_ids = get_post_meta( $product->get_id(), '_product_image_gallery', true );
				$_image_second = "";
				if($gallery_image_ids) {
					$gallery_image_ids = explode(',', $gallery_image_ids);

					// $_image_second = "<img src=\"" . wp_get_attachment_image_url( reset($gallery_image_ids), 'single-post-thumbnail') . "\" class=\"thumb_second\" >";
					$_image_second = wp_get_attachment_image(reset($gallery_image_ids), 'single-post-thumbnail', false, array('class' => 'thumb_second'));
					// var_dump(reset($gallery_image_ids));
					// var_dump($_image_second);

				}
				// Unlimit for excerpt, default 500
				// => limit by css
				$_content = babyshopqn_string_limit_words($product->get_short_description(), 500); 
				if(empty(trim($_content))) {
					$_content = babyshopqn_string_limit_words($product->get_description(), 16);
				}



				$currency     = get_woocommerce_currency_symbol();
				$price        = get_post_meta( get_the_ID(), '_regular_price', true);
				$fomart_price = 0;
				$fomart_sale  = 0;
				if(intval($price)) {
					$fomart_price = number_format($price);
				}

				$sale = get_post_meta( get_the_ID(), '_sale_price', true);
				if($sale) {
					$fomart_sale  = number_format($sale);
				}

			

				ob_start(); ?>
				<?php if(intval($sale)) : ?>
					<span class="price">
					<span class="woocommerce-Price-amount amount">
					  <del><?php echo $fomart_price ?><?php echo $currency;?></del>
					  <bdi><?php echo $fomart_sale;  ?><span class="woocommerce-Price-currencySymbol"><?php echo $currency; ?></span></bdi>
					</span>
					</span>
				<?php elseif(intval($price)): ?>
					<span class="price">
					  <span class="woocommerce-Price-amount amount">
					    <bdi>
					      <?php echo $fomart_price;  ?><span class="woocommerce-Price-currencySymbol"><?php echo $currency; ?></span>
					    </bdi>
					  </span>
					</span>
				<?php endif;
				$price_str = ob_get_clean();
				?>
				   <a href="javascript:void(0)" title="<?php the_title(); ?>" class="c-carousel-product-list__product swiper-slide swiper-lazy product-quickview" data-id="<?= $loop->post->ID ?>">
					<?php if ( $product->is_on_sale() ) : ?>
						<?php echo apply_filters( 'woocommerce_sale_flash', '<span class="onsale">' . esc_html__( 'Sale!', 'woocommerce' ) . '</span>', $post, $product ); ?>
					<?php endif;?>

			         <article>            
			            <div class="c-carousel-product-list__product-thumb">
			               <?php if (has_post_thumbnail( $loop->post->ID )) {
			               		$_thumbnail_id = get_post_thumbnail_id( $loop->post->ID );
			               		$_url = get_the_post_thumbnail_url($loop->post->ID, [448,448]);
								$_alt = get_post_meta($_thumbnail_id, '_wp_attachment_image_alt', true);
								$_srcset = wp_get_attachment_image_srcset( $_thumbnail_id, 'full' );

								// $_alt = empty(trim($_alt)) ? $loop->post->post_title : get_post_meta($_thumbnail_id, '_wp_attachment_image_alt', true);
			                	echo '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'https://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. $_url . '" srcset="'. $_srcset . '" alt="Placeholder" data-alt="' . $_alt . '" class="swiper-lazy card-img-top" />
			                		<span class="swiper-lazy-preloader"></span>
			                	'; 


			               } else 
			                	echo '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'https://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. woocommerce_placeholder_img_src() . '" alt="product placeholder Image" class="swiper-lazy card-img-top" width="65px" height="115px" />
			                		<span class="swiper-lazy-preloader"></span>
			                	'; 

			                // Sử dụng hình ảnh thứ 2 để hover theo hiệu ứng
			                // echo $_image_second;
			              ?>

			              <span class="c-carousel-product-list__product-btn_view"><?= __('Click View','bbs') ?></span>
			            </div>
			            <div class="c-carousel-product-list__product-body">
			               <h3 class="c-carousel-product-list__product-title"><?php the_title(); ?></h3>
			               <?= $price_str ?>
			               <span class="c-carousel-product-list__product-btn"><?= __('Xem thêm','bbs') ?></span>
			            </div>
			         </article>
				   </a>
				<?php endwhile; ?>
				</div>
			</div>
			<span class="bbs-slide-prev c-carousel-product-list__slider-prev" data-swiper_previd="<?= $row_index ?>"><?php echo feature_rendersvg(THEME_CHILD_DIR."/assets/img/prev.svg" );?></span>
	        <span class="bbs-slide-next c-carousel-product-list__slider-next" data-swiper_nextid="<?= $row_index ?>"><?php echo feature_rendersvg(THEME_CHILD_DIR."/assets/img/next.svg" );?></span>
	        <span class="bbs-slide-pagination c-carousel-product-list__slider-pagination" data-swiper_pagination="<?= $row_index ?>"></span>
		</div>
	</div>
</section>
<?php endif;//endif loop;?>
<?php wp_reset_query(); ?>