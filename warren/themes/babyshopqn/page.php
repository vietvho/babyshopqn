<?php 
get_header(); 
?>
	
<?php
if ( have_rows( 'regions' ) ) {

	while ( have_rows( 'regions' ) ) {
        the_row();
        $row = get_row(true);
        $row_index = get_row_index();
        if(file_exists(THEME_CHILD_DIR . '/regions/' . get_row_layout() . '.php')) {
        	include THEME_CHILD_DIR . '/regions/' . get_row_layout() . '.php';
        }
	}

} else { ?>
<main class="page404area main" >
	<p class="text--center txt-notfound"><?= __('Rất tiếc, trang này chưa có nội dung', 'bbs') ?></p>
</main>
<?php }  ?>
<?php
get_footer(); 
