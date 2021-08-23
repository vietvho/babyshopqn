<?php 


/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
function custom_post_type_bds() {
 
// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => __( 'Bất động sản', 'Post Type General Name', 'x_view' ),
        'singular_name'       => __( 'Bất động sản', 'Post Type Singular Name', 'x_view' ),
        'menu_name'           => __( 'Bất động sản', 'x_view' ),
        'parent_item_colon'   => __( 'Parent Bất động sản', 'x_view' ),
        'all_items'           => __( 'Tất cả bài viết', 'x_view' ),
        'view_item'           => __( 'Xem Bất động sản', 'x_view' ),
        'add_new_item'        => __( 'Thêm mới Bất động sản', 'x_view' ),
        'add_new'             => __( 'Thêm mới', 'x_view' ),
        'edit_item'           => __( 'Chỉnh sửa Bất động sản', 'x_view' ),
        'update_item'         => __( 'Cập nhật Bất động sản', 'x_view' ),
        'search_items'        => __( 'Search Bất động sản', 'x_view' ),
        'not_found'           => __( 'Not Found', 'x_view' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'x_view' ),
    );
     
// Set other options for Custom Post Type
     
    $args = array(
        'label'               => __( 'bds_list', 'x_view' ),
        'description'         => __( 'BDS list and review', 'x_view' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => array( 'title', 'author', 'thumbnail' ),
        // You can associate this CPT with a taxonomy or custom taxonomy. 
        'taxonomies'          => array( 'bds_status', 'bds_legal', 'bds_type' ),
        /* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */ 
        // Icon
        'menu_icon' => 'dashicons-visibility',


        // Other
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'page',
    );
     
    // Registering your Custom Post Type
    register_post_type( 'bds_list', $args );
 
}
add_action( 'init', 'custom_post_type_bds'); 
 
 
//create a custom taxonomy name it topics for your posts 
function create_quanly_legal_status_hierarchical_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Trạng thái', 'taxonomy general name' ),
    'singular_name' => _x( 'Trạng thái', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Trạng thái' ),
    'all_items' => __( 'Tất cả Trạng thái' ),
    'parent_item' => __( 'Parent Trạng thái' ),
    'parent_item_colon' => __( 'Parent Trạng thái:' ),
    'edit_item' => __( 'Chỉnh sửa Trạng thái' ), 
    'update_item' => __( 'Cập nhật Trạng thái' ),
    'add_new_item' => __( 'Thêm mới Trạng thái' ),
    'new_item_name' => __( 'New Trạng thái Name' ),
    'menu_name' => __( 'Trạng thái' ),
  );    
// Now register the taxonomy
 
  register_taxonomy('bds_status',array('bds_list'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'bds_status', 'hierarchical' => true, 'with_front' => false ),
  ));

// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Giấy tờ hợp pháp', 'taxonomy general name' ),
    'singular_name' => _x( 'Giấy tờ hợp pháp', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Giấy tờ hợp pháp' ),
    'all_items' => __( 'Tất cả Giấy tờ hợp pháp' ),
    'parent_item' => __( 'Parent Giấy tờ hợp pháp' ),
    'parent_item_colon' => __( 'Parent Giấy tờ hợp pháp:' ),
    'edit_item' => __( 'Chỉnh sửa Giấy tờ hợp pháp' ), 
    'update_item' => __( 'Cập nhật Giấy tờ hợp pháp' ),
    'add_new_item' => __( 'Thêm mới Giấy tờ hợp pháp' ),
    'new_item_name' => __( 'New Giấy tờ hợp pháp Name' ),
    'menu_name' => __( 'Giấy tờ hợp pháp' ),
  );    
// Now register the taxonomy
 
  register_taxonomy('bds_legal',array('bds_list'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'bds_legal', 'hierarchical' => true, 'with_front' => false ),
  ));


// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Loại đất', 'taxonomy general name' ),
    'singular_name' => _x( 'Loại đất', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Loại đất' ),
    'all_items' => __( 'Tất cả Loại đất' ),
    'parent_item' => __( 'Parent Loại đất' ),
    'parent_item_colon' => __( 'Parent Loại đất:' ),
    'edit_item' => __( 'Chỉnh sửa Loại đất' ), 
    'update_item' => __( 'Cập nhật Loại đất' ),
    'add_new_item' => __( 'Thêm mới Loại đất' ),
    'new_item_name' => __( 'New Loại đất Name' ),
    'menu_name' => __( 'Loại đất' ),
  );    
// Now register the taxonomy
 
  register_taxonomy('bds_type',array('bds_list'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'bds_type', 'hierarchical' => true, 'with_front' => false ),
  ));
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Đất nền', 'taxonomy general name' ),
    'singular_name' => _x( 'Đất nền', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Đất nền' ),
    'all_items' => __( 'Tất cả Đất nền' ),
    'parent_item' => __( 'Parent Đất nền' ),
    'parent_item_colon' => __( 'Parent Đất nền:' ),
    'edit_item' => __( 'Chỉnh sửa Đất nền' ), 
    'update_item' => __( 'Cập nhật Đất nền' ),
    'add_new_item' => __( 'Thêm mới Đất nền' ),
    'new_item_name' => __( 'New Đất nền Name' ),
    'menu_name' => __( 'Đất nền' ),
  );    
// Now register the taxonomy
 
  register_taxonomy('bds_datnen',array('bds_list'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'bds_datnen', 'hierarchical' => true, 'with_front' => false ),
  ));
 
}
add_action( 'init', 'create_quanly_legal_status_hierarchical_taxonomy'); 
