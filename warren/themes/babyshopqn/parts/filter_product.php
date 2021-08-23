<?php
global $script_footer;
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

  ob_start();
?>
<script>
  var lst_filter_json = <?= wp_json_encode($_rs_grouptermforfilter) ?>;
  jQuery('.filters-bar').append('<span class="filters-bar__btn_filter" data-popover="filter_product_filter"  ><?= __('Lọc sản phẩm', 'bbs') ?></span><span class="filters-bar__btn_sort" data-popover="filter_product_sort"><?= __('Sắp xếp', 'bbs') ?></span>')
</script>

<div class="c-popover c-popover--filter" data-dlgid="filter_product_filter" >
  <div class="c-popover__container">
    <div class="c-popover__title">
      <?= __('Lọc sản phẩm','bbs');?>
    </div>
    <div class="c-popover__content filter_top" data-product_slug="<?php echo  $category->slug ?>" data-product_taxonomy="<?php echo  $category->taxonomy ?>" >
      <div class="brand__filter-panel" >
        <div class="brand__filter-panel_list" >
           <div class="d_row" style="width: 100%;">
                <?php
                 // 2 
                if(isset($_rs_grouptermforfilter['group_term'][2])):
                  foreach ($_rs_grouptermforfilter['group_term'][2] as $key => $value) { 
                    $value['name_parent'] = array_values($value['name_parent']);
                ?>
                  <div class="d_col">
                  <div class="category">
                      <div class="category-caption"><?php echo $value['name_parent'][0] ?></div>
                      <div class="category-list">
                        <?php 
                        foreach ($value['list'] as $key1 => $value1) {
                          // var_dump($value1);
                          echo '<div class="custom-control custom-checkbox"><input type="checkbox" name="'  . 'product_cat' . '[]" autocomplete="off" class="custom-control-input" value="' . $value1['slug'] . '" id="__BVID__' . $value1['slug'] . '" ><label class="custom-control-label" for="__BVID__' . $value1['slug']. '">' . $value1['name'] . '</label></div>';
                        }
                         ?>
                      </div>
                  </div>
                  </div>
                  <?php } ?>
                <?php endif; ?>


                <?php
                 // 3 
                if(isset($_rs_grouptermforfilter['group_term'][3])):
                  foreach ($_rs_grouptermforfilter['group_term'][3] as $key => $value) { 
                    $value['name_parent'] = array_values($value['name_parent']);
                ?>
                  <div class="d_col">
                  <div class="category">
                      <div class="category-caption"><?php echo $value['name_parent'][0] ?></div>
                      <div class="category-list">
                        <?php 
                        foreach ($value['list'] as $key1 => $value1) {
                          // var_dump($value1);
                          echo '<div class="custom-control custom-checkbox"><input type="checkbox" name="'  . 'product_cat' . '[]" autocomplete="off" class="custom-control-input" value="' . $value1['slug'] . '" id="__BVID__' . $value1['slug'] . '" ><label class="custom-control-label" for="__BVID__' . $value1['slug']. '">' . $value1['name'] . '</label></div>';
                        }
                         ?>
                      </div>
                  </div>
                  </div>
                  <?php } ?>
                <?php endif; ?>


                <?php 
                // 4
                if(isset($_rs_grouptermforfilter['group_term'][4])):
                  foreach ($_rs_grouptermforfilter['group_term'][4] as $key => $value) { 
                    $value['name_parent'] = array_values($value['name_parent']);
                ?>
                  <div class="d_col">
                  <div class="category">
                      <div class="category-caption"><?php echo $value['name_parent'][0] ?></div>
                      <div class="category-list">
                        <?php 
                        foreach ($value['list'] as $key1 => $value1) {
                          // var_dump($value1);
                          echo '<div class="custom-control custom-checkbox"><input type="checkbox" name="'  . 'product_cat' . '[]" autocomplete="off" class="custom-control-input" value="' . $value1['slug'] . '" id="__BVID__' . $value1['slug'] . '" ><label class="custom-control-label" for="__BVID__' . $value1['slug']. '">' . $value1['name'] . '</label></div>';
                        }
                         ?>
                      </div>
                  </div>
                  </div>
                  <?php } ?>
                <?php endif; ?>
                <?php 
                // 4
                if(isset($_rs_grouptermforfilter['group_term'][5])):
                  foreach ($_rs_grouptermforfilter['group_term'][5] as $key => $value) { 
                    $value['name_parent'] = array_values($value['name_parent']);
                ?>
                  <div class="d_col">
                    <div class="category">
                        <div class="category-caption"><?php echo $value['name_parent'][0] ?></div>
                        <div class="category-list">
                          <?php 
                          foreach ($value['list'] as $key1 => $value1) {
                            // var_dump($value1);
                            echo '<div class="custom-control custom-checkbox"><input type="checkbox" name="'  . 'product_cat' . '[]" autocomplete="off" class="custom-control-input" value="' . $value1['slug'] . '" id="__BVID__' . $value1['slug'] . '" ><label class="custom-control-label" for="__BVID__' . $value1['slug']. '">' . $value1['name'] . '</label></div>';
                          }
                           ?>
                        </div>
                    </div>
                  </div>
                  <?php } ?>
                <?php endif; ?>
           </div>
         </div>
         <div class="button_filter" >
            <div class="app-button" style="margin-right: 24px;"><button type="button" class="btn btn-outline-secondary rounded-0 _cancel_filter ">BỎ LỌC</button></div>
            <div class="app-button"><button type="button" class="btn btn-secondary rounded-0 _displayresult ">HIỆN KẾT QUẢ</button></div>
         </div>
      </div>

    </div>
  </div>
  <span class="c-popover__close"></span>
</div>
<div class="c-popover c-popover--filter-bar_sort" data-dlgid="filter_product_sort" >
  <div class="c-popover__container">
    <div class="c-popover__content">
         <div class="d_row" style="width: 100%;">
            <div class="d_col">

                  <div class="bar_sort">
                    <span class="btn_short" data-sort="price_featured"><?= __('Sản phẩm nổi bật', 'bbs') ?></span>
                    <span class="btn_short" data-sort="new_product"><?= __('Hàng mới nhất', 'bbs') ?></span>
                    <span class="btn_short" data-sort="customer_review"><?= __('Trung bình nhận xét', 'bbs') ?></span>
                    <span class="btn_short" data-sort="price_hightolow"><?= __('Giá cao đến thấp', 'bbs') ?></span>
                    <span class="btn_short" data-sort="price_lowtohigh"><?= __('Giá thấp đến cao', 'bbs') ?></span>
                  </div>
               
            </div>
         </div>
      

    </div>
  </div>
  <span class="c-popover__close"></span>
</div>
<?php
$script_footer = ob_get_clean();