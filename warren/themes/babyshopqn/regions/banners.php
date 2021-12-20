<?php 
$banners = $row['banner_item'];
if (!is_array($banners)) return;
?>
<section class="banners <?= $row['spacing'];?>">
    <div class="bbs2-container">
    <div class="row">
        <?php foreach ($banners as $banner):?>
            <div class="<?= $row['columns'];?>" >
                <div class="banner-content" style="background-image:urL(<?= $banner['banner_image']; ?>)"><?= $banner['banner_content'];?></div>
            </div>
        <?php endforeach;?>
    </div>
    </div>
</section>