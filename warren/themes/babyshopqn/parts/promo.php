<?php 
$promo_option = get_field('promo--is-show','options');
if (!$promo_option) return;
$promo_background = get_field('promo_background','options');?>
<div class="header--promo bbs-container bg-<?php echo esc_attr($promo_background);?>">
    <?php echo get_field('promo_content','options');?>
</div>