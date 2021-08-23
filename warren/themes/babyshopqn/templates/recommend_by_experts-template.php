<?php 
// Template Name: Recommend By Experts

get_header(); 
?>
<main class="l-recommend" >
<div class="bannertop">
    <?php 
      if(has_post_thumbnail()) {
        the_post_thumbnail('full');
      } else {
        ?>
      <img src="<?= THEME_CHILD_URI ?>/assets/img/about-1571979483591.png" alt="about">
        <?php 
      }
      ?>
</div>
<div class="bbs2-container">
    <h1 class="l-recommend__title"><?php the_title() ?></h1>
    <?php
    if ( have_rows( 'regions' ) ) {
      while ( have_rows( 'regions' ) ) {
            the_row();
            $row = get_row(true);
            $row_index = get_row_index();
            $row_classes = 'c-article';
            if(file_exists(THEME_CHILD_DIR . '/regions/' . get_row_layout() . '.php')) {
              include THEME_CHILD_DIR . '/regions/' . get_row_layout() . '.php';
            }
      }
    } ?>
</div>
</main>
<?php
get_footer(); 