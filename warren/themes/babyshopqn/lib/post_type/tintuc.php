<?php 


/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
function custom_post_type_tintuc() {
 
// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => __( 'Tin Tức', 'x_view' ),
        'singular_name'       => __( 'Tin Tức', 'x_view' ),
        'menu_name'           => __( 'Tin Tức', 'x_view' ),
        'parent_item_colon'   => __( 'Cấp cha của tin tức', 'x_view' ),
        'all_items'           => __( 'Tất cả tin Tức', 'x_view' ),
        'view_item'           => __( 'Xem tin tức', 'x_view' ),
        'add_new_item'        => __( 'Thêm mới tin tức', 'x_view' ),
        'add_new'             => __( 'Thêm mới', 'x_view' ),
        'edit_item'           => __( 'Chỉnh sửa tin tức', 'x_view' ),
        'update_item'         => __( 'Cập nhật tin tức', 'x_view' ),
        'search_items'        => __( 'Tìm kiếm tin tức', 'x_view' ),
        'not_found'           => __( 'Not Found', 'x_view' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'x_view' ),
    );
     
// Set other options for Custom Post Type
     
    $args = array(
        'label'               => __( 'tintuc', 'x_view' ),
        'description'         => __( 'Tin Tức news and reviews', 'x_view' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'custom-fields', ),
        // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        // You can associate this CPT with a taxonomy or custom taxonomy. 
        'taxonomies'          => array( 'tin-tuc' ),
        /* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */ 
        // Icon
        'menu_icon' => 'dashicons-calendar-alt',


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
    register_post_type( 'tintuc', $args );
 
}
add_action( 'init', 'custom_post_type_tintuc', 0 ); 
 
 

//create a custom taxonomy name it topics for your posts 
function create_quanly_tintuc_hierarchical_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
 
  $labels = array(
    'name' => _x( 'Chuyên mục tin tức', 'taxonomy general name' ),
    'singular_name' => _x( 'Chuyên mục tin tức', 'taxonomy singular name' ),
    'search_items' =>  __( 'Tìm kiếm chuyên mục' ),
    'all_items' => __( 'Tất cả chuyên mục' ),
    'parent_item' => __( 'Cấp cha của chuyên mục' ),
    'parent_item_colon' => __( 'Cấp cha của chuyên mục:' ),
    'edit_item' => __( 'Chỉnh sửa chuyên mục' ), 
    'update_item' => __( 'Cập nhật chuyên mục' ),
    'add_new_item' => __( 'Thêm mới chuyên mục' ),
    'new_item_name' => __( 'Tên mới của chuyên mục' ),
    'menu_name' => __( 'Chuyên mục tin tức' ),
  );    
 
// Now register the taxonomy
 
  register_taxonomy('tin-tuc',array('tintuc'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'tin-tuc' ),
  ));
 
}
add_action( 'init', 'create_quanly_tintuc_hierarchical_taxonomy', 0 ); 

function add_tags_categories_tintuc() {
    // register_taxonomy_for_object_type('category', 'tilbud');
    register_taxonomy_for_object_type('post_tag', 'tintuc');
}
add_action('init', 'add_tags_categories_tintuc');