<?php 
// Change heading tag for SEO
if(is_product()) {
    $_titlelogoisdiv = true; 
}
?>
<header class="header">
    <div class="bbs2-container">
        <div class="col col-md-12 header--top">
            <<?php echo (isset($_titlelogoisdiv) && $_titlelogoisdiv) ? "span" : "h1" ?> class="logo">
                <a href="<?= HOME_URX ?>" title="<?php bloginfo() ?>" >
                    <?php bbs_render_image(THEME_CHILD_URI."/assets/img/logo.svg",[ "class"=>"logo svg", "alt"=>"BabyshopQN icon"]);?>
                    <span><?php bloginfo() ?></span>
                </a>
            </<?php echo (isset($_titlelogoisdiv) && $_titlelogoisdiv) ? "span" : "h1" ?>>

            <?php get_search_form();?>

            <div class="header--top_right">
                <?php if (class_exists('acf')) {
                    $headerSocials = get_field('socials','options');
                    if (is_array($headerSocials)):
                        echo '<ul class="socials-bar">';
                       
                        foreach ($headerSocials as $social) {
                            $socialIcon = $social['social_icon'];?>
                            <li><a href="<?= $social['social_link'] ?>" >
                                    <?php bbs_render_image($socialIcon['url'],["style"=>"width:20px;height: auto;","class"=>$socialIcon['name']." svg"]);?>
                                </a></li>
                        <?php }
                        echo '</ul>';
                    endif;
                    echo '<span class="vec-divider"></span>';
                }?>

                <span class="d-none d-lg-flex header--top_login" data-popover="mn_popover_2" >
                    <?php bbs_render_image(THEME_CHILD_URI."/assets/img/user-circle.svg",["alt"=>"icon cart", "class"=>"svg"]);?>
                    &nbsp;
                    <span>
                        <?php global $current_user; wp_get_current_user(); ?>
                        <?php if ( is_user_logged_in() ) { 
                            echo $current_user->display_name ;
                        }else{ 
                            echo __('Đăng nhập', 'bbs');
                        } 
                        ?>
                    </span>
                </span>

                <ul class="woo_topmnsub">
                    <?php if( function_exists( 'YITH_WCWL') ): ?>
                    <li data-popover="popover-wishlist">
                        <span class="header--top_mywishlist my-wishlist">
                            <?php bbs_render_image(THEME_CHILD_URI."/assets/img/heart.svg",["alt"=>"icon heart", "class"=>"svg"]);?>
                        </span>
                    </li>
                    <?php endif ?>
                    <?php if( function_exists( 'WC') ) { ?>
                    <li>
                        <?php /* <span class="cart-customlocation" href="<?php echo wc_get_cart_url(); ?>"  */ ?>
                        <span class="header--top_viewcart cart-customlocation"
                            data-popover="mn_popover_1" >
                            
                            <?php bbs_render_image(THEME_CHILD_URI."/assets/img/cart.svg",["alt"=>"icon cart", "class"=>"svg"]);?>
                          
                            <div class="count-return">
                                <?php if (WC()->cart->get_cart_contents_count()): ?>
                                    <span class="ncount"><?php echo WC()->cart->get_cart_contents_count();?></span>
                                <?php endif ?>
                            </div>
                        </span>
                    </li>
                    <?php }?>
                </ul>

                <?= do_shortcode('[bbs_feature_pllang__top_currentlang]') ?>
            </div>
        </div><!-- header-top -->
    </div>

    <div class="header--main">
        <?php 
            get_template_part('/parts/megamenu_item');
        ?>
    </div><!-- header-main -->

    <?php get_template_part('parts/promo');?>
</header>