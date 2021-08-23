<?php
// Add custom Theme Functions here

include dirname(__FILE__) . '/bds_list/index.php';

add_action( 'phpmailer_init', function( $phpmailer ) {
    if ( !is_object( $phpmailer ) )
    $phpmailer = (object) $phpmailer;
    $phpmailer->Mailer     = 'smtp';
    $phpmailer->Host       = 'smtp.gmail.com';
    $phpmailer->SMTPAuth   = 1;
    $phpmailer->Port       = 587;
    $phpmailer->Username   = 'vnphat@gmail.com';
    $phpmailer->Password   = 'mdtdvhkqnhuywznv';
    $phpmailer->SMTPSecure = 'TLS';
    $phpmailer->From       = 'vnphat@gmail.com';
    $phpmailer->FromName   = 'DeChart';
});

function pveser_sent_contact_to_drive( $contact_form ) {
	$form_id = $contact_form->id;
	$submission = WPCF7_Submission::get_instance();
	if ( $submission ) {
		$posted_data = $submission->get_posted_data();
		$remote_ip = $submission->get_meta( 'remote_ip' );
		$url = $submission->get_meta( 'url' );
// 		$utm_source = $submission->get_meta( 'utm_source' );
// 		$utm_medium = $submission->get_meta( 'utm_medium' );
		if ($form_id==190) {			
			$fields = array(
			'entry.1768409376'=>urlencode($posted_data['your-name']),
			'entry.1767766810'=>urlencode($posted_data['your-phone']),
			'entry.537815667'=>urlencode($posted_data['your-address']),
			'entry.1214600936'=>urlencode($remote_ip),
			'entry.280885731'=>urlencode($url),
			'entry.1031930113'=>urlencode($posted_data['utm_source']),
			'entry.1795598680'=>urlencode($posted_data['utm_medium'])
			);
			foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
			rtrim($fields_string, '&');
			header('Content-type: text/html; charset=UTF-8');
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_ENCODING ,"UTF-8");
			$url=utf8_encode('https://docs.google.com/forms/u/0/d/e/1FAIpQLSeAAIKxG7-IWjGRcoKuOQ2zOSewZW0chiaz33XoUl4q-vzh_g/formResponse');
			curl_setopt($ch,CURLOPT_URL, $url);
			curl_setopt($ch,CURLOPT_POST, count($fields));
			curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
			curl_setopt($ch,CURLOPT_HEADER, 1);
			curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
			$result = curl_exec($ch);
			curl_close($ch);
		}
	}
}
add_action( 'wpcf7_mail_sent', 'pveser_sent_contact_to_drive' );

if ( ! function_exists( 'add_font_px' ) ) {
    function add_font_px( $initArray ){
        $initArray['fontsize_formats'] = "9px 10px 12px 13px 14px 16px 17px 18px 19px 20px 21px 24px 28px 32px 36px 40px 42px 45px 47px 50px 52px 54px 56px 58px 60px";
        return $initArray;
    }
    add_filter( 'tiny_mce_before_init', 'add_font_px', 99 );
}

add_action('admin_head', 'my_custom_css_admin_menu');
function my_custom_css_admin_menu () {
  // echo '<style>
  //   li#toplevel_page_flatsome-panel,
  //   li#wp-admin-bar-flatsome_panel,
  //   li#menu-posts-blocks,
  //   li#toplevel_page_wpcf7,
  //   li#menu-plugins,
  //   li#menu-comments {
  //     display: none;
  //   } 
  // </style>';
}