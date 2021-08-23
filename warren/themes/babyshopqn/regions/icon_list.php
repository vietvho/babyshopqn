<?php
$icon_list = $row['list'];
if (!is_array($icon_list)) return;
?>
<section class=" bbs2-container  <?= $row['spacing'];?>">
    <div class="icon-list">
    <div class="d_row">
        <?php foreach ($icon_list as $list_item):?>
            <div class="icon-list--item d_col">
                <img class="list-icon" alt="<?= $list_item['icon']['title'];?>" src="<?= $list_item['icon']['url'];?>" />
                <span class="list-text"><?= $list_item['content'];?></span>
            </div>
        <?php endforeach;?>
    </div>
    </div>
</section>
