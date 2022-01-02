<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

include_once('_DBconfig.php');

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm5 XCt*L6VEIxyWr*j4Lcid-WC:by*xB@xX,<d1tx~`ULB{~vFK@Fdqy`j:i>0JE' );
define( 'SECURE_AUTH_KEY',  '!B03u}3!k|6 6Cw|_i/x]6</EOv.w1mQwe?yG-+4te.(U]9o0,/c-U3W6|t)IqPZ' );
define( 'LOGGED_IN_KEY',    ')q1A5pAG~)~~OyB#SOl#)#8C InBi*@OFgpo$G;&;UI3B_<dwk3<:n>1$pdcSbGI' );
define( 'NONCE_KEY',        '+X~3zKVl9X~iX[~/1S6=DkZvQls8jRutQ@l/C(WS7m4jHmF@j(mpQhyIz*+d=JmX' );
define( 'AUTH_SALT',        'g}.;O7=~6aQ0??`dD*@UTZeG(:C5(kxPxhCM:=P2H:boI28_T+b}MHVF~:1jg-1S' );
define( 'SECURE_AUTH_SALT', 'Yn[E^Ho[$c[jN3JzN}CD&lwo.j?Wbd:d<m>ThW[hN~oABf9mxH%rgv;M;InhRC))' );
define( 'LOGGED_IN_SALT',   'o%n|X%st3o-|(=7W[RTZ70bGqiy)lI*sMax-jc#Iw4`9=D7A+o|N,x({2R]o2ZiD' );
define( 'NONCE_SALT',       'DXc%!q7{7=J0I*$1+{1`PLjg#|XOwS@2Nxe$BWKz?6Oh06:VGxSNC~1E^OJ=:$Sl' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'bas_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

$url = __DIR__ . '/warren';
define('WP_CONTENT_DIR', $url);
$protocol = $_SERVER['HTTFP_X_FORWARDED_PROTO'] === 'https' ? 'https' : 'http';
define('WP_CONTENT_URL', $protocol . '://' . $_SERVER['HTTP_HOST'] . '/warren');

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
