<?php 


/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
function custom_post_type_goclamdep() {
 
// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => __( 'Góc làm đẹp', 'Post Type General Name', 'x_view' ),
        'singular_name'       => __( 'Góc làm đẹp', 'Post Type Singular Name', 'x_view' ),
        'menu_name'           => __( 'Góc làm đẹp', 'x_view' ),
        'parent_item_colon'   => __( 'Parent Góc làm đẹp', 'x_view' ),
        'all_items'           => __( 'Tất cả bài viết', 'x_view' ),
        'view_item'           => __( 'Xem Góc làm đẹp', 'x_view' ),
        'add_new_item'        => __( 'Thêm mới Góc làm đẹp', 'x_view' ),
        'add_new'             => __( 'Thêm mới', 'x_view' ),
        'edit_item'           => __( 'Chỉnh sửa Góc làm đẹp', 'x_view' ),
        'update_item'         => __( 'Cập nhật Góc làm đẹp', 'x_view' ),
        'search_items'        => __( 'Search Góc làm đẹp', 'x_view' ),
        'not_found'           => __( 'Not Found', 'x_view' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'x_view' ),
    );
     
// Set other options for Custom Post Type
     
    $args = array(
        'label'               => __( 'goc-lam-dep', 'x_view' ),
        'description'         => __( 'Event news and reviews', 'x_view' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'custom-fields', ),
        // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        // You can associate this CPT with a taxonomy or custom taxonomy. 
        'taxonomies'          => array( 'chuyen-muc-lam-dep' ),
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
    register_post_type( 'goc-lam-dep', $args );
 
}
add_action( 'init', 'custom_post_type_goclamdep', 0 ); 
 
 

//create a custom taxonomy name it topics for your posts 
function create_quanly_goclamdep_hierarchical_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
 
  $labels = array(
    'name' => _x( 'Chuyên mục góc làm đẹp', 'taxonomy general name' ),
    'singular_name' => _x( 'Chuyên mục góc làm đẹp', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Chuyên mục góc làm đẹp' ),
    'all_items' => __( 'Tất cả Chuyên mục góc làm đẹp' ),
    'parent_item' => __( 'Parent Chuyên mục góc làm đẹp' ),
    'parent_item_colon' => __( 'Parent Chuyên mục góc làm đẹp:' ),
    'edit_item' => __( 'Chỉnh sửa Chuyên mục góc làm đẹp' ), 
    'update_item' => __( 'Cập nhật Chuyên mục góc làm đẹp' ),
    'add_new_item' => __( 'Thêm mới Chuyên mục góc làm đẹp' ),
    'new_item_name' => __( 'New Chuyên mục góc làm đẹp Name' ),
    'menu_name' => __( 'Chuyên mục góc làm đẹp' ),
  );    
 
// Now register the taxonomy
 
  register_taxonomy('chuyen-muc-lam-dep',array('goc-lam-dep'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    
    'rewrite' => array( 'slug' => 'chuyen-muc-lam-dep', 'hierarchical' => true, 'with_front' => false ),
  ));
 
}
add_action( 'init', 'create_quanly_goclamdep_hierarchical_taxonomy', 0 ); 

function add_tags_categories_goclamdep() {
    // register_taxonomy_for_object_type('chuyen-muc-lam-dep', 'tilbud');
    register_taxonomy_for_object_type('post_tag', 'goc-lam-dep');
}
add_action('init', 'add_tags_categories_goclamdep');