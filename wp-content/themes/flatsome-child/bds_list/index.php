<?php 
include dirname(__FILE__) . '/functions/acf_field_default.php';
include dirname(__FILE__) . '/functions/post_type.php';
include dirname(__FILE__) . '/functions/ajax.php';
include dirname(__FILE__) . '/functions/shortcode.php';



// Adds login.css stylesheet to wp for login page styling customisation.
function bds_head() {
	$_fm = file_exists(get_template_directory() . '/assets/css/style.css') ? filemtime(get_template_directory() . '/assets/css/style.css') : date('Ym') ;

	//  Register Global files  //
	wp_register_style( 'bds-styles', get_stylesheet_directory_uri() . '/bds_list/assets/css/style.css', false, $_fm );
	//  Enqueue Global Styles  //
	wp_enqueue_style( 'bds-styles' );

	wp_register_style( 'bds-fancybox', get_stylesheet_directory_uri() . '/bds_list/assets/css/fancybox.css', false, $_fm );
	wp_enqueue_style( 'bds-fancybox' );

}
add_action( 'wp_enqueue_scripts', 'bds_head' );



function bds_footer() {
	$_fm = file_exists(get_template_directory() . '/assets/js/bds_list.custom.js') ? filemtime(get_template_directory() . '/assets/js/bds_list.custom.js') : date('Ym') ;
	wp_register_script( 'bds_footer', get_stylesheet_directory_uri() . '/bds_list/assets/js/bds_list.custom.js', [ 'jquery' ], $_fm , true );
	wp_enqueue_script( 'bds_footer' );
	wp_register_script( 'bds_footer_fancy', get_stylesheet_directory_uri() . '/bds_list/assets/js/fancybox.js', [ 'jquery' ], null , true );
	wp_enqueue_script( 'bds_footer_fancy' );

	function my_custom_js() {
		ob_start();
		?>
		    <script type='text/javascript' id='theme-script-js-extra'>var wp_ajax = {"url":"<?php echo admin_url('admin-ajax.php'); ?>"};</script>
		<?php 
		echo ob_get_clean();
	}
	add_action( 'wp_head', 'my_custom_js' );


}
add_action( 'wp_enqueue_scripts', 'bds_footer' );