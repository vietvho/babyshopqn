<?php 
// Template Name: About Page

get_header(); 
?>
<main class="l-simplepage" >
<div class="bbs2-container">
<div class="d_row">
	<div class="d_col l-simplepage__about-thumb">
		<?php 
    	if(has_post_thumbnail()) {
    		the_post_thumbnail('custom-1400');
    	} else {
	    	?>
			<img src="<?= THEME_CHILD_URI ?>/assets/img/about-1571979483591.png" alt="about">
	    	<?php 
    	}
    	?>
	</div>
	<div class="d_col l-simplepage__about-txtcontent">
		<h1 class="l-simplepage__title"><?php the_title() ?></h1>
		<?php
		if ( have_rows( 'regions' ) ) {

			while ( have_rows( 'regions' ) ) {
		        the_row();
		        $row = get_row(true);
		        $row_index = get_row_index();
		        $row_classes = 'c-article';
		        if(file_exists(THEME_CHILD_DIR . '/regions/' . get_row_layout() . '.php')) {
		        	include THEME_CHILD_DIR . '/regions/' . get_row_layout() . '.php';
		        }
			}

		} ?>
	</div>
</div>
</div>
</main>
<?php
get_footer(); 