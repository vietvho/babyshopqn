<?php 
// Template Name: Offers List Page

get_header(); 
?>
<main class="l-simplepage" >
<div class="bbs2-container">
<div class="d_row">
	<div class="d_col l-simplepage__normal-txtcontent">
		<!-- <h1 class="l-simplepage__title"><?php the_title() ?></h1> -->
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
	<div class="d_col l-simplepage__normal-menu">
		<!-- <ul>
			<li><a href="#" title="">Chính sách mua hàng</a></li>
			<li><a href="#" title="">Chính sách bảo mật</a></li>
			<li><a href="#" title="">Điều khoản chung</a></li>
			<li><a href="#" title="">Chính sách giải quyết khiếu nại</a></li>
			<li><a href="#" title="">Đường dây nóng</a></li>
		</ul> -->
		<?php 
		wp_nav_menu( array(
		   'theme_location'  => 'simplepagemenu',
		   'menu_class'      => 'navbar-nav', 
		   'container_class'      => 'navbar-container', 
		   'before'          => '',
		   'after'           => '',
		   'link_before'     => '',
		   'link_after'      => '',
		   'depth'           => 0,
		   'fallback_cb'     => '',                   
		 
		)); 
		?>
	</div>
</div>
</div>
</main>
<?php
get_footer(); 