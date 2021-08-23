<?php
/**
 * Edit account form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-edit-account.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_edit_account_form' ); ?>

<form class="woocommerce-EditAccountForm edit-account" action="" method="post" <?php do_action( 'woocommerce_edit_account_form_tag' ); ?> >

	<?php do_action( 'woocommerce_edit_account_form_start' ); ?>
	<ul class="edit-account--toggle">
		<li>
			<div class="edit-account--item">
				<label><?_e('Name','bbs');?></label> 
				<div class="field-content"><?= "{$current_user->first_name} {$current_user->last_name}";?></div>
				<a href="javascript:void(0);" class="edit"><?php _e('Edit','bbs');?></a>
			</div>
			<div class="panel">
				<p><label><?_e('Name','bbs');?></label></p>
				<p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
					<label for="account_first_name"><?php esc_html_e( 'First name', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="account_first_name" id="account_first_name" autocomplete="given-name" value="<?php echo esc_attr( $current_user->first_name ); ?>" />
				</p>
				<p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
					<label for="account_last_name"><?php esc_html_e( 'Last name', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="account_last_name" id="account_last_name" autocomplete="family-name" value="<?php echo esc_attr( $current_user->last_name ); ?>" />
				</p>
				<div class="clear"></div>
				<a href="javascript:void(0);" class="btn outlined edit"><?php _e('Cancel','woocommerce');?></a>
				<button type="submit" class="woocommerce-Button button" name="save_account_details" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>"><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></button>
			</div>
		</li>
		<li>
			<div class="edit-account--item">
				<label><?_e('Email','bbs');?></label> 
				<div class="field-content"><?= "{$current_user->user_email}";?></div>
				<a href="javascript:void(0);" class="edit"><?php _e('Edit','bbs');?></a>
			</div>
			<div class="panel">
				<p><label><?_e('Email','bbs');?></label> </p>
				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="account_email"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="email" class="woocommerce-Input woocommerce-Input--email input-text" name="account_email" id="account_email" autocomplete="email" value="<?php echo esc_attr( $current_user->user_email ); ?>" />
				</p>
				<div class="clear"></div>
				<a href="javascript:void(0);" class="btn outlined edit"><?php _e('Cancel','woocommerce');?></a>
				<button type="submit" class="woocommerce-Button button" name="save_account_details" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>"><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></button>
			</div>
		</li>
		<li>
			<div class="edit-account--item">
				<label><?_e('Phone','bbs');?></label> 
				<div class="field-content"><?= get_user_meta( get_current_user_id(), 'billing_phone', true );?></div>
				<a href="javascript:void(0);" class="edit"><?php _e('Edit','bbs');?></a>
			</div>
			<div class="panel">
				<p><label><?_e('Phone','bbs');?></label> </p>
				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="billing_phone"><?php esc_html_e( 'Phone', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="tel" class="woocommerce-Input woocommerce-Input--phone input-text" name="billing_phone" id="billing_phone" autocomplete="phone" value="<?php echo esc_attr( $current_user->user_phone ); ?>" />
				</p>
				<div class="clear"></div>
				<a href="javascript:void(0);" class="btn outlined edit"><?php _e('Cancel','woocommerce');?></a>
				<button type="submit" class="woocommerce-Button button" name="save_account_details" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>"><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></button>
			</div>
		</li>
		
		<li>
			<div class="edit-account--item">
				<label><?_e('Password','bbs');?></label> 
				<div class="field-content">&#9679; &#9679; &#9679; &#9679; &#9679;</div>
				<a href="javascript:void(0);" class="edit"><?php _e('Edit','bbs');?></a>
			</div>
			<div class="panel">
				<p><label><?_e('Password','bbs');?></label> </p>
				<fieldset>
					<legend><?php esc_html_e( 'Password change', 'woocommerce' ); ?></legend>

					<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
						<label for="password_current"><?php esc_html_e( 'Current password (leave blank to leave unchanged)', 'woocommerce' ); ?></label>
						<input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_current" id="password_current" autocomplete="off" />
					</p>
					<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
						<label for="password_1"><?php esc_html_e( 'New password (leave blank to leave unchanged)', 'woocommerce' ); ?></label>
						<input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_1" id="password_1" autocomplete="off" />
					</p>
					<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
						<label for="password_2"><?php esc_html_e( 'Confirm new password', 'woocommerce' ); ?></label>
						<input type="password" class="woocommerce-Input woocommerce-Input--password input-text" name="password_2" id="password_2" autocomplete="off" />
					</p>
				</fieldset>
				<div class="clear"></div>
				<a href="javascript:void(0);" class="btn outlined edit"><?php _e('Cancel','bbs');?></a>
				<button type="submit" class="woocommerce-Button button" name="save_account_details" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>"><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></button>
			</div>
		</li>
		<li>
			<div class="edit-account--item">
				<label><?_e('Birthday','bbs');?></label> 
				<div class="field-content"><?= get_field('birthday',"user_".$current_user->ID);?></div>
				<a class="mail" href="mailto:<?=get_option('admin_email');?>"><?php _e('Contact us to change','bbs');?></a>

			</div>
		</li>
	<?php do_action( 'woocommerce_edit_account_form' ); ?>

	<p>
		<?php wp_nonce_field( 'save_account_details', 'save-account-details-nonce' ); ?>
		<input type="hidden" name="action" value="save_account_details" />
	</p>

	<?php do_action( 'woocommerce_edit_account_form_end' ); ?>
</form>

<?php do_action( 'woocommerce_after_edit_account_form' ); ?>
