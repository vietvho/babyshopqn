<?php 


/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
function custom_post_type_brand_story() {
 
// Set UI labels for Custom Post Type
    $labels = array(
        'name'                => __( 'Brand stories', 'x_view' ),
        'singular_name'       => __( 'Brand stories', 'x_view' ),
        'menu_name'           => __( 'Brand stories', 'x_view' ),
        'parent_item_colon'   => __( 'Cấp cha của brand story', 'x_view' ),
        'all_items'           => __( 'Tất cả tin Tức', 'x_view' ),
        'view_item'           => __( 'Xem brand story', 'x_view' ),
        'add_new_item'        => __( 'Thêm mới brand story', 'x_view' ),
        'add_new'             => __( 'Thêm mới', 'x_view' ),
        'edit_item'           => __( 'Chỉnh sửa brand story', 'x_view' ),
        'update_item'         => __( 'Cập nhật brand story', 'x_view' ),
        'search_items'        => __( 'Tìm kiếm brand story', 'x_view' ),
        'not_found'           => __( 'Not Found', 'x_view' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'x_view' ),
    );
     
// Set other options for Custom Post Type
     
    $args = array(
        'label'               => __( 'brand-story', 'x_view' ),
        'description'         => __( 'Brand stories news and reviews', 'x_view' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'custom-fields', ),
        // 'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        // You can associate this CPT with a taxonomy or custom taxonomy. 
        'taxonomies'          => array( 'thuong-hieu' ),
        /* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */ 
        // Icon
        'menu_icon' => 'dashicons-buddicons-topics',


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
    register_post_type( 'brand-story', $args );
 
}
add_action( 'init', 'custom_post_type_brand_story', 0 ); 
 
 

//create a custom taxonomy name it topics for your posts 
function create_quanly_brand_story_hierarchical_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
 
  $labels = array(
    'name' => _x( 'Chuyên mục cho thương hiệu', 'taxonomy general name' ),
    'singular_name' => _x( 'Chuyên mục cho thương hiệu', 'taxonomy singular name' ),
    'search_items' =>  __( 'Tìm kiếm thương hiệu' ),
    'all_items' => __( 'Tất cả thương hiệu' ),
    'parent_item' => __( 'Cấp cha của thương hiệu' ),
    'parent_item_colon' => __( 'Cấp cha của thương hiệu:' ),
    'edit_item' => __( 'Chỉnh sửa thương hiệu' ), 
    'update_item' => __( 'Cập nhật thương hiệu' ),
    'add_new_item' => __( 'Thêm mới thương hiệu' ),
    'new_item_name' => __( 'Tên mới của thương hiệu' ),
    'menu_name' => __( 'Chuyên mục cho thương hiệu' ),
  );    
 
// Now register the taxonomy
 
  register_taxonomy('thuong-hieu',array('brand-story'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'thuong-hieu' ),
  ));
 
}
add_action( 'init', 'create_quanly_brand_story_hierarchical_taxonomy', 0 ); 

function add_tags_categories_brand_story() {
    // register_taxonomy_for_object_type('category', 'tilbud');
    register_taxonomy_for_object_type('post_tag', 'brand-story');
}
add_action('init', 'add_tags_categories_brand_story');