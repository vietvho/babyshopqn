<?php
/**
 * Cart totals
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-totals.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 2.3.6
 */

defined( 'ABSPATH' ) || exit;

?>
<div class="cart_totals <?php echo ( WC()->customer->has_calculated_shipping() ) ? 'calculated_shipping' : ''; ?>">

	<?php do_action( 'woocommerce_before_cart_totals' ); ?>

	
	<table cellspacing="0" class="shop_table shop_table_noresponsive">
		<?php if ( wc_coupons_enabled() ) { ?>
			<tr class="cart-coupon">
			<td colspan="2">
				<div class="coupon">
					<label for="coupon_code"><?php esc_html_e( 'Coupon:', 'woocommerce' ); ?></label> <input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="<?php esc_attr_e( 'Coupon code', 'woocommerce' ); ?>" /> <button type="submit" class="button" name="apply_coupon" value="<?php esc_attr_e( 'Apply coupon', 'woocommerce' ); ?>"><?php esc_attr_e( 'Apply coupon', 'woocommerce' ); ?></button>
					<?php do_action( 'woocommerce_cart_coupon' ); ?>
				</div>
				</td>
			</tr>
		<?php } ?>
		
		<tr class="cart-subtotal">
			<td colspan="2" data-title="<?php esc_attr_e( 'Subtotal', 'woocommerce' ); ?>">
			<p><label><?php esc_html_e( 'Subtotal', 'woocommerce' ); ?></label><?php wc_cart_totals_subtotal_html(); ?></p>
			<div class="cart-coupon__items">
				<?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>
					<p class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
						<label><?php wc_cart_totals_coupon_label( $coupon ); ?></label>
						<span><?php wc_cart_totals_coupon_html( $coupon ); ?></span>
					</p>
				<?php endforeach; ?>
			</div>
			<?php // shipping ;?>
			<?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) : ?>
				<?php do_action( 'woocommerce_cart_totals_before_shipping' ); ?>
				<?php wc_cart_totals_shipping_html(); ?>
				<?php do_action( 'woocommerce_cart_totals_after_shipping' ); ?>
				<?php elseif ( WC()->cart->needs_shipping() && 'yes' === get_option( 'woocommerce_enable_shipping_calc' ) ) : ?>
				<div class="shipping">
					<label><?php esc_html_e( 'Shipping', 'woocommerce' ); ?></label>
					<?php woocommerce_shipping_calculator(); ?>
				</div>
			<?php endif; ?>
			<?php //shipping fees ;?>
			<?php foreach ( WC()->cart->get_fees() as $fee ) : ?>
				<div class="fee">
					<label><?php echo esc_html( $fee->name ); ?></label>
					<?php wc_cart_totals_fee_html( $fee ); ?>
				</div>
			<?php endforeach; ?>
			</td>
		</tr>

		<?php
		if ( wc_tax_enabled() && ! WC()->cart->display_prices_including_tax() ) {
			$taxable_address = WC()->customer->get_taxable_address();
			$estimated_text  = '';

			if ( WC()->customer->is_customer_outside_base() && ! WC()->customer->has_calculated_shipping() ) {
				/* translators: %s location. */
				$estimated_text = sprintf( ' <small>' . esc_html__( '(estimated for %s)', 'woocommerce' ) . '</small>', WC()->countries->estimated_for_prefix( $taxable_address[0] ) . WC()->countries->countries[ $taxable_address[0] ] );
			}

			if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) {
				foreach ( WC()->cart->get_tax_totals() as $code => $tax ) { // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
					?>
					<tr class="tax-rate tax-rate-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
						<th><?php echo esc_html( $tax->label ) . $estimated_text; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></th>
						<td data-title="<?php echo esc_attr( $tax->label ); ?>"><?php echo wp_kses_post( $tax->formatted_amount ); ?></td>
					</tr>
					<?php
				}
			} else {
				?>
				<tr class="tax-total">
					<th><?php echo esc_html( WC()->countries->tax_or_vat() ) . $estimated_text; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></th>
					<td data-title="<?php echo esc_attr( WC()->countries->tax_or_vat() ); ?>"><?php wc_cart_totals_taxes_total_html(); ?></td>
				</tr>
				<?php
			}
		}
		?>

		<?php do_action( 'woocommerce_cart_totals_before_order_total' ); ?>

		<tr class="order-total">
			<td colspan="2" data-title="<?php esc_attr_e( 'Total', 'woocommerce' ); ?>"><label><?php esc_html_e( 'Total', 'woocommerce' ); ?></label><?php wc_cart_totals_order_total_html(); ?>
				<?php do_action( 'woocommerce_cart_totals_after_order_total' ); ?>
				<div class="wc-proceed-to-checkout">
					<?php do_action( 'woocommerce_proceed_to_checkout' ); ?>
				</div>
			</td>
		</tr>
	</table>
	<?php do_action( 'woocommerce_after_cart_totals' ); ?>

</div>
