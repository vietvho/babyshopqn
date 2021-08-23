<?php 
$show_on = $row['show_on_device'];
$slides = $row['slides'];
if (!is_array($slides)) return;
?>
<section class="hero-slider <?= $show_on?> <?= $row['spacing'];?>">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <?php foreach($slides as $slide):?>
            <div class="swiper-slide swiper-lazy <?= $slide['content_groups_position']?>" data-background="<?=$slide['slide_image']['url']?>">
                <div class="slide-wrapper">
                    <?php if(isset($slide['slide_content'])): ?>
                    <div class="slide-content"><?=$slide['slide_content']?></div>
                    <?php endif; ?>
                    <?php $buttons = $slide['button_groups'];

                    if (is_array($buttons)){
                        echo '<div class="button-group">';
                            foreach ($buttons as $btn):
                                $button = $btn['button_ui'];
                                $btn_data = $button['button_data'];
                                $btn_cls = ["btn--".$button['button_scheme'], $button['outlined']];
                            printf('<a class="btn %1$s"  href="%2$s" target="%3$s"><span>%4$s</span></a>',implode(' ',$btn_cls),$btn_data['url'],$btn_data['target'],$btn_data['title']);
                            endforeach;
                        echo '</div>';
                    }
                    ?>
                </div>
                <span class="swiper-lazy-preloader"></span>
            </div>
            <?php endforeach;?>
        </div>
        <div class="bbs2-container">
            <div class="bbs-slide-prev hero"><?php echo feature_rendersvg(THEME_CHILD_DIR."/assets/img/prev.svg" );?></div>
            <div class="bbs-slide-next hero"><?php echo feature_rendersvg(THEME_CHILD_DIR."/assets/img/next.svg" );?></div>
        </div>
    </div>
</section>