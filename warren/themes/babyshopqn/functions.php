<?php
define('THEME_CHILD_URI', get_stylesheet_directory_uri());
define('THEME_CHILD_DIR', get_stylesheet_directory());
define('THEME_TEMP_DIR', get_temp_dir());

define('HOME_URX', home_url());
define('SITE_URX', site_url());
define('ROOT_URL', THEME_CHILD_URI);

define('IMG_NOTFOUND', THEME_CHILD_URI . '/assets/img/xenia-team-big.jpg');
define('IMG_CAT_NOTFOUND', THEME_CHILD_URI . '/assets/img/Cover.png');


    

// Post Type Suport
require THEME_CHILD_DIR . "/lib/post_type/brandstory.php";
require THEME_CHILD_DIR . "/lib/post_type/goclamdep.php";
require THEME_CHILD_DIR . "/lib/post_type/product.php";
require THEME_CHILD_DIR . "/lib/post_type/tintuc.php";


// Feature
require THEME_CHILD_DIR . "/lib/feature/feature-add_avatar_user.php";
require THEME_CHILD_DIR . "/lib/feature/pllang_htmllangflag_switch.php";
require THEME_CHILD_DIR . "/lib/feature/feature_change_categories_metabox.php";


require THEME_CHILD_DIR . "/lib/helper.php";
require THEME_CHILD_DIR . "/lib/setup.php";
require THEME_CHILD_DIR . "/lib/woocommerce.php";
require THEME_CHILD_DIR . "/lib/ajax/checklike.php";
require THEME_CHILD_DIR . "/lib/ajax/getnonce.php";
require THEME_CHILD_DIR . "/lib/login/formlogin.php";