<?php 


/**
 * @desc Move Yoast Meta Box prio
 */

	function yoasttobottom() {
		return 'low';
	}

	add_filter( 'wpseo_metabox_prio', 'yoasttobottom');
	


/**
 * @desc Remove Emojis
 */

	function disable_wp_emojicons() {
		// all actions related to emojis
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
		remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
		remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
		// filter to remove TinyMCE emojis
		add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
	}
	add_action( 'init', 'disable_wp_emojicons' );

	function disable_emojicons_tinymce( $plugins ) {
		if ( is_array( $plugins ) ) {
			return array_diff( $plugins, array( 'wpemoji' ) );
		} else {
			return array();
		}
	}
	add_action( 'init', 'disable_emojicons_tinymce' );

/**
 * @desc Clean up WP Head
 */

function head_cleanup() {
	remove_action('wp_head', 'feed_links_extra', 3);
	add_action('wp_head', 'ob_start', 1, 0);
	add_action('wp_head', function () {
		$pattern = '/.*' . preg_quote(esc_url(get_feed_link('comments_' . get_default_feed())), '/') . '.*[\r\n]+/';
		echo preg_replace($pattern, '', ob_get_clean());
	}, 3, 0);
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'wp_shortlink_wp_head', 10);
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_action('admin_print_styles', 'print_emoji_styles');
	remove_action('wp_head', 'wp_oembed_add_discovery_links');
	remove_action('wp_head', 'wp_oembed_add_host_js');
	remove_action('wp_head', 'rest_output_link_wp_head', 10);
	remove_filter('the_content_feed', 'wp_staticize_emoji');
	remove_filter('comment_text_rss', 'wp_staticize_emoji');
	remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
	add_filter('use_default_gallery_style', '__return_false');

	global $wp_widget_factory;

	if (isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {
		remove_action('wp_head', [$wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style']);
	}
}
add_action('init', 'head_cleanup');



/**
 * Clean up output of stylesheet <link> tags
 */
function clean_style_tag($input) {
		preg_match_all("!<link rel='stylesheet'\s?(id='[^']+')?\s+href='(.*)' type='text/css' media='(.*)' />!", $input, $matches);
		if (empty($matches[2])) {
			return $input;
		}
		// Only display media if it is meaningful
		$media = $matches[3][0] !== '' && $matches[3][0] !== 'all' ? ' media="' . $matches[3][0] . '"' : '';
		return '<link rel="stylesheet" href="' . $matches[2][0] . '"' . $media . '>' . "\n";
	}
	add_filter('style_loader_tag', 'clean_style_tag');

	/**
 * Don't return the default description in the RSS feed if it hasn't been changed
 */
function remove_default_description($bloginfo) {
		$default_tagline = 'Just another WordPress site';
		return ($bloginfo === $default_tagline) ? '' : $bloginfo;
	}
	add_filter('get_bloginfo_rss', 'remove_default_description');

/**
 * @desc Disable XML RPC
 */
add_filter('xmlrpc_enabled', '__return_false');
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );

/**
 * Disable pingback XMLRPC method
 */
function filter_xmlrpc_method($methods) {
	unset($methods['pingback.ping']);
	return $methods;
}
add_filter('xmlrpc_methods', 'filter_xmlrpc_method', 10, 1);

/**
 * Disable XMLRPC call
 */
function kill_xmlrpc($action) {
	if ($action === 'pingback.ping') {
		wp_die('Pingbacks are not supported', 'Not Allowed!', ['response' => 403]);
	}
}
add_action('xmlrpc_call', 'kill_xmlrpc');

/**
 * Remove pingback header
 */
function filter_headers($headers) {
	if (isset($headers['X-Pingback'])) {
		unset($headers['X-Pingback']);
	}
	return $headers;
}
add_filter('wp_headers', 'filter_headers', 10, 1);

/**
 * Kill bloginfo('pingback_url')
 */
function kill_pingback_url($output, $show) {
	if ($show === 'pingback_url') {
		$output = '';
	}
	return $output;
}
add_filter('bloginfo_url', 'kill_pingback_url', 10, 2);
add_filter('show_admin_bar', '__return_false');
function remove_core_updates(){
		global $wp_version;return(object) array('last_checked'=> time(),'version_checked'=> $wp_version,);
}
add_filter('pre_site_transient_update_core','remove_core_updates');
add_filter('pre_site_transient_update_plugins','remove_core_updates');
add_filter('pre_site_transient_update_themes','remove_core_updates');
// add_filter( 'pre_option_update_core', create_function( '$a', "return null;" ) );
// add_action( 'init', create_function( '$a', "remove_action( 'init', 'wp_version_check' );" ), 2 );  
/*
 * @desc Remove version info from head and feeds for added security
 */

add_filter('the_generator', '__return_false');
function setup_theme() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'woocommerce' );
	add_theme_support( 'post-thumbnails' );
	add_filter( 'nav_menu_css_class', 'special_nav_class', 10, 3 );
	load_theme_textdomain( 'bbs', THEME_CHILD_DIR. '/languages/' );

}
function special_nav_class( $classes, $item, $args ) {
	if ( 'primary' === $args->theme_location ) {
			$classes[] = 'swiper-slide';
	}

	return $classes;
}
add_action( 'after_setup_theme', 'setup_theme' );
function setup_script(){


	wp_dequeue_style('storefront-style');
	wp_dequeue_style('storefront-icons');
	wp_dequeue_style('storefront-fonts');
	wp_dequeue_style('storefront-child-style');
	wp_deregister_style('storefront-icons');
	if ( function_exists( 'is_woocommerce' ) ) {
		//dequeue scripts and styles
		if ( !is_account_page() &&! is_cart() && ! is_checkout() ) {
			wp_dequeue_style( 'woocommerce_frontend_styles' );
			wp_dequeue_style( 'woocommerce_fancybox_styles' );
			wp_dequeue_style( 'woocommerce_chosen_styles' );
			wp_dequeue_style( 'woocommerce_prettyPhoto_css' );
			wp_dequeue_script( 'wc_price_slider' );
			wp_dequeue_script( 'wc-single-product' );
			wp_dequeue_script( 'wc-checkout' );
			wp_dequeue_script( 'wc-add-to-cart-variation' );
			wp_dequeue_script( 'wc-single-product' );
			wp_dequeue_script( 'wc-cart' );
			wp_dequeue_script( 'wc-chosen' );
			wp_dequeue_script( 'woocommerce' );
			wp_dequeue_script( 'prettyPhoto' );
			wp_dequeue_script( 'prettyPhoto-init' );
			wp_dequeue_script( 'jquery-blockui' );
			wp_dequeue_script( 'jquery-placeholder' );
			wp_dequeue_script( 'fancybox' );
			wp_dequeue_script( 'jqueryui' );
			wp_dequeue_script( 'selectWoo' );
			wp_deregister_script( 'selectWoo' );
		}
	}
	wp_dequeue_style( 'wc-block-style' );
	wp_dequeue_style( 'wp-block-library' );
 
	// if (!is_front_page() && !is_home()){

	//   wp_dequeue_style('jquery-yith-wcwl');
	//   wp_dequeue_style('yith-wcwl-font-awesome');
	// }
	if (is_front_page()){
		wp_dequeue_script( 'wc-add-payment-method' );
		wp_dequeue_script( 'jquery-blockui' );
		wp_dequeue_script( 'wc_price_slider' );
		wp_dequeue_script( 'wc-single-product' );
		wp_dequeue_script( 'wc-credit-card-form' );
		wp_dequeue_script( 'wc-checkout' );
		wp_dequeue_script( 'wc-add-to-cart-variation' );
		wp_dequeue_script( 'wc-single-product' );
		wp_dequeue_script( 'wc-cart' );
		wp_dequeue_script( 'wc-chosen' );
		wp_dequeue_script( 'woocommerce' );
		wp_dequeue_script( 'prettyPhoto' );
		wp_dequeue_script( 'prettyPhoto-init' );
		wp_dequeue_script( 'jquery-blockui' );
		wp_dequeue_script( 'jquery-placeholder' );
		wp_dequeue_script( 'jquery-payment' );
		wp_dequeue_script( 'fancybox' );
	}
	wp_enqueue_style('font-inter','https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
	wp_enqueue_style('bbs-style',THEME_CHILD_URI.'/assets/css/main.css',[],filemtime(THEME_CHILD_DIR.'/assets/css/main.css'));
	wp_enqueue_script('bbs-js',THEME_CHILD_URI.'/assets/js/main.js',['jquery'],filemtime(THEME_CHILD_DIR.'/assets/js/main.js'),true);
}
add_filter( 'woocommerce_enqueue_styles', 'woocommerce_dequeue_styles' );

function bbs_loadstyle_to_admin($hook) {

				if($hook === 'edit.php' && (isset($_GET['post_type']) && $_GET['post_type'] === 'product')) {
					wp_enqueue_style( 'bbs_loadstyle_to_admin', THEME_CHILD_URI . '/assets/admin/admin-style.css' );
				}
				
}
add_action( 'admin_enqueue_scripts', 'bbs_loadstyle_to_admin' );


function woocommerce_dequeue_styles( $enqueue_styles ) {
		if ( !is_account_page() &&! is_cart() && ! is_checkout() ) {
			unset( $enqueue_styles['woocommerce-general'] );	// Remove the gloss
			unset( $enqueue_styles['woocommerce-layout'] );		// Remove the layout
			unset( $enqueue_styles['woocommerce-smallscreen'] );	// Remove the smallscreen optimisation
		}
	return $enqueue_styles;
}

add_action( 'wp_enqueue_scripts', 'setup_script', 40 );
add_filter( 'woocommerce_get_image_size_single', 'woocommerce_set_product_img_size' );
add_filter( 'woocommerce_get_image_size_shop_single', 'woocommerce_set_product_img_size' );
add_filter( 'woocommerce_get_image_size_woocommerce_single', 'woocommerce_set_product_img_size' );
function woocommerce_set_product_img_size($size)
{
		$size['crop'] = 1;
		return $size;
}
add_filter( 'woocommerce_get_image_size_gallery_thumbnail', function( $size ) {
	return array(
			'width' => 128,
			'height' => 128,
			'crop' => 1,
	);
} );
// hide widgets
function hide_menu() {
	remove_submenu_page( 'themes.php', 'storefront-welcome' ); // hide the widgets submenu
	remove_submenu_page('themes.php', 'theme-editor.php');
}
add_action('admin_head', 'hide_menu');
add_filter( 'acf/settings/load_json', 'my_acf_json_load_point' );

function my_acf_json_load_point( $paths ) {
	$paths = THEME_CHILD_DIR. '/acf-json';
	return $paths;
}
 
add_filter('acf/settings/save_json', 'my_acf_json_save_point');
 
function my_acf_json_save_point( $path ) {
		// update path
	$paths = THEME_CHILD_DIR. '/acf-json';
		// return
		return $path;
		
}
if( function_exists('acf_add_options_page') ) {

		acf_add_options_page(array(
				'page_title'  => 'Theme Options',
				'menu_title'  => 'Theme Options',
				'menu_slug'   => 'bbs-settings',
				'capability'  => 'manage_options',
				'redirect'    => false,
				'icon_url'    => 'dashicons-forms',
				'position'    => 22,
		));

		$_langslugcurrent =  function_exists('pll_current_language') ? pll_current_language('slug') : 'en';
		acf_add_options_page(array(
				'page_title' => 'Mega Menu',
				'menu_title' => 'Mega Menu',
				'menu_slug'  => 'bbs-menusettings',
				'capability' => 'manage_options',
				'redirect'   => false,
				'post_id'    => 'megamn_lang_' . $_langslugcurrent,
				'icon_url'   => 'dashicons-tagcloud',
				'position'   => 22,
		));

}
// add SVG
function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
	 }
	 add_filter('upload_mimes', 'cc_mime_types');
// modify class primary

add_action( 'admin_init', 'hide_editor' );
 
function hide_editor() {
	remove_post_type_support('page', 'editor');
	// remove_post_type_support('post', 'editor');
	add_filter('use_block_editor_for_post', '__return_false');
}


// ================
// Xóa đi thẻ p trong content của contact form 7
// ================
add_filter( 'wpcf7_autop_or_not', '__return_false' );


// ================
// Limit Word
// ================
function babyshopqn_string_limit_words($content, $length)
{

	$length = ($length ? $length : 120);
	$content =  strip_shortcodes($content);
	$content =  preg_replace('/<!--more-->.+/is',"",$content);
	$content =  str_replace(']]>', ']]&gt;', $content);
	$content =  strip_tags($content);
	$content =  trim(preg_replace("/[\n\r\t ]+/", ' ', $content), ' ');
	$content =  str_replace("&nbsp;","",$content);

	$content = explode(' ', $content, ($length + 1));

	if(count($content) > $length) {
	array_pop($content);
	}

	return implode(' ', $content);
}

function register_bbs_menu() {
	register_nav_menus(
		array(
			'primary' => __( 'Header Menu' ),
			'secondary' => __( 'Footer Menu' ),
			'simplepagemenu' => __( 'Simple Page Menu' )
		)
	);
}
add_action( 'init', 'register_bbs_menu' );


function feature_rendersvg( $svg_path ) {
		$_svg = @file_get_contents($svg_path);
		$_svg = str_replace('<?xml version="1.0" encoding="UTF-8"?>', '', $_svg);
		$_svg = str_replace("\n", '', $_svg);
		// Return our new avatar
		return $_svg;
}

function bbs_render_image($path,$attributes) {
	$str_atr = "";
	foreach($attributes as $k => $v) {
		$str_atr .= " $k='$v'";
	}

	if (strpos($path,".svg")) {
		return printf('<i %1$s>%2$s</i>', $str_atr, feature_rendersvg($path));
	}
	else {
		return printf('<img src="%1$s" %2$s/>',$path, $str_atr);
	}
}

/* shortcode wishlist modifier */
add_shortcode('bbs_wishlist_extra_view','bbs_wishlist_extra_view');
function bbs_wishlist_extra_view($atts){
	$atts = shortcode_atts( array(
		'layout' => 'table',
		'title' => __('My wishlist','bbs'),
		'form_id'=>'ajax_login',
		'view_all'=> __('View All','bbs')
	), $atts, 'bbs_wishlist_extra_view' ); 
	$output = '<div class="bbs-wishlist"> <h2 class="section-title text--left">';
		if ($atts['title'] !='none'):?>
		 <?php $output .= $atts['title']; ?>
		<?php endif; ?>
		<?php if( $atts['view_all'] !='none'){ $output .='<a href="/wishlist">'. $atts['view_all'].'</a>';}
	$output .= '</h2>';
	$convert_att= [];
	foreach ($atts as $key => $att){
		$convert_att [] = "$key = '{$att}'";
	}
	$output .= do_shortcode('[yith_wcwl_wishlist '.implode(' ',$convert_att).']');
	$output .= '</div>';
	return $output;
}

function custom_woocommerce_auto_complete_order( $order_id ) { 
	if ( ! $order_id ) {
			return;
	}

	$order = wc_get_order( $order_id );
	$order->update_status( 'completed' );
}

add_shortcode('confirmation_order_details','vnpay_welcome_message');
function vnpay_welcome_message(){
if ( $_REQUEST['vnp_TxnRef'] ) {  
	
	$order = wc_get_order( $_REQUEST['vnp_TxnRef'] );
	if ($order->get_status() == 'processing' || $order->get_status() == 'pending'){
		$order->update_status( 'completed' );
		WC()->cart->empty_cart();
	}
	}

ob_start();?>
<div class="bbs2-container text--center u-ptb-50">
	<div class="row">
			<div class="d_col">
			<div class="page404area__logo"><img src="<?= THEME_CHILD_URI ?>/assets/img/about-1571979483591.png" alt="about"></div>

			</div>
	</div>

	<div class="row">
			<div class="d_col">
			 <div>
				<h1 class="page-title"><?= $_REQUEST['message']; ?></h1>
				<div class="success-description">
					 <p><?php _e('Cảm ơn bạn đã mua sắm cùng BabyshopQN.','bbs');?></p>
					 <p><?php _e('Vui lòng kiểm tra email của bạn để biết thông tin chi tiết về đơn hàng','bbs');?> 
					 <?php if (is_user_logged_in()){
						 _e(' hoặc truy cập','bbs');
						echo '<a href="'.get_permalink( get_option('woocommerce_myaccount_page_id') ).'">'.__(' Tài khoản','bbs').'</a>';
						 _e(' để quản lý tài khoản và đơn hàng của bạn.','bbs');
					 }?>
					 </p>
				
				</div>
				

			</div>
		 </div>
	</div>
</div>
<?php 
return ob_get_clean();
}


// ===== 
// FUNCTION GET LIST 
// ===== 
function bbs_getlist_album($argsx){
	ob_start();
	// the query
	global $wp_query; 
	global $bbs_info_user; 
	global $query_string;
	$showposts           = (isset($argsx['showposts']) ? $argsx['showposts'] : 2);
	$column_type         = (isset($argsx['column_type']) ? $argsx['column_type'] : 'c1col');
	$bbs_is_paging           = (isset($argsx['bbs_is_paging']) ? $argsx['bbs_is_paging'] : true);
	$bbs_is_has_thumbnail = (isset($argsx['bbs_is_has_thumbnail']) ? $argsx['bbs_is_has_thumbnail'] : true);
	$bbs_is_outer_content = (isset($argsx['bbs_is_outer_content']) ? $argsx['bbs_is_outer_content'] : true);
	parse_str( $query_string, $my_query_array );
	$paged = ( isset( $my_query_array['paged'] ) && !empty( $my_query_array['paged'] ) ) ? $my_query_array['paged'] : 1;
	$wp_query = new WP_Query($argsx);    
	
	if (have_posts()) : ?>
		<div class="bbs_inner <?php echo ($bbs_is_outer_content !== true)?: "has_boxshadow" ?>">
		<?php
			global $post; 
			global $_stt; 
			global $_class_over; 
			global $bbs_is_outer_content; 
			$_stt=0;
			while ( $wp_query->have_posts() ) : 
				$wp_query->the_post();
				$_the_ID = get_the_ID();
				$bbs_linktop = get_permalink($_the_ID);
				$_other_info_meta = get_post_meta(get_the_ID(), '_other_info', true); 
				get_template_part('/parts/content', 'blogblock');
				$_stt++;
			endwhile;
		?>
		</div>

	<?php 
		if (  $wp_query->max_num_pages > 1 ) {
			$query_vars_filter =  array_filter($wp_query->query_vars);
			echo '<p class="readmore" ><span class="bbs_misha_loadmore bbs_btn_misha_loadmore" 
				data-ajaxurl="' . admin_url( 'admin-ajax.php' ) . '"
				data-posts="' . esc_attr(json_encode( $query_vars_filter )) . '"
				data-current_page="' . $paged . '"
				data-max_page="' .  $wp_query->max_num_pages . '"
				data-txtbtn="' . __('Tải thêm', 'bbs'). '">' . __('Tải thêm', 'bbs'). '</span></p>';
		}
	?>

	<?php
		wp_reset_postdata(); 
		else:
			echo '<div class="bbs_inner_row">';
			echo "<h2 class=\"bbs_notfofund_title\">Chưa có bài viết hay sản phẩm nào ở đây</h2>";
			echo "<p class=\"bbs_notfofund_text\"><span class='dis_block'>Nội dung bạn đang tìm kiếm không được tìm thấy.</span></p>";
			echo "</div>";
		endif; // end have_posts() 
	wp_reset_query();
	$output = ob_get_clean();
	return $output;
}
// set min input add to cart
add_filter( 'woocommerce_quantity_input_min', 'woocommerce_quantity_input_min', 10, 2 );
function woocommerce_quantity_input_min( $min, $product ){
		$min = 1;
		return $min;
}
