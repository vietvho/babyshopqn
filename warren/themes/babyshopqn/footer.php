<?php global $script_footer; ?>

<footer>
	<div class="c-footer">
		<div class="bbs2-container c-footer__menu-outer">
			<?php if ( have_rows( 'info_list', 'options' ) ) : ?>
				<?php while ( have_rows( 'info_list', 'options' ) ) : the_row(); ?>
				<? $cols[get_sub_field('order')][] = '
					<li>
						<strong>'. get_sub_field('title') .'</strong>
						<p>'. get_sub_field('content') .'</p>
					</li>';?>
				<?php endwhile; ?>
			<?php endif; ?>
			<div class="c-footer__subscribe">
				
				<ul>
					<? if ($cols[1]):?>
						<?= implode('',$cols[1]) ;?>
					<? endif;?>

					
				</ul>
			</div>
			
			<div class="c-footer__menuright">
				<ul>
					<? if ($cols[2]):?>
						<?= implode('',$cols[2]) ;?>
					<? endif;?>
				</ul>
			</div>

			<div class="c-footer__colmenu">
				<ul>
					<? if ($cols[3]):?>
						<?= implode('',$cols[3]) ;?>
					<? endif;?>

					<li>
						<p><?= __('Theo dõi chúng tôi trên', 'bbs') ?></p>
						<div class="c-footer__list-social list-social">
							<?php if ($_info_social_url = get_field('info_facebook_social', 'option')): ?>
                                <a href="<?= $_info_social_url ?>" ><?php bbs_render_image(THEME_CHILD_URI."/assets/img/facebook.svg",["alt"=>"Facebook icon","class"=>"facebook"]);?>
								<span class="string">Facebook BabyshopQN</span></a>
                            <?php endif ?>

                            <?php if ($_info_social_url  = get_field('info_instagram_social_link', 'option')): ?>
                                <a href="<?= $_info_social_url ?>" ><?php bbs_render_image(THEME_CHILD_URI."/assets/img/instagram.svg",["alt"=>"Instagram icon","class"=>"instagram"]);?> <span class="string">Instagram BabyshopQN</span></a>
                            <?php endif ?>

                            <?php if ($_info_social_url  = get_field('info_tiktok_social_link', 'option')): ?>
                                <a href="<?= $_info_social_url ?>" ><?php bbs_render_image(THEME_CHILD_URI."/assets/img/tiktok.svg",["alt"=>"Tiktok icon","class"=>"tiktok"]);?> <span class="string">Tiktok BabyshopQN</span></a>
                            <?php endif ?>
							
						</div>
					</li>
				</ul>
			</div>
			
		</div>
		<div class="c-footer__copyright">
			<p>Copyright <span class="c-footer__year"><?= date('Y') ?></span>. BabyshopQN. </p>
		</div>
	</div>
</footer>
</div><!-- #page -->


	<?php get_template_part('parts/footer_sticky');?>

<?php wp_footer(); ?>

<div id="formRegister" class="c-modal woocommerce" >
	<div class="c-modal__container">
		<div class="c-modal__title">
		</div>
		<div class="c-modal__content c-modal__register">
			<?php echo do_shortcode('[wc_login_form_bbs form_get="register"]') ?>
		</div>
		<span class="c-modal__close"></span>
	</div>
</div>

<div id="formLogin" class="form-login c-modal" >
	<div class="c-modal__container">
		<div class="c-modal__title">
			<h3><?php echo esc_html__( 'Đăng nhập', 'woocommerce' );?></h3>
		</div>
		<div class="c-modal__content">
			<?php 
				echo wp_login_form_header();
			?>
		</div>
		<span class="c-modal__close"></span>
	</div>
</div>

<div id="formView" class="c-modal" >
	<div class="c-modal__container">
		<div class="content-view">
			<?php
				wc_get_template_part( 'content', 'popup-product' );
			?>
		</div>
		<span class="c-modal__close"></span>
	</div>
</div>

<div class="c-popover" data-dlgid="popover-wishlist" >
	<div class="c-popover__container">
		<div class="c-popover__title">
			<?php _e('Yêu thích','bbs');?>
		</div>
		<div class="c-popover__content">
			<?php echo do_shortcode('[bbs_wishlist_extra_view title="none" view_all="none" layout="list"]'); ?>
		</div>
	</div>
	<span class="c-popover__close"></span>
</div>

<div class="c-popover form-login" data-dlgid="mn_popover_2" >
	<div class="c-popover__container">
		<div class="c-popover__content">
			<?php echo do_shortcode('[wc_login_form_bbs form_id="popup-login" redirect_to="/"]') ?>
		</div>
	</div>
	<span class="c-popover__close"></span>
</div>

<div class="c-popover mini-cart-hover" data-dlgid="mn_popover_1" >
	<div class="c-popover__container">
		<div class="c-popover__content">
			<?php echo woocommerce_mini_cart(); ?>
		</div>
	</div>
	<span class="c-popover__close"></span>
</div>

<div class="c-popover c-popover__language is-dropdown" data-dlgid="mn_popover_language" >
	<div class="c-popover__container">
		<div class="c-popover__content">
			<?= do_shortcode('[bbs_feature_pllang__top_otherlanguage]') ?>
		</div>
	</div>
	<span class="c-popover__close"></span>
</div>

<?= $script_footer ?>
</body>
</html>