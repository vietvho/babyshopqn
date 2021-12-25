<?php 
get_header(); 
?>
<main class="l-single" >
<?php if (have_posts()):  the_post(); ?>
<div class="bannertop">
    <?php 
      if(has_post_thumbnail()) {
        the_post_thumbnail('full');
      } else {
        ?>
          <img src="<?= THEME_CHILD_URI ?>/assets/img/background-natural-leaves-dark-green-placeholder.jpg" data-src="<?= THEME_CHILD_URI ?>/assets/img/background-natural-leaves-dark-green.jpg" alt="placeholder" class="lazy-img">
        <?php 
      }
      ?>
</div>
<div class="bbs2-container">
<div class="l-single_outer">
    <h1 class="page-title"><?php the_title() ?></h1>
    <ul class="post-info">
         <li class="post_time"><time class="post-date" datetime="<?php echo the_time('Y-m-d'); ?>" data-time="<?php echo the_time(); ?>"><?php echo (get_theme_mod('post_sort','published')=='published')?get_the_date('d') . _(' Tháng ') . get_the_date('m ') .get_the_date('Y'):the_modified_date('d F Y'); ?></time>
          <br class="oslp">
          <?php 
          $separator = ', ';
          $output = '';
          if ( ! empty( $categories ) ) {
            echo '<span class="oplc">&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>';
              foreach( $categories as $category ) {
                // if(strtolower(trim($category->name)) === 'uncategorized') continue;
                  $output .= '<a href="' . esc_url( get_category_link( $category->term_id ) ) . '" alt="' . esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ) . '">' . esc_html( $category->name ) . '</a>' . $separator;
              }
              echo '<span class="info_categories">Chuyên mục <span>' . trim( $output, $separator ) . '</span></span>';
          }
        ?>

        <?php if(has_tag()){ ?>   •   TAGs: <?php the_tags("", ", ") ?><?php } ?>
      </li>
    </ul>
    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
      <div class="c-article">
        <?php the_content(); ?>
      </div>
      <div class="footer_space">
        <div class="orlak">
          <ul class="share_social">
            <li class="share_social-text"><?= __("Chia sẻ", 'bbs') ?>: </li>
            <li class="_facebook"><a href="https://www.facebook.com/share.php?u=https%3A%2F%2Fenlab.buildwebsite.work%2Foffshore-software-development%2Fhow-to-raise-success-of-strategic-offshore-software-outsourcing.html" onclick="window.open(this.href,'FBwindow','width=650,height=450,menubar=no,toolbar=no,scrollbars=yes');return false;" title="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path d="M16.6234 3.00383L14.2249 2.99988C11.5302 2.99988 9.78878 4.83518 9.78878 7.6758V9.83172H7.37715C7.16875 9.83172 7 10.0053 7 10.2193V13.343C7 13.5571 7.16895 13.7304 7.37715 13.7304H9.78878V21.6125C9.78878 21.8265 9.95753 21.9999 10.1659 21.9999H13.3124C13.5208 21.9999 13.6896 21.8263 13.6896 21.6125V13.7304H16.5093C16.7177 13.7304 16.8865 13.5571 16.8865 13.343L16.8876 10.2193C16.8876 10.1165 16.8478 10.0181 16.7772 9.94537C16.7066 9.87263 16.6103 9.83172 16.5103 9.83172H13.6896V8.00412C13.6896 7.12571 13.8933 6.67978 15.0073 6.67978L16.623 6.67918C16.8312 6.67918 17 6.50564 17 6.29176V3.39125C17 3.17758 16.8314 3.00423 16.6234 3.00383Z" fill="#25293F"></path>
                </svg>
                </a></li>

              <li class="_twitter"><a href="https://twitter.com/share?text=A holistic view on raising the success level of strategic offshore software outsourcing&amp;url=https%3A%2F%2Fenlab.buildwebsite.work%2Foffshore-software-development%2Fhow-to-raise-success-of-strategic-offshore-software-outsourcing.html" onclick="window.open(this.href,'Twitter','width=650,height=450,menubar=no,toolbar=no,scrollbars=yes');return false;" data-lang="en_US" data-count="vertical" data-dnt="true" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path d="M21 6.65642C20.3375 6.93751 19.6266 7.12814 18.8798 7.21324C19.6424 6.77597 20.2261 6.08239 20.5028 5.25847C19.7875 5.66342 18.9978 5.95746 18.1565 6.11686C17.4828 5.42866 16.5244 5 15.4615 5C13.4222 5 11.7688 6.5832 11.7688 8.53473C11.7688 8.81151 11.8014 9.08184 11.8644 9.34034C8.79601 9.19277 6.07515 7.78514 4.25412 5.64618C3.9358 6.16747 3.75471 6.77487 3.75471 7.42325C3.75471 8.64997 4.40709 9.73236 5.39692 10.3656C4.79177 10.3462 4.22262 10.1868 3.72435 9.92189V9.96605C3.72435 11.6785 4.99762 13.1077 6.68592 13.4329C6.37659 13.5126 6.05042 13.5568 5.71297 13.5568C5.47453 13.5568 5.24394 13.5342 5.01786 13.4911C5.488 14.8966 6.85127 15.9187 8.46648 15.9467C7.20333 16.8944 5.61062 17.4577 3.88071 17.4577C3.58265 17.4577 3.28906 17.4405 3 17.4093C4.63433 18.4141 6.57459 19 8.65995 19C15.4525 19 19.1655 13.6128 19.1655 8.94077L19.1531 8.48305C19.8786 7.98759 20.5062 7.3651 21 6.65642Z" fill="#25293F"></path>
                </svg></a></li>
                  
              <li class="_pinterest"><a href="https://www.pinterest.com/pin/create/button/?description=A holistic view on raising the success level of strategic offshore software outsourcing&amp;media=https://just-print.babyshopqn.work/app/wp-content/themes/just-print/assets/img/filler_image5.jpg&amp;url=https%3A%2F%2Fenlab.buildwebsite.work%2Foffshore-software-development%2Fhow-to-raise-success-of-strategic-offshore-software-outsourcing.html" onclick="window.open(this.href,'Pinterest','width=650,height=450,menubar=no,toolbar=no,scrollbars=yes');return false;" data-lang="en_US" data-count="vertical" data-dnt="true" target="_blank"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7.99998C15.5 6.60415 15.151 5.31249 14.4531 4.12499C13.7552 2.93749 12.8125 1.99479 11.625 1.29687C10.4375 0.598958 9.14581 0.25 7.74998 0.25C6.35415 0.25 5.06249 0.598958 3.87499 1.29687C2.68749 1.99479 1.74479 2.93749 1.04687 4.12499C0.348958 5.31249 0 6.60415 0 7.99998C0 9.62498 0.453124 11.0937 1.35937 12.4062C2.26562 13.7187 3.45833 14.6562 4.93749 15.2187C4.83332 14.2604 4.84374 13.5208 4.96874 13L5.84374 9.15623C5.6979 8.84373 5.62499 8.45831 5.62499 7.99998C5.62499 7.45832 5.7604 7.0104 6.03124 6.65623C6.30207 6.30207 6.6354 6.12499 7.03123 6.12499C7.34373 6.12499 7.58332 6.22394 7.74998 6.42186C7.91665 6.61978 7.99998 6.86978 7.99998 7.17186C7.99998 7.47394 7.8854 8.0104 7.65623 8.78123C7.5104 9.21873 7.41665 9.55206 7.37498 9.78123C7.29165 10.1562 7.36457 10.4844 7.59373 10.7656C7.8229 11.0468 8.1354 11.1875 8.53123 11.1875C9.21873 11.1875 9.79685 10.8541 10.2656 10.1875C10.7343 9.52081 10.9687 8.66665 10.9687 7.62498C10.9687 6.70832 10.6666 5.95311 10.0625 5.35936C9.45831 4.76561 8.67706 4.46874 7.71873 4.46874C7.0104 4.46874 6.3854 4.63541 5.84374 4.96874C5.3229 5.28124 4.92186 5.6927 4.64061 6.20311C4.35936 6.71353 4.21874 7.2604 4.21874 7.84373C4.21874 8.17706 4.27082 8.50519 4.37499 8.8281C4.47916 9.15102 4.61457 9.41665 4.78124 9.62498C4.84374 9.68748 4.86457 9.76039 4.84374 9.84373L4.62499 10.7187C4.60416 10.8437 4.52082 10.875 4.37499 10.8125C3.91666 10.6041 3.53645 10.2031 3.23437 9.60935C2.93228 9.0156 2.78124 8.41665 2.78124 7.81248C2.78124 6.97915 2.98437 6.20311 3.39062 5.48436C3.79687 4.76561 4.36457 4.19791 5.09374 3.78124C5.90624 3.34374 6.84373 3.12499 7.90623 3.12499C8.80206 3.12499 9.61456 3.3177 10.3437 3.70312C11.0729 4.08853 11.6458 4.62499 12.0625 5.31249C12.4791 5.99999 12.6875 6.77603 12.6875 7.64061C12.6875 8.50519 12.5156 9.30206 12.1718 10.0312C11.8281 10.7604 11.3489 11.3385 10.7343 11.7656C10.1198 12.1927 9.43748 12.4062 8.68748 12.4062C8.29165 12.4062 7.92706 12.3229 7.59373 12.1562C7.2604 11.9896 7.03123 11.7812 6.90623 11.5312L6.40623 13.375C6.28124 13.8958 5.96874 14.5729 5.46874 15.4062C6.1979 15.6354 6.95832 15.75 7.74998 15.75C9.14581 15.75 10.4375 15.401 11.625 14.7031C12.8125 14.0052 13.7552 13.0625 14.4531 11.875C15.151 10.6875 15.5 9.39581 15.5 7.99998Z" fill="#25293F"></path>
                </svg></a></li>
                  
              <li class="_linkedin"><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fenlab.buildwebsite.work%2Foffshore-software-development%2Fhow-to-raise-success-of-strategic-offshore-software-outsourcing.html&amp;source=sprout-social-inc-" onclick="window.open(this.href,'Linkedin','width=650,height=450,menubar=no,toolbar=no,scrollbars=yes');return false;" target="_blank" rel="noopener noreferrer" data-share="linkedin" data-share-title="A holistic view on raising the success level of strategic offshore software outsourcing"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path d="M6.92896 20.1111H3.18736V8.75874H6.92896V20.1111ZM5.05816 7.10749C3.81096 7.10749 2.97949 6.28187 2.97949 5.04343C2.97949 4.0114 3.81096 2.97937 5.05816 2.97937C6.30536 2.97937 7.13683 3.80499 7.13683 5.04343C7.13683 6.28187 6.51323 7.10749 5.05816 7.10749ZM20.856 20.1111H16.9066V13.9189C16.9066 12.474 16.4908 11.442 15.0358 11.442C13.9964 11.442 13.3728 12.0612 13.165 12.8869C13.165 13.0933 12.9571 13.5061 12.9571 13.7125V20.1111H9.2155C9.2155 20.1111 9.2155 9.79077 9.2155 8.75874H12.9571V10.41C13.3728 9.58436 14.4122 8.34593 16.4908 8.34593C18.9852 8.34593 20.856 9.99717 20.856 13.5061V20.1111Z" fill="#25293F"></path>
                </svg></a></li>

              <li class="_mail"><a href="mailto:info@example.com?subject=A holistic view on raising the success level of strategic offshore software outsourcing&amp;body=https%3A%2F%2Fenlab.buildwebsite.work%2Foffshore-software-development%2Fhow-to-raise-success-of-strategic-offshore-software-outsourcing.html" target="_blank" rel="noopener noreferrer" class="no_copy" data-share="message" data-share-title="A holistic view on raising the success level of strategic offshore software outsourcing"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1875 4.5H2.81254C2.1576 4.5 1.63785 4.98825 1.53941 5.61694L12 12.5089L22.4606 5.61694C22.3622 4.98825 21.8425 4.5 21.1875 4.5ZM1.5 16.3021V7.16186L8.57962 11.8265L1.5 16.3021ZM22.5001 16.3021L15.4205 11.8265L22.5001 7.16186V16.3021ZM12.361 13.8423L14.2182 12.6191L22.458 17.8297C22.357 18.4531 21.8399 18.9374 21.1875 18.9374H2.81256C2.16025 18.9374 1.64313 18.4531 1.54206 17.8297L9.78193 12.6177L11.6391 13.8423C11.7494 13.9145 11.8741 13.9499 12.0001 13.9499C12.1261 13.9499 12.2507 13.9145 12.361 13.8423Z" fill="#25293F"></path>
                </svg></a></li>
          </ul>
        </div>
        
        <ul class="navigation">
          <?php if( get_previous_post() ){ ?><li class="left"><?php previous_post_link('%link', 'Bài trước đó'); ?></li><?php } ?>
          <?php if( get_next_post() ){ ?><li class="right"><?php next_post_link('%link', 'Bài tiếp theo'); ?></li><?php } ?>
        </ul>
      </div>
    </div>
</div>

<?php
wp_reset_postdata();
else: 
  echo '<div class="bbs2-container _x_inner_row">';
  echo "<h2 class=\"_x_notfofund_title\">" . __('Chưa có bài viết hay sản phẩm nào ở đây', 'bbs') . "</h2>";
  echo "<p class=\"_x_notfofund_text\"><span class='dis_block'>". __('Nội dung bạn đang tìm kiếm không được tìm thấy.', 'bbs') . "</span></p>";
  echo "</div>";
endif; ?>

</div>
<?php get_footer(); ?>