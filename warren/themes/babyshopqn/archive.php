<?php get_header(); ?>
<?php 
$cat = get_queried_object();
$category = get_category($cat); 


// Define taxonomy prefix
// Replace NULL with the name of the taxonomy eg 'category'
$taxonomy_prefix = $category->taxonomy;

// Define term ID
// Replace NULL with ID of term to be queried eg '123' 
$term_id = $category->term_id;

// Define prefixed term ID
$term_id_prefixed = $taxonomy_prefix .'_'. $term_id;



?>
<main class="l-archive" >
<div class="bannertop">

  <?php $thumbnail_categories = get_field( 'thumbnail_categories', $term_id_prefixed ); ?>
  <?php if ( $thumbnail_categories ) { ?>
    <img src="<?php echo $thumbnail_categories['url']; ?>" alt="<?php echo $thumbnail_categories['alt']; ?>" />
  <?php } else { ?>
      <img src="<?= THEME_CHILD_URI ?>/assets/img/background-natural-leaves-dark-green-placeholder.jpg" data-src="<?= THEME_CHILD_URI ?>/assets/img/background-natural-leaves-dark-green.jpg" alt="placeholder" class="lazy-img">
  <?php }  ?>
</div>
<div class="bbs2-container">
<div class="l-archive_outer">
<div class="c-carousel-product-list">
<div class="c-carousel-product-list__slider outer_areaload">
<?php 
    echo bbs_getlist_album(	
      array(
        'showposts'   => 12,
        'post_type'   => 'goc-lam-dep',
        'post_status '   => 'publish',
      ));
?>


</div>
</div>

</div>
</div>

</main>
<?php get_footer(); ?>


<?php get_footer();