<?php 

// Get Max Level
function bbsGetTaxLevel($id, $tax) {
  $ancestors = get_ancestors($id, $tax);
  return count($ancestors) + 1;
}




// =========== ====== ================
// =========== FILTER ================
// =========== ====== ================
  // var_dump($termchildren);
  // All product by Taxonomy (ID)
  // ==================
  // Group list product and 
  // convert to json 
  // Mục đích là lọc danh sách từ file json
  // Xuất giao diện bằng javácript khi lọc
  // Cần
  // Title , link, Short Content, Image Medium, data-listcatproduct (term_select - checklist trong product)

  function bbsGroupTermForFilter($_args) {

    // var_dump($_args);
    $args = array(
      'post_type'      => 'product',
      'posts_per_page' => -1,

    );
    $tax_query = array();

    if(isset($_args['term_id'])) {
      $tax_query['field'] = 'term_id';
      $tax_query['terms'] =  $_args['term_id'];
    }
    if(isset($_args['term_id'])) {
      $tax_query['taxonomy'] = $_args['taxonomy_prefix'];
    }
    if($tax_query)
      $args['tax_query'] = array($tax_query);

    $_rs_all = array(
      'group_term' => array(),
      'list_product' => array(),
    );
    $rs_query = new WP_Query( $args );
    if ( $rs_query->have_posts() ) : 
    // print_r($rs_query->found_posts);
    $_stt = 0;  
    while ( $rs_query->have_posts() ) : $rs_query->the_post(); $_stt++; 

      global $product;


      $currency     = get_woocommerce_currency_symbol();
      $price        = get_post_meta( get_the_ID(), '_regular_price', true);
      $fomart_price = 0;
      $fomart_sale = 0;
      if(intval($price)) {
        $fomart_price = number_format($price);
      }
      $sale         = get_post_meta( get_the_ID(), '_sale_price', true);
      if($sale) {
        $fomart_sale  = number_format($sale);
      }

      ob_start(); ?>
      <?php if(intval($sale)) : ?>
        <span class="price"><span class="woocommerce-Price-amount amount">
          <del><?php echo $fomart_price ?><?php echo $currency;?></del>
          <bdi><?php echo $fomart_sale;  ?><span class="woocommerce-Price-currencySymbol"><?php echo $currency; ?></span></bdi>
        </span>
      <?php else: ?>
      <?php if(intval($price)): ?>
        <span class="price">
          <span class="woocommerce-Price-amount amount">
            <bdi>
              <?php echo $fomart_price;  ?><span class="woocommerce-Price-currencySymbol"><?php echo $currency; ?></span>
            </bdi>
          </span>
        </span>
      <?php endif;
      endif;
      $price_str = ob_get_clean();

      // if ($_stt > 2 ) continue;
      $_id_product      = $product->get_id();

      $_template = array();
      $_template['id']      = $_id_product;
      $_template['title']   = get_the_title();
      $_template['link']    = get_permalink();
      // $_template['content'] = babyshopqn_string_limit_words(get_the_content(), 16);
      $_template['content'] = $product->get_short_description();
      $_template['timesptamp'] = get_post_timestamp($_id_product);

      $_template['last_price']    = ($fomart_sale) ? $fomart_sale : $fomart_price;

      $_template['price']    = $price_str;

      $_template['rating_count']    = $product->get_rating_count();
      $_template['review_count']    = $product->get_review_count();
      $_template['average']         = $product->get_average_rating();

      // $_template['list_term_bypost'] = get_the_terms($_id_product, $taxonomy_prefix);
      $_template['image'] = get_the_post_thumbnail($_id_product, 'large');
      $_template['thumbnail'] = woocommerce_get_product_thumbnail();

      // Is best sell
      $_template['is_best_sell'] = true;
      if ( get_field( 'is_best_sell'  ) != 1 ) { 
        $_template['is_best_sell'] = false;
      }


      // Featured
      $_template['is_featured'] = false;
      $_term = get_the_terms($_id_product, 'product_visibility');
      if($_term) {
        foreach ($_term as $k => $v) {
          $v = (array) $v;
          if($v['name'] === 'featured') {
            $_template['is_featured'] = true;
          }
        }
      }


      // Work with term
      // $_list_term_bypost = get_the_terms($_id_product, $_args['taxonomy_prefix']);
      $_list_term_bypost = get_the_terms($_id_product, 'product_cat');
      $_term_level = array();
      foreach ($_list_term_bypost as $key => $value) {
        
        // Level
        $_n_level_taxonomy = bbsGetTaxLevel($value->term_id, $value->taxonomy);
        
        // Slug = index  
        $_term_level[] = $value->slug;
        
        // Get Parent
        $_term_by_idparent = get_term($value->parent, $value->taxonomy);
        if(!(is_wp_error($_term_by_idparent))) {

          // print_r($_term_by_idparent);
          // Group term
          $_term_by_idparent_id = $_term_by_idparent->term_id;
          $_term_by_idparent_slug = $_term_by_idparent->slug;
          $_term_by_idparent_name = $_term_by_idparent->name;

          $_rs_all['group_term'][$_n_level_taxonomy][$_term_by_idparent_slug]['name_parent'][$_term_by_idparent_id] = $_term_by_idparent_name;
          $_rs_all['group_term'][$_n_level_taxonomy][$_term_by_idparent_slug]['list'][$value->term_id] = array('slug' => $value->slug, 'name' => $value->name );
        }
        // $_rs_all['group_term'][$_n_level_taxonomy][$_term_by_idparent_slug] = $_temp_parent;

      }

      $_template['term_select'] = $_term_level;

      $_rs_all['list_product'][] = $_template;
      // Template 

    endwhile; 

    ksort($_rs_all['group_term']);   
    endif; 
    wp_reset_postdata(); 



    // $_rs_all = array_values($_rs_all['group_term']);
    // print_r($_rs_all);
    // die();
    return $_rs_all;    
  }
// =========== ====== ================
// =========== FILTER ================
// =========== ====== ================