<div class="c-menubar">
    <div class="bbs2-container">
    <?php
    $_langslugcurrent =  function_exists('pll_current_language') ? pll_current_language('slug') : 'en';
    $_post_id = 'option';
    if(get_field('footer_menubar_sticky', 'megamn_lang_' . $_langslugcurrent))  {
        $_post_id = 'megamn_lang_' . $_langslugcurrent;
    }
	$submenu_render = [];
    if ( have_rows( 'footer_menubar_sticky', $_post_id ) ) {
        echo '<ul>';
        while ( have_rows( 'footer_menubar_sticky', $_post_id ) ) {
            the_row();
            $menu_object = get_sub_field('menuitem_object');
            if(is_array($menu_object)) {
                $link = $menu_object['url'];
                $text = $menu_object['title'];
                $target = $menu_object['target'] ?: '_self';
            } else {
                $link = '#';
                $text = $menu_object;
                $target = '_self';
            }

            $submenu = get_sub_field('submenu');
            
            $popup_slug = 'mn_popover'.sanitize_title($text);
            if ($submenu){
                $menu_items =[];
                foreach ($submenu as $submenu_item){
                    $sublink = $submenu_item['link'];
                    $menu_items[] = sprintf('<a href="%1$s" title="%2$s" target="%4$s">%3$s<span>%2$s</span></a>',$sublink['url'],$sublink['title'],wp_get_attachment_image( $submenu_item['icon'], 'large' ),$sublink['target']);
                }
                $submenu_render[] = sprintf('
                        <div class="c-popover c-popover__menuspbar" data-dlgid="%3$s" >
                            <div class="c-popover__container">
                                <div class="c-popover__title">
                                %1$s
                                </div>
                                <div class="c-popover__content">
                                    <div class="menuspbar__shop_list">
                                    %2$s
                                    </div>
                                </div>
                            </div>
                            <span class="c-popover__close"></span>
                        </div>
                        ',$text,implode('',$menu_items),$popup_slug);
            }
        ?>
            <li>
                <a href="<?= $link; ?>" title="<?= $text ?>" target="<?= $target; ?>"  data-popover="<?php echo $popup_slug;?>">
                    <?php $image = get_sub_field( 'icon' ); ?>
                    <?php if ( $image ) { ?>
                        <span class="c-menubar__thumb"><?php echo wp_get_attachment_image( $image, 'large' ); ?></span>
                    <?php } ?>
                    <span class="c-menubar__title"><?= $text ?></span>
                </a>
            </li>
            <?php }
        echo '</ul>';
    }


    ?>
    </div>
</div>
<?php echo implode(' ',$submenu_render);?>