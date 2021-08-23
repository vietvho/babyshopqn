<?php 

$_langslugcurrent =  function_exists('pll_current_language') ? pll_current_language('slug') : 'en';

$_post_id = 'option';
if(get_field('mega_menu', 'megamn_lang_' . $_langslugcurrent))  {
	$_post_id = 'megamn_lang_' . $_langslugcurrent;
}

if ( have_rows( 'mega_menu', $_post_id ) ) {
while ( have_rows( 'mega_menu', $_post_id ) ) {
    the_row();
    $row = get_row(true);
    $row_index = get_row_index();

    if($row['is_enable'] && $row['is_show_submenu']):
    	// die();
    	// trả về kiểu dữ liệu array | string
    	$_title = $row['menuitem_object'];
    	$_target = $_url = '';
    	if($row['menuitem_select'] === 'link') {
			$_title  = $row['menuitem_object']['title'];
			$_target = $row['menuitem_object']['target'] ?: '_self';
			$_url    = $row['menuitem_object']['url'];
    	}
    	$_name = sanitize_title($_title);

    	// Tạo ra id name
    	$_name = 'mn_' . $row_index . '_' . $_name;
    ?>

	<div class="c_megamenu" data-class="<?= $_name ?>">
		<span class="c_megamenu__point" ></span>
		<div class="c_megamenu__content">
			<div class="bbs2-container">
				<p class="c_megamenu__viewalllink"><?= __('Xem tất cả', 'bbs') ?>: 
				<?php if(!empty($_url)): ?>
					<a href="<?= $_url ?>" target="<?= $_target ?>" ><?= $_title ?></a>
				<?php else: ?>
					<span><?= $_title ?></span>
				<?php endif; ?>
				</p>
				<div class="c_megamenu__row" data-ncolumn="<?= count($row['add_column']) ?>">
					<?php 
					foreach ($row['add_column'] as $_k => $_v) {								
					?>
					<?php 
						if($_v['type_item'] === 'submenulist'):
					?>
					<?php if($_v['menu_item_list']) {  ?>
						<div class="c_megamenu__col mn">
							<ul>
							<?php foreach ($_v['menu_item_list'] as $_k2 => $_v2) { ?>
								<?php 
								$_is_title = $_v2['is_title'];

								// var_dump($_v2);
								$_item = false;

								if($_v2['menuitem_select'] === 'link') {
									$_object = $_v2['menuitem_object'];
									$_text = $_is_title ? '<strong>' . $_object['title'] . '</strong>' : $_object['title'];
									$_target = $_object['target'] ?: '_self';
									$_item = '<a href="' . $_object['url'] . '" target="' . $_target . '" >' . $_text . '</a>';

								}
								if($_v2['menuitem_select'] === 'onlytext') {
									$_object = $_v2['menuitem_object'];
									$_text = $_is_title ? '<strong>' . $_object . '</strong>' : $_object;
									$_item = '<span>' . $_text . '</span>';
								}

								?>
								<?php if(isset($_v2['menu_item'])) { ?>
									<?php $_menu_item = $_v2['menu_item']  ?>
									<?php $_menu_item_title = isset($_menu_item['title']) ? $_menu_item['title'] : ''  ?>
								<?php } ?>
								<?php if($_item) { ?>
									<li><?= $_item ?></li>
								<?php } ?>
							<?php } ?>
							</ul>
						</div>
					<?php } ?>
					<?php 
						elseif($_v['type_item'] === 'relatedbanner'):
							$_menu_related = $_v['related_menu'];
							$_image = isset($_menu_related['image']) ? $_menu_related['image'] : false;
							$_link = $_menu_related['link'] ?: false;
							$_title = isset($_link['title']) ? $_link['title'] : '';
							$_url = isset($_link['url']) ? $_link['url'] : false;
							$_target = $_link['target'] ?: '_self';
							if($_image !== false && $_link !== false ) {
								?>
								<div class="c_megamenu__col mn_related_img">
									<a href="<?= $_url ?>" target="<?= $_target ?>" title="<?= $_menu_related['link']['title'] ?>" class="outer-img" ><?php echo wp_get_attachment_image( $_image, 'full' ); ?><span><?= $_title ?></span></a>
								</div>
								<?php 
							} 
							if($_image !== false && $_link === false) {
							?>
								<div class="c_megamenu__col mn_related_img">
									<span class="outer-img"><?php echo wp_get_attachment_image( $_image, 'full' ); ?></span>
								</div>
							<?php 
							}
						endif;
					?>
					<?php 
					}
					?>
				</div>
			</div>
		</div>
	</div>

    <?php 
    endif;
}

}
