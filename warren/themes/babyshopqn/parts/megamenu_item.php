<?php 
$_langslugcurrent =  function_exists('pll_current_language') ? pll_current_language('slug') : 'en';


$_post_id = 'megamn_lang_' . $_langslugcurrent;



if ( have_rows( 'mega_menu', $_post_id ) ) {
?>
<div class="nav-slider">
	<div class="bbs2-container o-overflow--visible">
		<ul id="menu-main" data-ntype="<?= count(get_field( 'mega_menu', $_post_id )) < 8 ? 'small' : 'large' ?>">
			<?php 
			while ( have_rows( 'mega_menu', $_post_id ) ) {
			    the_row();
			    $row = get_row(true);
			    $row_index = get_row_index();

				if($row['is_enable']):
			    	// trả về kiểu dữ liệu array | string
			    	if($row['menuitem_select'] === 'link') {
				    	$_mn_item = $row['menuitem_object'];
				    	$_title = sanitize_title($_mn_item['title']);
				    	// Tạo ra id name
				    	$_name = 'mn_' . $row_index . '_' . $_title;
				    	$_attr_callmegamn = ($row['is-show_submenu']) ? 'data-id_nam="' . $_name . '"' : '';
				    	$_target = isset($_mn_item['target']) && !empty($_mn_item['target']) ? $_mn_item['target'] : '_self';
				    	$_target = $_mn_item['target'] ?: '_self';
					    ?>

						<li class="menu-item" <?= $_attr_callmegamn ?> ><a href="<?= $_mn_item['url'] ?>" target="<?= $_target ?>" ><?= $_mn_item['title'] ?></a>
							<?php include THEME_CHILD_DIR . '/parts/megamenu_container.php'; ?>
						</li>

					    <?php 
			    	} else {
			    		$_title = $row['menuitem_object'];
				    	$_name = sanitize_title($_title);
				    	$_name = "mn_{$row_index}_{$_name}";
				    	$_attr_callmegamn = ($row['is-show_submenu']) ? 'data-id_nam="' . $_name . '"' : '';
					    ?>
						
						<li class="menu-item" <?= $_attr_callmegamn ?> ><span ><?= $_title ?></span>
							<?php include THEME_CHILD_DIR . '/parts/megamenu_container.php'; ?>
						</li>
					    <?php 
			    	}
			    endif;
			}
			?>
		</ul>
	</div>
</div>
<?php 
}
