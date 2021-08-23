<!Doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="content-language" content="vi">
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo THEME_CHILD_URI ?>/assets/img/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo THEME_CHILD_URI ?>/assets/img/favicon/favicon.jpg">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo THEME_CHILD_URI ?>/assets/img/favicon/favicon.jpg">
<link rel="manifest" href="<?php echo THEME_CHILD_URI ?>/assets/img/favicon/site2.webmanifest">
<link rel="mask-icon" href="<?php echo THEME_CHILD_URI ?>/assets/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="<?php echo THEME_CHILD_URI ?>/assets/img/favicon/favicon.jpg" type="image/x-icon" />

<meta name="msapplication-TileColor" content="#2fa483ff">
<meta name="theme-color" content="#2fa483ff">
<meta name="baseurl_pqt" content="<?php echo HOME_URX ?>">

<meta name="security_ajax_refer" content="<?php echo wp_create_nonce( "sweb_security_ajax_refer" ) ?>">
<script>var bbs_theme_ajaxurl = '<?php echo SITE_URX ?>/wp-admin/admin-ajax.php';</script>

<?php wp_head(); ?>


<!-- Google Tag Manager -->

<script>
var htmlElm = document.querySelector( 'html' );
htmlElm.addEventListener('readyDocument', function (e) {
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-KJ4WQ3F');
}, false);
</script>
<!-- End Google Tag Manager -->  
</head>
<body <?php body_class(); ?>>

<!-- Google Tag Manager (noscript) -->

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJ4WQ3F"

height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

 

<!-- End Google Tag Manager (noscript) --> 


<?php wp_body_open(); ?>
<div id="page" class="hfeed site">
<?php get_template_part('parts/header');?>