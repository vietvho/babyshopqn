<?php 
// Tận dụng lại document
// https://www.businessbloomer.com/woocommerce-separate-login-registration/


add_shortcode( 'wc_login_form_bbs', 'bbs_separate_login_form' );
  
function bbs_separate_login_form($atts) {
      $atts = shortcode_atts( array(
        'redirect_to' => '/my-account',
        'form_get' => 'login',
        'menus_on_successed' => [
           'order'=>['url'=>wc_get_account_endpoint_url('orders'),'text'=>__('Recent Orders','bbs')],
           'wishlist'=>['url'=>get_translate_url('/wishlist'),'text'=>__('My Wishlist','bbs')],
           'myaccount'=>['url'=>wc_get_account_endpoint_url('dashboard'),'text'=>__('Account Settings','bbs')],
           'logout'=>['url'=>wp_logout_url( home_url() ),'text'=>__('Log out','bbs'),'class'=>'border--top']
        ]
    ), $atts, 'bbs_separate_login_form' );

   if ( is_admin() ) return;
   if ( is_user_logged_in() ) {
      $current_user = wp_get_current_user();
      echo "<h2>".__('Welcome, ','bbs').$current_user->user_firstname."</h2>";
      echo '<ul class="nav-list--column">';
      foreach (wc_get_account_menu_items() as $key => $menu_name){
         // printf('<li %3$s><a href="%1$s">%2$s</a></li>',$menu['url'],$menu['text'],$menu['class']? 'class ='.$menu['class'] : '');
         printf('<li %3$s><a href="%1$s">%2$s</a></li>',wc_get_account_endpoint_url($key),$menu_name,$key=='customer-logout' ? 'class = border--top': '');

      }
      echo '</ul>';
      return;
   }; 
   echo '<div class="ajax-form-container">';
      wc_get_template( 'myaccount/form-login.php',['form_get'=>$atts['form_get'],'redirect_to'=>$atts['redirect_to']] );
   echo '</div>';
 
}
/**
 * @snippet       Add fields to register woocommerce
 */

function woocommerce_edit_my_account_form_start() {
   return array(
       'billing_first_name' => array(
           'type'        => 'text',
           'class'      => ['first_name'],
           'label'       => __( 'Họ', ' bbs' ),
           'required'    => true,
           'custom_attributes' =>  array( 'required' => 'required' )
       ),
       'billing_last_name' => array(
           'type'        => 'text',
           'class'      => ['last_name'],
           'label'       => __( 'Tên', ' bbs' ),
           'custom_attributes' =>  array( 'required' => 'required' ),
           'required'    => true,
       ),
   );
}

function woocommerce_edit_my_account_page() {
   return array(
      'billing_phone' => array(
         'type'        => 'tel',
         'placeholder' => __( 'Số điện thoại', 'bbs' ),
         'required'    => false,
      ),
      'birthday' => array(
            'type'        => 'date',
            // 'label'       => __( 'Enter your birthdate to receive a free gift every year.', ' bbs' ),
            'label'       => __( 'Nhập ngày sinh của bạn để nhận quà miễn phí hàng năm.', ' bbs' ),
            'label_class' => 'h2',
            'placeholder' => __( 'birthdate', 'bbs' ),
            'required'    => false,
      ),
   );
}
function edit_my_account_page_woocommerce() {
   $fields = woocommerce_edit_my_account_page();
   foreach ( $fields as $key => $field_args ) {
       woocommerce_form_field( $key, $field_args );
   }
}
function add_register_fields_before_email() {
   $fields = woocommerce_edit_my_account_form_start();
   foreach ( $fields as $key => $field_args ) {
       woocommerce_form_field( $key, $field_args );
   }
}
function woocommerce_form_field_modifying($args){
   if ( $args['required'] ) {
      $args['custom_attributes'] = ['required'=>'required'];
   }
   return $args;
}
add_filter('woocommerce_form_field_args','woocommerce_form_field_modifying');
add_action( 'woocommerce_register_form', 'edit_my_account_page_woocommerce', 1 );
add_action( 'woocommerce_register_form_start', 'add_register_fields_before_email', 1 );

/**
* Below code save extra fields.
*/
function wooc_save_extra_register_fields( $customer_id ) {
   if ( isset( $_POST['billing_phone'] ) ) {
            // Phone input filed which is used in WooCommerce
            update_user_meta( $customer_id, 'billing_phone', sanitize_text_field( $_POST['billing_phone'] ) );
   }
   if ( isset( $_POST['birthday'] ) ) {
      // Phone input filed which is used in WooCommerce
      update_user_meta( $customer_id, 'birthday', sanitize_text_field( $_POST['birthday'] ) );
   }
   if ( isset( $_POST['billing_first_name'] ) ) {
         //First name field which is by default
         update_user_meta( $customer_id, 'first_name', sanitize_text_field( $_POST['billing_first_name'] ) );
         // First name field which is used in WooCommerce
         update_user_meta( $customer_id, 'billing_first_name', sanitize_text_field( $_POST['billing_first_name'] ) );
   }
   if ( isset( $_POST['billing_last_name'] ) ) {
         // Last name field which is by default
         update_user_meta( $customer_id, 'last_name', sanitize_text_field( $_POST['billing_last_name'] ) );
         // Last name field which is used in WooCommerce
         update_user_meta( $customer_id, 'billing_last_name', sanitize_text_field( $_POST['billing_last_name'] ) );
   }
}
add_action( 'woocommerce_created_customer', 'wooc_save_extra_register_fields' );

/**
 * @snippet       WooCommerce User Login Shortcode
 * @how-to        Get CustomizeWoo.com FREE
 * @author        Rodolfo Melogli
 * @compatible    WooCommerce 4.0
 * @donate $9     https://businessbloomer.com/bloomer-armada/
 */

add_shortcode( 'wc_reg_form_bbs', 'bbs_separate_registration_form' );
    
function bbs_separate_registration_form() {
   if ( is_admin() ) return;
   if ( is_user_logged_in() ) return;
   ob_start();
 
   // NOTE: THE FOLLOWING <FORM></FORM> IS COPIED FROM woocommerce\templates\myaccount\form-login.php
   // IF WOOCOMMERCE RELEASES AN UPDATE TO THAT TEMPLATE, YOU MUST CHANGE THIS ACCORDINGLY
 
   do_action( 'woocommerce_before_customer_login_form' );
 
   ?>
      <form method="post" class="woocommerce-form woocommerce-form-register register" <?php do_action( 'woocommerce_register_form_tag' ); ?> >
 
         <?php do_action( 'woocommerce_register_form_start' ); ?>
 
         <?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>
 
            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
               <label for="reg_username"><?php esc_html_e( 'Username', 'woocommerce' ); ?> <span class="required">*</span></label>
               <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
            </p>
 
         <?php endif; ?>
 
         <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label for="reg_email"><?php esc_html_e( 'Email address', 'woocommerce' ); ?> <span class="required">*</span></label>
            <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
         </p>
 
         <?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>
 
            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
               <label for="reg_password"><?php esc_html_e( 'Password', 'woocommerce' ); ?> <span class="required">*</span></label>
               <input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
            </p>
 
         <?php else : ?>
 
            <p><?php esc_html_e( 'A password will be sent to your email address.', 'woocommerce' ); ?></p>
 
         <?php endif; ?>
 
         <?php do_action( 'woocommerce_register_form' ); ?>
 
         <p class="woocommerce-FormRow form-row">
            <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
            <button type="submit" class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="<?php esc_attr_e( 'Register', 'woocommerce' ); ?>"><?php esc_html_e( 'Register', 'woocommerce' ); ?></button>
         </p>
 
         <?php do_action( 'woocommerce_register_form_end' ); ?>
 
      </form>
 
   <?php
     
   return ob_get_clean();
}