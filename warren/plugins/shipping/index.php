<?php
/**
 * Plugin Name: GHTK, GHN
 * Plugin URI: 
 * Description: GHTK, GHN
 * Author: warren-nguyen
 * Author URI: 
 * Text Domain: warren
 * Domain Path: /languages
 * Version: 1.0
 * License:     GPLv2+
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WAN_SHIP_DIR', plugin_dir_path( __FILE__ ) );
define( 'WAN_SHIP_URL', plugins_url( '/', __FILE__ ) );

/**
 * Start the instance
 */

new WanShip();
?>
