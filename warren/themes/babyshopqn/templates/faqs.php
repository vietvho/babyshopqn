<?php 
// Template Name: FAQs
?>
<?php get_header(); 
global $_x_script_footer;
?>
<main>
<div class="faqs-page">
<?php 
if ( have_rows( 'banner' ) ) : ?>
<?php while ( have_rows( 'banner' ) ) : the_row(); ?>
   <?php $image = get_sub_field( 'tmage' ); ?>
   <div class="brand-hero" >
      <div class="_text">
         <h1 class="caption"><?php the_sub_field( 'title' ); ?></h1>
         <div class="description text-center"><?php the_sub_field( 'description' ); ?></div>
      </div>
      <?php if ( $image ) { ?>
         <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="_img_bg" />
      <?php } else { ?>
         <img src="<?php echo THEME_CHILD_URI ?>/assets/img/banner-12.jpg" alt="Banner" class="_img_bg" />
      <?php } ?>
   </div>   
<?php endwhile; ?>
<?php endif; ?>
<div class="container">
   <div class="faqs_area">
   <div <?php post_class() ?> >
      <?php if(strlen(trim(strip_tags(get_the_content()))) > 0) : ?>
      <div class="faqs-description">
         <?php echo get_the_content() ?>
      </div>
      <?php endif; ?>
      <div class="faqs-listqa">
         <?php if ( have_rows( 'danh_sach_hoi_dap' ) ) : ?>
            <?php while ( have_rows( 'danh_sach_hoi_dap' ) ) : the_row(); ?>
               <?php 
               $_class = '';
               if ( get_sub_field( 'is_expand' ) == 1 ) 
                  $_class = 'expand';
               ?>
               <div class="q <?php echo $_class ?>"><?php the_sub_field( 'title' ); ?></div>
               <div class="a <?php echo $_class ?>"><?php the_sub_field( 'description' ); ?></div>
            <?php endwhile; ?>
         <?php else : ?>
            <?php // no rows found ?>
         <?php endif; ?>
      </div>
   </div>
   </div>
</div>
</div>
</main>
<?php 
$_x_script_footer[] = '';
get_footer(); ?>