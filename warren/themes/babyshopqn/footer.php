<?php global $script_footer; ?>

<footer>
	<div class="c-footer">
		<div class="bbs2-container c-footer__menu-outer">
			<div class="c-footer__colmenu">
				<?php 
					wp_nav_menu( array(
					   'theme_location'  => 'secondary', 
					   'menu_class'      => 'navbar-nav', 
					   'before'          => '',
					   'after'           => '',
					   'link_before'     => '',
					   'link_after'      => '',
					   'depth'           => 0,
					   'fallback_cb'     => '',                   
					 
					)); 
				?>
			</div>
			<div class="c-footer__menuright">
				<ul>
					<li><?= __('THÔNG TIN DOANH NGHIỆP', 'bbs') ?></li>
					<?php if ( have_rows( 'info_list', 'options' ) ) : ?>
						<?php while ( have_rows( 'info_list', 'options' ) ) : the_row(); ?>
						<li>
							<strong><?php echo get_sub_field('title') ?></strong>
							<p><?php echo get_sub_field('content') ?></p>
						</li>
						<?php endwhile; ?>
					<?php endif; ?>
					
					<!-- <li>
						<strong>Tên doanh nghiệp:</strong>
						<p>CÔNG TY TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN BEAUTIZON</p>
					</li>
					<li>
						<strong>Mã số thuế:</strong>
						<p>0401837148 cấp bởi Sở Kế Hoạch và Đầu Tư Thành phố Đà Nẵng ngày 15 tháng 06 năm 2017</p>
					</li>
					<li>
						<strong>Địa chỉ:</strong>
						<p>168 Phan Đăng Lưu, Phường Hoà Cường Bắc, Quận Hải Châu, Đà Nẵng, Việt Nam</p>
					</li> -->
				</ul>
			</div>
			<div class="c-footer__subscribe">
				
				<ul>
					<li><?= __('ĐĂNG KÝ NHẬN TIN', 'bbs') ?></li>
					<li>
						<p><?= __('Để nhận những thông tin khuyến mãi đầy hấp dẫn từ chúng tôi:', 'bbs') ?></p>
						<div class="c-form-subscriber">
							<?php echo do_shortcode('[contact-form-7 id="185" title="Subscriber Form Footer"]') ?>
						</div>
						<p><?= __('Theo dõi chúng tôi trên', 'bbs') ?></p>
						<div class="list-social">
							<?php if(get_field('info_facebook_social', 'option')): ?>
							<a href="<?= get_field('info_facebook_social', 'option') ?>"><img src="<?= HOME_URX ?>/wp-content/uploads/2021/01/facebook-1.svg" alt="Facebook"></a>
							<?php endif; ?>
							<?php if(get_field('info_instagram_social_link', 'option')): ?>
							<a href="<?= get_field('info_instagram_social_link', 'option') ?>"><img src="<?= HOME_URX ?>/wp-content/uploads/2021/01/instagram-1.svg" alt="instagram"></a>
							<?php endif; ?>
							<?php if(get_field('info_tiktok_social_link', 'option')): ?>
							<a href="<?= get_field('info_tiktok_social_link', 'option') ?>"><img src="<?= HOME_URX ?>/wp-content/uploads/2021/01/tiktok.svg" alt="tiktok"></a>
							<?php endif; ?>
							<p class="c-footer__thongbaobocongthuong"><img src="<?= THEME_CHILD_URI . '/assets/img/ticketxanh.png' ?>" alt="Da thong bao voi bo cong thuong icon"></p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="c-footer__copyright">
			<p>Copyright <span class="c-footer__year"><?= date('Y') ?></span>. Beautizon. Designed and Developed by <a href="https://xenia.tech" title="Xenia Tech Site">Xenia Tech</a></p>
		</div>
	</div>
</footer>
</div><!-- #page -->


	<?php get_template_part('parts/footer_sticky');?>
	<?php //<ul>;?>
	<?php /* ?>
	<?php if ( have_rows( 'footer_menubar_sticky', 'options' ) ) : ?>
		<?php while ( have_rows( 'footer_menubar_sticky', 'options' ) ) : the_row(); ?>
		<?php 
			$link = get_sub_field('link');
		?>
		<li>
			<a href="<?= $link['url'] ?>" title="<?= $link['title'] ?>" target="<?= $link['target'] ?>">
				<?php $image = get_sub_field( 'icon' ); ?>
				<?php if ( $image ) { ?>
				    <span class="c-menubar__thumb"><?php echo wp_get_attachment_image( $image, 'large' ); ?></span>
				<?php } ?>
				<span class="c-menubar__title"><?= $link['title'] ?></span>
			</a>
		</li>
		<?php endwhile; ?>
	<?php endif; ?>
	<?php */ ?>	
	<?php /*	<li>
		    <a href="<?= HOME_URX ?>/" title="Home" target="">
		        <span class="c-menubar__thumb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="attachment-large size-large replaced-svg">
		                <path d="M12.8484 2.75149C12.6234 2.52652 12.3182 2.40015 12 2.40015C11.6819 2.40015 11.3767 2.52652 11.1516 2.75149L2.75165 11.1515C2.53306 11.3778 2.41211 11.6809 2.41484 11.9956C2.41757 12.3102 2.54378 12.6112 2.76627 12.8337C2.98876 13.0562 3.28973 13.1824 3.60437 13.1851C3.919 13.1878 4.22213 13.0669 4.44845 12.8483L4.80005 12.4967V20.3999C4.80005 20.7181 4.92648 21.0234 5.15152 21.2484C5.37656 21.4735 5.68179 21.5999 6.00005 21.5999H8.40005C8.71831 21.5999 9.02353 21.4735 9.24858 21.2484C9.47362 21.0234 9.60005 20.7181 9.60005 20.3999V17.9999C9.60005 17.6816 9.72648 17.3764 9.95152 17.1514C10.1766 16.9263 10.4818 16.7999 10.8 16.7999H13.2C13.5183 16.7999 13.8235 16.9263 14.0486 17.1514C14.2736 17.3764 14.4 17.6816 14.4 17.9999V20.3999C14.4 20.7181 14.5265 21.0234 14.7515 21.2484C14.9766 21.4735 15.2818 21.5999 15.6 21.5999H18C18.3183 21.5999 18.6235 21.4735 18.8486 21.2484C19.0736 21.0234 19.2 20.7181 19.2 20.3999V12.4967L19.5516 12.8483C19.778 13.0669 20.0811 13.1878 20.3957 13.1851C20.7104 13.1824 21.0113 13.0562 21.2338 12.8337C21.4563 12.6112 21.5825 12.3102 21.5853 11.9956C21.588 11.6809 21.467 11.3778 21.2484 11.1515L12.8484 2.75149Z" fill="#222428"></path>
		            </svg></span>
		        <span class="c-menubar__title">Trang chủ</span>
		    </a>
		</li>
		<li>
		    <span href="<?= HOME_URX ?>" data-popover="mn_popover_menubar" >
		        <span class="c-menubar__thumb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="attachment-large size-large replaced-svg">
		                <path d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11M5 9H19L20 21H4L5 9Z" stroke="#222428" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		            </svg></span>
		        <span class="c-menubar__title">Shop</span>
		    </span>
		</li>
		<li>
		    <a href="#" title="Offer" target="">
		        <span class="c-menubar__thumb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="attachment-large size-large replaced-svg">
		                <path d="M7 7H7.01M7 3H12C12.512 3 13.024 3.195 13.414 3.586L20.414 10.586C20.7889 10.9611 20.9996 11.4697 20.9996 12C20.9996 12.5303 20.7889 13.0389 20.414 13.414L13.414 20.414C13.0389 20.7889 12.5303 20.9996 12 20.9996C11.4697 20.9996 10.9611 20.7889 10.586 20.414L3.586 13.414C3.4 13.2285 3.25249 13.0081 3.15192 12.7655C3.05136 12.5228 2.99973 12.2627 3 12V7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3Z" stroke="#222428" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		            </svg></span>
		        <span class="c-menubar__title">Offer</span>
		    </a>
		</li>
		<li>
		    <a href="#" title="Community" target="">
		        <span class="c-menubar__thumb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="attachment-large size-large replaced-svg">
		                <path d="M17 20H22V18C22 17.3765 21.8057 16.7686 21.4441 16.2606C21.0826 15.7527 20.5718 15.37 19.9827 15.1658C19.3937 14.9615 18.7556 14.9459 18.1573 15.121C17.5589 15.2962 17.03 15.6534 16.644 16.143M17 20H7M17 20V18C17 17.344 16.874 16.717 16.644 16.143M16.644 16.143C16.2726 15.215 15.6318 14.4195 14.804 13.8591C13.9762 13.2988 12.9996 12.9993 12 12.9993C11.0004 12.9993 10.0238 13.2988 9.196 13.8591C8.36825 14.4195 7.72736 15.215 7.356 16.143M7 20H2V18C2.00005 17.3765 2.19434 16.7686 2.55586 16.2606C2.91739 15.7527 3.42819 15.37 4.01725 15.1658C4.60632 14.9615 5.24438 14.9459 5.84274 15.121C6.4411 15.2962 6.97003 15.6534 7.356 16.143M7 20V18C7 17.344 7.126 16.717 7.356 16.143M15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10C11.2044 10 10.4413 9.68393 9.87868 9.12132C9.31607 8.55871 9 7.79565 9 7C9 6.20435 9.31607 5.44129 9.87868 4.87868C10.4413 4.31607 11.2044 4 12 4C12.7956 4 13.5587 4.31607 14.1213 4.87868C14.6839 5.44129 15 6.20435 15 7ZM21 10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12C18.4696 12 17.9609 11.7893 17.5858 11.4142C17.2107 11.0391 17 10.5304 17 10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10ZM7 10C7 10.5304 6.78929 11.0391 6.41421 11.4142C6.03914 11.7893 5.53043 12 5 12C4.46957 12 3.96086 11.7893 3.58579 11.4142C3.21071 11.0391 3 10.5304 3 10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10Z" stroke="#222428" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		                <path d="M7 20H17V18C17 17.344 16.874 16.717 16.644 16.143C16.2726 15.215 15.6318 14.4195 14.804 13.8591C13.9762 13.2988 12.9996 12.9993 12 12.9993C11.0004 12.9993 10.0238 13.2988 9.196 13.8591C8.36825 14.4195 7.72736 15.215 7.356 16.143C7.126 16.717 7 17.344 7 18V20Z" stroke="#222428" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		                <path d="M14.1213 9.12132C14.6839 8.55871 15 7.79565 15 7C15 6.20435 14.6839 5.44129 14.1213 4.87868C13.5587 4.31607 12.7956 4 12 4C11.2044 4 10.4413 4.31607 9.87868 4.87868C9.31607 5.44129 9 6.20435 9 7C9 7.79565 9.31607 8.55871 9.87868 9.12132C10.4413 9.68393 11.2044 10 12 10C12.7956 10 13.5587 9.68393 14.1213 9.12132Z" stroke="#222428" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		            </svg></span>
		        <span class="c-menubar__title">Community</span>
		    </a>
		</li>
		<li>
		    <a href="#my-account" title="Me" target="">
		        <span class="c-menubar__thumb"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="attachment-large size-large replaced-svg">
		                <path d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#222428" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
		            </svg></span>
		        <span class="c-menubar__title">Me</span>
		    </a>
		</li>
	</ul>*/?>


<?php wp_footer(); ?>
<?php 
	get_template_part('/parts/megamenu_container');
?>
<!-- <div class="c_megamenu" data-class="mn_sanphammoi">
	<span class="c_megamenu__point" ></span>
	<div class="c_megamenu__content">
		<div class="bbs2-container">
			<div class="c_megamenu__row">
				<div class="c_megamenu__col mn">
					<ul>
						<li><strong>Shop by concerns</strong></li>
						<li><a href="#">Acne & Blemishes</a></li>
						<li><a href="#">Anti-Aging</a></li>
						<li><a href="#">Dark Spots</a></li>
						<li><a href="#">Pores</a></li>
						<li><a href="#">Dryness</a></li>
						<li><a href="#">Fine Lines & Wrinkles</a></li>
						<li><a href="#">Dullness/Uneven Texture</a></li>
					</ul>
				</div>
				<div class="c_megamenu__col mn">
					<ul>
						<li><strong>Moisturizers</strong></li>
						<li><a href="#">Night Creams</a></li>
						<li><a href="#">Face Oils</a></li>
						<li><a href="#">Mists & Essences</a></li>
						<li><a href="#">BB & CC Creams</a></li>
					</ul>
				</div>
				<div class="c_megamenu__col mn_related_img">
					<a href="#"><img src="<?= HOME_URX ?>/wp-content/uploads/2021/01/product.jpg" alt="product"><span>Related Banner</span></a>
				</div>
				<div class="c_megamenu__col mn_related_img">
					<a href="#"><img src="<?= HOME_URX ?>/wp-content/uploads/2021/01/product.jpg" alt="product"><span>Related Banner</span></a>
				</div>
			</div>
		</div>
	</div>
</div> -->
<!-- <div class="c_megamenu" data-class="mn_wishlist">
	<span class="c_megamenu__point" ></span>
	<div class="c_megamenu__content">
		<div class="bbs2-container">
			<div class="x_row">
				<ul>
					<li><a href="#">New 2 makeup </a></li>
					<li><a href="#">New 2 skincare</a></li>
					<li><a href="#">New 2 hair </a></li>
				</ul>
			</div>
		</div>
	</div>
</div> -->
<div class="c-modal c-modal--promotion" data-usercookie="24h">
	<?php 
	$_option_modal_privacy_link = get_field('modal_privacy_link', 'option');
	$_option_modal_terms_of_use = get_field('modal_terms_of_use', 'option');
	$_option_modal_image        = get_field('modal_subscriber_image', 'option');

	?>
	<div class="c-modal__container">
		<div class="c-modal__content">
			<div class="c-modal--promotion__area">
				<div class="row">
					<div class="col">
						<div class="c-modal--promotion_form">
							<p class="c-modal--promotion_title"><?= __('Cảm ơn bạn đã ghé thăm Beautizon', 'bbs') ?></p>
							<p class="c-modal--promotion_description"><?= __('Đăng ký để nhận ngay 1 Natio toner miễn phí bạn nhé!', 'bbs') ?></p>
							<?= do_shortcode('[contact-form-7 id="320" title="Form for Promotion"]') ?>
							<div class="c-modal--promotion_note"><?php printf(__('Bằng việc click vào "Đăng ký", bạn đã đồng ý với các <a href="%1$s">điều kiện</a>, <a href="%2$s">chính sách bảo mật</a> của Beautizon và sẽ nhận được những thông báo từ Beautizon.', 'bbs'), $_option_modal_privacy_link['url'], $_option_modal_terms_of_use['url'] ) ?>
							</div>
						</div>
					</div>
					<div class="col c-modal--promotion_image">
						
						<?php 
						if($_option_modal_image) {
		               		$_url = wp_get_attachment_image_url($_option_modal_image, 'full');
							$_alt = get_post_meta($_option_modal_image, '_wp_attachment_image_alt', true);
							// $_alt = empty(trim($_alt)) ? $loop->post->post_title : get_post_meta($_thumbnail_id, '_wp_attachment_image_alt', true);
		                	echo '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. $_url . '" alt="Placeholder" data-alt="' . $_alt . '" class="lazy-img-v2" />'; 
		               } else 
		                	echo '<img src="data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%200%200\'%3E%3C/svg%3E"  data-src="'. SITE_URX . '/wp-content/uploads/2021/01/my_pham.jpg' . '" alt="product placeholder Image" class="lazy-img-v2" />'; 
			            ?>
					</div>
				</div>
				<div class="c-modal--promotion__form"></div>
			</div>
		</div>
		<span class="c-modal__close"></span>
	</div>
</div>

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
				//wc_get_template_part( 'content', 'popup-product' );
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
            <!-- <a href="<?php SITE_URX ?>/en" >
                <img src="<?= THEME_CHILD_URI . "/assets/img/language_en.png" ?>" alt="english language icon">&nbsp;
                <span class="string">EN</span>
            </a> -->
			<?= do_shortcode('[bbs_feature_pllang__top_otherlanguage]') ?>
 
		</div>
	</div>
	<span class="c-popover__close"></span>
</div>



<div class="oplc">
	<div id="fb-root"></div>
	<script>
		if(jQuery(window).width() > 768)  {
			var oc = 0;
			var view_message_fb = function() {
				if(oc === 0) {
					jQuery('#fb-root').after('<div class="fb-customerchat view" attribution=setup_tool page_id="165522380665910" theme_color=#2fa483ff logged_in_greeting="Chào bạn! Beautizon chúng tôi có thể giúp điều gì?" logged_out_greeting="Chào bạn! Beautizon chúng tôi giúp bạn điều gì?" greeting_dialog_display=show ref=https://m.me/Beautizon.com.vn> </div>');
					window.fbAsyncInit = function() { 
						FB.init({ xfbml: true, version: "v3.2" }) };
						(function(e, a, f) { var c, b = e.getElementsByTagName(a)[0]; if (e.getElementById(f)) { return } c = e.createElement(a);
					    c.id = f;
					    c.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
					    b.parentNode.insertBefore(c, b) }(document, "script", "facebook-jssdk"));
					oc=1;
				}
					
			}
			// Scroll
			document.addEventListener("scroll", function(){
				if(oc === 0) {
					view_message_fb();
					oc=1;
				}
			});
			// Timeout
			jQuery( document ).ready(function() {
				setTimeout(view_message_fb, 3000);
			});
		}
	</script>
</div>
<div class="oslp">
	<a href="https://m.me/Beautizon.com.vn" target="_blank" style="
	    color: #2fa483ff;
	    position: fixed;
	    bottom: 70px;
	    right: 10px;
	    border-radius: 50%;
	    background: #fff;
	    box-shadow: 0 0 20px #2fa483ff inset;

	    z-index: 2;
	"><svg height="50px" viewBox="0 0 512 512" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="#2fa483ff" d="m241.574219 210.210938-82.953125 87.828124 75.492187-41.421874 39.445313 41.421874 82.488281-87.828124-74.65625 40.695312zm0 0"/><path  fill="#2fa483ff" d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm2 393.035156c-15.847656 0-31.144531-2.238281-45.535156-6.382812l-51.625 29.347656v-55.210938c-34.578125-26.3125-56.660156-66.386718-56.660156-111.269531 0-79.265625 68.867187-143.519531 153.820312-143.519531 84.957031 0 153.820312 64.253906 153.820312 143.519531 0 79.257813-68.863281 143.515625-153.820312 143.515625zm0 0"/></svg></a>
</div>
<?= $script_footer ?>
</body>
</html>