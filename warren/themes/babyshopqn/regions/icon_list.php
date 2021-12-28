<?php
$icon_list = $row['list'];
if (!is_array($icon_list)) return;
?>
<section class=" bbs2-container  <?= $row['spacing'];?>">
    <div class="icon-list">
    <div class="d_row">
        <?php foreach ($icon_list as $list_item):?>
            <div class="icon-list--item d_col">
                <?php bbs_render_image($list_item['icon']['url'],["alt"=> $list_item['icon']['title'], "class"=>"list-icon"]);?>
                <span class="list-text"><?= $list_item['content'];?></span>
            </div>
        <?php endforeach;?>
    </div>
    </div>
</section>
