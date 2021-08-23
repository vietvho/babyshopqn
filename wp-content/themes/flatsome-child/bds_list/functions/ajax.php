<?php 
add_action('wp_ajax_bdslistloadmore', 'bds_list_loadmore'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_bdslistloadmore', 'bds_list_loadmore'); // wp_ajax_nopriv_{action}
add_action('bds_list_loadmore', 'bds_list_loadmore', 10, 2 );
function bds_list_loadmore(){
	$_paged = isset($_POST['page']) ? $_POST['page'] : -1;
	$_npost = isset($_POST['data_npost']) ? $_POST['data_npost'] : 8;
	$_datnen_slug = isset($_POST['data_datnen_slug']) && $_POST['data_datnen_slug'] != 'all' ? $_POST['data_datnen_slug'] : false;
	$_bds_id = isset($_POST['data_bds_id']) && $_POST['data_bds_id'] != 'all' ? $_POST['data_bds_id'] : false;

	$_paged = intval($_paged) + 1;
	$args = array(
		'post_type'      => 'bds_list',
		'post_status'    => 'publish',
		'posts_per_page' => $_npost,
		'paged'          => $_paged,
		'order'          => 'DESC',
		'orderby'        => 'ID',
	);


	if($_datnen_slug !== false) {

        $args['tax_query'] = array( 
            array(
                'taxonomy' => 'bds_datnen',
                'field'    => 'slug',
                'terms'    => $_datnen_slug,
            )
        );
	}

	$wp_query = new WP_Query($args);  

	$_list_js = array(
	    'data' => array(),
	    'meta' => array(
			"current_page" => $_paged,
			"last_page"    => $wp_query->max_num_pages,
			"postperpage"  => $args['posts_per_page'],
			"total"        => $wp_query->found_posts,
			"bds_id"     => $_bds_id,
	    )
	);  

    while ( $wp_query->have_posts() ) :
		$wp_query->the_post(); 

		$thumbnail = get_the_post_thumbnail_url();
		$heading = get_the_title();

		$address = get_field('address');
		$title = get_field('title');
		$lat = get_field('lat');
		$lng = get_field('lng');

		$get_legal = (array)get_field('legal');
		$legal = $get_legal['name'];
		$legal_class = $get_legal['slug'];



		$get_status = (array)get_field('status');
		$status = $get_status['name'];
		$status_class = $get_status['slug'];


		$get_type = (array)get_field('type');
		$type = $get_type['name'];


		$gallery = array();
		$get_gallery = get_field('gallery');
		foreach ($get_gallery as $key => $value) {
			$gallery[] = $value['image']['url'];
		}


		$content = "";	
		$lst_content = array();	


		$_other_info = get_field('other_info');

		if(isset($_other_info['mo_ta'])) {
			$content .= $_other_info['mo_ta'];
		}

		if(isset($_other_info['thong_tin_bds'])) {
			$lst_content[] = '<strong>Thông tin bđs:</strong>';
			foreach ($_other_info['thong_tin_bds']['ttin'] as $key => $value) {
				$_rs = $_other_info['thong_tin_bds'][$value['value']];
				$lst_content[] = $value['label'] . " : " . $_rs;
			}
			$lst_content[] = '';
		}

		if(isset($_other_info['cac_dien_tich_xung_quanh'])) {
			
			$lst_content[] = '<strong>Các diện tích xung quanh:</strong>';
			foreach ($_other_info['cac_dien_tich_xung_quanh'] as $key => $value) {
				$lst_content[] = $value['thong_tin'];
			}
			$lst_content[] = '';
		}

		foreach ($lst_content as $key => $value) {
			$content .= '<p>' . $value . '<p>';
		}



		$_id = get_the_ID();
		$_temp = array(
	        // 'ID' => $_id,
	        'address' => $address,
	        'content' => $content,
	        'gallery' => $gallery,
	        'heading' => $heading,
	        'lat' => $lat,
	        'lng' => $lng,
	        'legal' => $legal,
	        'legal_class' => $legal_class,
	        'status' => $status,
	        'status_class' => $status_class,
	        'thumbnail' => $thumbnail,
	        'title' => $title,
	        'type' => $type,
	        'url' => get_the_permalink(),
		);
		$_list_js['data'][] = $_temp;
    endwhile;
    wp_reset_postdata(); 

  	wp_reset_query();

	echo json_encode($_list_js);
  die; // here we exit the script and even no wp_reset_query() required!
}

if(isset($_GET['test'])) {
  header('Content-Type: application/json');

  do_action('bds_list_loadmore');
}
