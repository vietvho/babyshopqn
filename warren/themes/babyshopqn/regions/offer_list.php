<?php
$offer_list = $row['list'];
if (!is_array($offer_list)) return;
?>
<section class="offer-list  <?= $row['spacing'];?>">
	<div class="bbs2-container">
    <?php if ($row['title']) {
            printf('<%1$s class="%1$s offer-list__title">%2$s</%1$s>',$row['tag'],$row['title']);
    } ?>
    <div class="d_row">
        <?php foreach ($offer_list as $list_item):?>
            <?php 
            $product = wc_get_product($list_item['product']); 
			if (!$product || !$product->exists()){ continue; }
            $title = $product->get_title();
            $url = get_permalink( $product->get_id() );
            ?>
            <a href="<?= $url ?>" class="d_col">
                <div class="outer" data-bglazy="">
                    <span class="offer-list__producttitle"><?= $product->get_title() ?></span>
                    <?php 
                    if (has_post_thumbnail( $list_item['product'] )) {
                        $_thumbnail_id = get_post_thumbnail_id( $list_item['product'] );
                        $_url = get_the_post_thumbnail_url($list_item['product'], 'medium');
                        $_alt = get_post_meta($_thumbnail_id, '_wp_attachment_image_alt', true) ;
                        $_alt = !empty(trim($_alt)) ? $_alt : $title;
                        // $_alt = empty(trim($_alt)) ? $loop->post->post_title : get_post_meta($_thumbnail_id, '_wp_attachment_image_alt', true);
                        echo '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. $_url . '" alt="Placeholder" data-alt="' . $_alt . '" class="lazy-img card-img-top" />
                        '; 
                   } else 
                        echo '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. woocommerce_placeholder_img_src() . '" alt="product placeholder Image" class="lazy-img card-img-top" width="65px" height="115px" />
                        '; 
                        ?>
                </div>
            </a>
        <?php endforeach;?>
    </div>
    </div>
</section>
