<?php
    $imgGroup = $row['images_group'];
    if (!is_array($imgGroup)) return;
?>
<section class="responsive-banner <?= $row['spacing'];?>">
    <div class="bbs2-container ">
        <h2 class="responsive-banner__title"><?= $row['title'] ?></h2>
    <div class="row">
        <?php foreach ($imgGroup as $item):?>
            <?php 
            $imgDesk  = $item['desktop_image'];
            $imgMobi  = $item['mobile_image']; 
            $link     = $item['link_to'];
            ?>
            <div class="<?=$row['columns'];?>">
                <a class="img-container" target="<?= $link['target'] ?: "" ;?>" href="<?= $link['url'] ?: "" ?>">
                    <img class="lazy-img img-desktop" src="/wp-content/uploads/woocommerce-placeholder.png" data-src="<?= $imgDesk['url']?>" alt="<?= $imgDesk['alt'];?>"/>
                    <img class="lazy-img img-mobile" src="/wp-content/uploads/woocommerce-placeholder.png" data-src="<?= $imgMobi['url']?>" alt="<?= $imgMobi['alt'];?>"/>
                </a>
            </div>
        <?php endforeach;?>
    </div>
    </div>
</section>
