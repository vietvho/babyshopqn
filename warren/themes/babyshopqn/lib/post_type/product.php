<?php 



//create a custom taxonomy name it topics for your posts 
function create_other_taxonomy_product_hierarchical_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
 
// === Dòng sản phẩm
  $label = array(
    'name' => __( 'Dòng sản phẩm', 'bbs' ),
    'singular_name' => __( 'Dòng sản phẩm', 'bbs' ),
    'search_items' =>  __( 'Tìm kiếm Dòng sản phẩm', 'bbs' ),
    'all_items' => __( 'Tất cả Dòng sản phẩm', 'bbs' ),
    'parent_item' => __( 'Parent Dòng sản phẩm', 'bbs' ),
    'parent_item_colon' => __( 'Parent Dòng sản phẩm:', 'bbs' ),
    'edit_item' => __( 'Chỉnh sửa Dòng sản phẩm', 'bbs' ),
    'update_item' => __( 'Cập nhật Dòng sản phẩm', 'bbs' ),
    'add_new_item' => __( 'Thêm mới Dòng sản phẩm', 'bbs' ),
    'new_item_name' => __( 'New Dòng sản phẩm tên mới', 'bbs' ),
    'menu_name' => __( 'Dòng sản phẩm', 'bbs' ),
  );    
 

// Now register the taxonomy
  register_taxonomy('product_line',array('product'), array(
    'hierarchical' => true,
    'labels' => $label,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'product_line', 'hierarchical' => true, 'with_front' => false ),
  ));
// === Product Brand
  $label = array(
    'name' => __( 'Thương hiệu sản phẩm', 'bbs' ),
    'singular_name' => __( 'Thương hiệu sản phẩm', 'bbs' ),
    'search_items' =>  __( 'Tìm kiếm Thương hiệu sản phẩm', 'bbs' ),
    'all_items' => __( 'Tất cả Thương hiệu sản phẩm', 'bbs' ),
    'parent_item' => __( 'Parent Thương hiệu sản phẩm', 'bbs' ),
    'parent_item_colon' => __( 'Parent Thương hiệu sản phẩm:', 'bbs' ),
    'edit_item' => __( 'Chỉnh sửa Thương hiệu sản phẩm', 'bbs' ),
    'update_item' => __( 'Cập nhật Thương hiệu sản phẩm', 'bbs' ),
    'add_new_item' => __( 'Thêm mới Thương hiệu sản phẩm', 'bbs' ),
    'new_item_name' => __( 'New Thương hiệu sản phẩm Name', 'bbs' ),
    'menu_name' => __( 'Thương hiệu sản phẩm', 'bbs' ),
  );    
 
    // Now register the taxonomy
 
  register_taxonomy('product_brand',array('product'), array(
    'hierarchical' => true,
    'labels' => $label,
    'show_ui' => true,
    'public' => true,
    'hierarchical' => true,
    'show_ui' => true,
    'rewrite' => array( 'slug' => 'product_brand', 'hierarchical' => true, 'with_front' => false ),
  ));
 
}
add_action( 'init', 'create_other_taxonomy_product_hierarchical_taxonomy', 0 ); 

