<?php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

do_action( 'woocommerce_before_customer_login_form' ); ?>
<?php if ( ($form_get && $form_get == 'register') || (!$form_get && 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) )) : ?>
	<?php if (!$form_get) {?>
<div class="u-columns col2-set" id="customer_login">

	<div class="u-column1 col-1">
<?php }?>
<?php endif; ?>	
<?php //modifing for just showing only register form
if ($form_get && $form_get =='login'):
	echo wp_login_form_header();
endif;
if (!$form_get ):
?>
		<h2 class="u-mb-15"><strong><?php esc_html_e( 'Login', 'woocommerce' ); ?></strong></h2>
		<p><strong><small><?php _e('Sign in for a more personalized experience','bbs');?></small><strong></p>
		<form class="woocommerce-form woocommerce-form-login login" method="post">
			<?php do_action( 'woocommerce_login_form_start' ); ?>

			<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<label for="username"><?php esc_html_e( 'Username or email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
				<input type="text" required class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
			</p>
			<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<label for="password"><?php esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
				<input required class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password" />
			</p>

			<?php do_action( 'woocommerce_login_form' ); ?>

			<p class="form-button-container d-table u-mb-15">
				<label class="u-mb-15 woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
					<input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span><?php esc_html_e( 'Remember me', 'woocommerce' ); ?></span>
				</label>
				<?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
				<button type="submit" class="woocommerce-button button woocommerce-form-login__submit" name="login" value="<?php esc_attr_e( 'Log in', 'woocommerce' ); ?>"><?php esc_html_e( 'Log in', 'woocommerce' ); ?></button>
			</p>
			<p class="woocommerce-LostPassword lost_password">
				<a href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php esc_html_e( 'Lost your password?', 'woocommerce' ); ?></a>
			</p>

			<?php do_action( 'woocommerce_login_form_end' ); ?>

		</form>
<?php endif;//end modifing;?>
<?php if (  ($form_get && $form_get == 'register') ||(!$form_get && 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) )) : ?>
	<?php if (!$form_get) {?>

	</div>

	<div class="u-column2 col-2">
<?php } // modifing for form get only register ; 
?>
		<h2 class="u-mb-15"><?php esc_html_e( 'Register', 'woocommerce' ); ?></h2>
		<div class="form-login_desc--register <?php echo $form_get? 'u-plr-15' :'';?>">
		<?php __('Đăng kí thành viên để đặt hàng nhanh và nhận được nhiều ưu đãi hơn!','bbs');?>
		<p><strong><small><?php _e('Đăng kí thành viên để đặt hàng nhanh và nhận được nhiều ưu đãi hơn!','bbs');?><small></strong></p>
		</div>
		<form method="post" class="woocommerce-form woocommerce-form-register register" <?php do_action( 'woocommerce_register_form_tag' ); ?> >

			<?php do_action( 'woocommerce_register_form_start' ); ?>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="reg_username"><?php esc_html_e( 'Username', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="text" required class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
				</p>

			<?php endif; ?>

			<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				
				<input type="email" placeholder="<?php esc_html_e( 'Email address *', 'woocommerce' ); ?>" required class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
			</p>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>

				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<input type="password" placeholder="<?php esc_html_e( 'Password *', 'woocommerce' ); ?>"  required class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
				</p>

			<?php else : ?>

				<p><?php esc_html_e( 'A password will be sent to your email address.', 'woocommerce' ); ?></p>

			<?php endif; ?>

			<?php do_action( 'woocommerce_register_form' ); ?>

			<p class="form-button-container">
				<?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
				<button type="submit" class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="<?php esc_attr_e( 'Đăng ký', 'woocommerce' ); ?>"><?php esc_html_e( 'Đăng ký', 'woocommerce' ); ?></button>
			</p>
            <p>
            <?php _e('Bằng cách nhấp vào “Tham gia ngay bây giờ”, bạn xác nhận rằng bạn đồng ý với BabyshopQN’s','bbs');
			printf(' <a href="%1$s">%2$s</a>, ',get_translate_url('/chinh-sach-bao-mat'),__('Chính sách bảo mật','bbs'));
			printf('<a href="%1$s">%2$s</a>, ',get_translate_url('/dieu-khoan-chung'),__('Điều khoản chung','bbs'));
			printf('<a href="%1$s">%2$s</a>.',get_translate_url('/chinh-sach-mua-hang'),__('Chính sách mua hàng','bbs'));?>
            </p>
            <p>
            <?php _e('BabyshopQN uses Google ReCaptcha and by registering, users are subject to ','bbs');
            printf('<a href="%1$s">%2$s</a> and <a href="%3$s">%4$s</a>','https://policies.google.com/privacy',__('Privacy Policy','bbs'),'https://policies.google.com/terms',__('Terms of Service','bbs'));
            ?>
            </p>
			<?php do_action( 'woocommerce_register_form_end' ); ?>

		</form>
<?php if (!$form_get) {?>

	</div>

</div>
<?php } // modifing for form get only register ; 
?>
<?php endif; ?>

<?php do_action( 'woocommerce_after_customer_login_form' ); ?>
