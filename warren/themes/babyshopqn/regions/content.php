<?php
$tag = $row['tag'];
?>
<section class="section-content  <?= isset($row['spacing']) ? $row['spacing'] : "" ?>">
	<div class="<?= (isset($row_classes) & !empty($row_classes)) ? $row_classes : 'bbs2-container' ?>">
        <?php if ($row['title']) {
            printf('<%1$s class="%1$s">%2$s</%1$s>',$row['tag'],$row['title']);
        } ?>
        <?= do_shortcode($row['content']);?>
    </div>
</section>
