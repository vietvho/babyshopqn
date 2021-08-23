<?php
/**
 * My Addresses
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/my-address.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 2.6.0
 */

defined( 'ABSPATH' ) || exit;

$customer_id = get_current_user_id();

if ( ! wc_ship_to_billing_address_only() && wc_shipping_enabled() ) {
	$get_addresses = apply_filters(
		'woocommerce_my_account_get_addresses',
		array(
			'billing'  => __( 'Billing address', 'woocommerce' ),
			'shipping' => __( 'Shipping address', 'woocommerce' ),
		),
		$customer_id
	);
} else {
	$get_addresses = apply_filters(
		'woocommerce_my_account_get_addresses',
		array(
			'billing' => __( 'Billing address', 'woocommerce' ),
		),
		$customer_id
	);
}

$oldcol = 1;
$col    = 1;
?>


<?php if ( ! wc_ship_to_billing_address_only() && wc_shipping_enabled() ) : ?>
	<div class="u-columns woocommerce-Addresses col2-set addresses">
<?php endif; ?>

<?php foreach ( $get_addresses as $name => $address_title ) : ?>
	<?php
		$getter  = "get_{$name}";
		$customer = new WC_Customer( $customer_id );
		$address = $customer->$getter();
		$col     = $col * -1;
		$oldcol  = $oldcol * -1;
	?>

	<div class="woocommerce-Address">
		<?php if ($address['address_1'])	{?>
			<div class="woocommerce-Address-name">
				<?= "{$address['first_name']} {$address['last_name']}";?>
				<a href="<?php echo esc_url( wc_get_endpoint_url( 'edit-address', $name ) ); ?>" class="edit"><?php echo $address ? esc_html__( 'Edit', 'woocommerce' ) : esc_html__( 'Add', 'woocommerce' ); ?></a>
			</div>
			<p>
				<label><?php _e('Address','bbs');?></label>
				<?php $__address = $address;
				unset($__address['first_name']);
				unset($__address['last_name']);
				echo WC()->countries->get_formatted_address($__address,', ');?>

			</p>
			<p>
				<label><?php _e('Phone','bbs');?></label>
				<?= $address['phone'] ?>
			</p>
			<p class="address-title"><?php echo esc_html( $address_title ); ?></p>
		<?php }
		else {
			printf(__('You have not set up %s address yet.', 'woocommerce' ),$name);
			echo '<a href="'. esc_url( wc_get_endpoint_url( 'edit-address', $name ) ).'" class="btn">'.__('Add Address','bbs').'</a>';
		} ?>
	</div>

<?php endforeach; ?>

<?php if ( ! wc_ship_to_billing_address_only() && wc_shipping_enabled() ) : ?>
	</div>
	<?php
endif;
