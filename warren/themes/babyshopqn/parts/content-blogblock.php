<a href="<?php the_permalink() ?>" class="c-carousel-product-list__product" title="<?php the_title(); ?>" class="" data-id="<?= $post->ID ?>">
<article>            
<div class="c-carousel-product-list__product-thumb">
   <?php 
	$_img_placeholder = '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. woocommerce_placeholder_img_src() . '" alt="product placeholder Image" class="lazy-img card-img-top" width="65px" height="115px" />';
   	if (has_post_thumbnail( $post->ID )) {
   		$thumbnail_id = get_post_thumbnail_id( $post->ID );
   		$_url = get_the_post_thumbnail_url($post->ID, 'medium');
		$_alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
		// $_alt = empty(trim($_alt)) ? $post->post_title : get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
		if(!empty($_url)) {
    		$_img_placeholder = '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. $_url . '" alt="Placeholder" data-alt="' . $_alt . '" class="lazy-img card-img-top" />'; 
		}
   	} 
   	echo $_img_placeholder;

  	?>

</div>
<div class="c-carousel-product-list__product-body">
   <h3 class="c-carousel-product-list__product-title"><?php the_title(); ?></h3>
   <!-- <p class="c-carousel-product-list__product-text"><?php echo $_content; ?></p> -->
   <span class="c-carousel-product-list__product-btn"><?= __('Đọc thêm', 'bbs') ?></span>
</div>
</article>
</a>