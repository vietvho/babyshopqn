<?php 
// Template Name: Tin tức
?>
<?php get_header(); ?>
<main>
<div class="outer_area blogs-listtemplate page">
<div class="container">
   <div class="_outer">
	<div <?php post_class() ?> >
		<h1 class="blog-title"><?php the_title(); ?></h1>
		<div class="blog-area">
		

<div class="header_fronttop">
    <?php 
    $ID_isone = 0;
    $args_newlatate = array(
      'numberposts' => 1,
      'orderby' => 'post_date',
      'order' => 'DESC',
      'post_type' => 'tintuc',
      'post_status' => 'publish',
    );
    $recent_posts = wp_get_recent_posts( $args_newlatate );
    $post__not_in = array();
    if($recent_posts) {
      $ID_isone = $recent_posts[0]['ID'] ?: false;
      $post_title_isone = $recent_posts[0]['post_title'] ?: false;
      $post__not_in = array($ID_isone);

      ?>
      <div class="_banner <?php echo (get_field( 'overlay_for_background', $term_id_prefixed ) != 1) ?: "_overlay"  ?>">
        <!-- <img src="<?php echo THEME_CHILD_URI . '/assets/images/Rectangle_2.jpg' ?>" alt="Header"> -->
		<div class="_outer">
        
      <?php 
        if(has_post_thumbnail($ID_isone)) {
           echo '<a href="' . get_permalink($ID_isone) . '" class="_x_thumb" >' . get_the_post_thumbnail($ID_isone) . '</a>'; 
        } else {
          $_url_sbanner = '<img src="' . IMG_NOTFOUND . '" alt="Not Found Image">';
          $_default_post_feature_image = get_field( '_default_post_feature_image', 'option' );
          if ( $_default_post_feature_image ) { 
            $_url_sbanner = '<img src="' . $_default_post_feature_image['url'] . '" alt="' . $_default_post_feature_image['alt'] . '" />';
          }
          echo '<a href="' . get_permalink($ID_isone) . '" class="_x_thumb" >' . $_url_sbanner . '</a>';
        }


        // Categories
        $categories = get_the_category($ID_isone);
        if(empty($categories)){
          $categories = get_the_terms( $ID_isone, 'tin-tuc' );
        }
        $separator = ', ';
        $output = '';
        if ( ! empty( $categories ) ) {
          echo "<div class='_x_categories'>";
            foreach( $categories as $category ) {
              // if(strtolower(trim($category->name)) === 'uncategorized') continue;
                $output .= '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" alt="' . esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ) . '">' . esc_html( $category->name ) . '</a>' . $separator;
            }
            echo 'Chuyên mục ' . trim( $output, $separator );
          echo "</div>";
        }

        ?>
        <p><a href="<?php echo get_permalink($ID_isone);  ?>" title="<?php echo $post_title_isone ?>" ><span class="_tt"><?php echo $post_title_isone; ?></span></a></p>
        <div class="_x_content oslp"><?php echo _x_string_limit_words(get_the_content(), 16) . '...';  ?></div>
        <p class="oplc"><a href="<?php echo get_permalink($ID_isone);  ?>" title="<?php echo $post_title_isone ?>" class="_btn">Đọc Bài</a></p>

        
      </div>
      </div>
    <?php } ?>
</div>
<div class="listpost postlst blogtintuc _outer_areaload">
    <?php 
    $_taxonomy = 'tin-tuc';
    echo _x_getlist_album(
      array(
        'showposts'   => 6,
        'post_type'   => 'tintuc',
        'post__not_in' => $post__not_in,
        'post_status '   => 'publish',
        '_x_is_outer_content' => true,
      ));
    ?>
</div>




		</div>
	</div>
   </div>
</div>
</div>
</main>
<?php get_footer(); ?>