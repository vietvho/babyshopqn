


<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

get_header( 'shop' );

/**
 * Hook: woocommerce_before_main_content.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 * @hooked WC_Structured_Data::generate_website_data() - 30
 */
do_action( 'woocommerce_before_main_content' );
$category = get_queried_object();
$show_cat_list = get_field('show_categories_list',$category);
$hide_breadcrumb = get_field('hide_breadcrumb',$category);
$product_wrapper = $show_cat_list ? 'list_showing' : '';
$thumbnail_id = get_term_meta( $category->term_id, 'thumbnail_id', true ); 
// get the image URL
if ($thumbnail_id >0){
  $image = wp_get_attachment_url( $thumbnail_id );
  echo '<div class="header-banner" style="background-image:url('.$image.')"><div class="bbs2-container"><h1>'.woocommerce_page_title(false).'</h1></div></div>';
}
?>



<?php 
  $cat = get_queried_object();
  $category = get_category($cat); 

  // Define taxonomy prefix
  // Replace NULL with the name of the taxonomy eg 'category'
  $taxonomy_prefix = $category->taxonomy;

  // Define term ID
  // Replace NULL with ID of term to be queried eg '123' 
  $term_id = $category->term_id;
  // var_dump($term_id);

  // Define prefixed term ID
  $term_id_prefixed = $taxonomy_prefix .'_'. $term_id;


  $term = get_term_by( 'slug', get_query_var('term'), get_query_var('taxonomy') );
  // echo $term->name;
  // var_dump($term);
  // term->term_id
  $termchildren = get_term_children($term_id, $taxonomy_prefix);

  // print_r(wp_json_encode($_rs_grouptermforfilter));
  $_rs_grouptermforfilter = bbsGroupTermForFilter(array('term_id' => $term_id, 'taxonomy_prefix' => $taxonomy_prefix));


  // Overlay chechbox
  $_isoverlaybg = '';
  if(get_field( 'overlay_for_background', $term_id_prefixed ) == 1) {
    $_isoverlaybg = '_overlay';
  }

?>


<section id="product-list-page" class="bbs2-container <?=$product_wrapper;?>">
  <?php if(!$hide_breadcrumb) {woocommerce_breadcrumb();} ?>
  <div class="filters-bar"></div>
  <div class="product-page-wrapper">
    <?php 
    if($show_cat_list){
      echo '<div class="cat-sidebar">';
        wp_list_categories(['taxonomy'=>'product_cat','current_category'=>$category->term_id,'title_li'=>'']);
      echo '</div>';
    }?>
    <div class="products-list">
      <header class="woocommerce-products-header">
        <?php if ( apply_filters( 'woocommerce_show_page_title', true ) && $thumbnail_id == 0 ) : ?>
          <h1 class="woocommerce-products-header__title page-title text--center"><?php woocommerce_page_title(); ?></h1>
        <?php endif; ?>
        <?php
        /**
         * Hook: woocommerce_archive_description.
         *
         * @hooked woocommerce_taxonomy_archive_description - 10
         * @hooked woocommerce_product_archive_description - 10
         */
        do_action( 'woocommerce_archive_description' );
        ?>
      </header>
      <div class="product_containlist">
        <?php
        if ( woocommerce_product_loop() ) {

          /**
           * Hook: woocommerce_before_shop_loop.
           *
           * @hooked woocommerce_output_all_notices - 10
           * @hooked woocommerce_result_count - 20
           * @hooked woocommerce_catalog_ordering - 30
           */
          do_action( 'woocommerce_before_shop_loop' );

          woocommerce_product_loop_start();

          if ( wc_get_loop_prop( 'total' ) ) {
            while ( have_posts() ) {
              the_post();

              /**
               * Hook: woocommerce_shop_loop.
               */
              do_action( 'woocommerce_shop_loop' );

              wc_get_template_part( 'content', 'product' );
            }
          }

          woocommerce_product_loop_end();

          /**
           * Hook: woocommerce_after_shop_loop.
           *
           * @hooked woocommerce_pagination - 10
           */
          do_action( 'woocommerce_after_shop_loop' );
        } else {
          /**
           * Hook: woocommerce_no_products_found.
           *
           * @hooked wc_no_products_found - 10
           */
          do_action( 'woocommerce_no_products_found' );
        }

        /**
         * Hook: woocommerce_after_main_content.
         *
         * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
         */?>
      </div>
    </div>
  </div>
</section>
<?php 
do_action( 'woocommerce_after_main_content' );


get_template_part('/parts/filter_product');

get_footer( 'shop' );
