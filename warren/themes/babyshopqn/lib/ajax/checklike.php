<?php 
// action like and unlike
add_action('wp_ajax_actionHelpful', 'dtheme_actionHelpful_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_actionHelpful', 'dtheme_actionHelpful_ajax_handler'); // wp_ajax_nopriv_{action}
function dtheme_actionHelpful_ajax_handler() {
  // Check verify
  // bbs_check_verify_nonce($_POST['security']);
  // check user login
  if ( is_user_logged_in() ) {
    $idUser       = get_current_user_id();
    $idComment    = isset($_POST['data']['idComment']) ? $_POST['data']['idComment'] : '';
    $actionLike   = isset($_POST['data']['actionLike']) ? $_POST['data']['actionLike'] : '';
    if ($idComment != '' && $actionLike != '' ) {
      global $wpdb;
      $sql = "SELECT comment_like, comment_unlike FROM ".$wpdb->prefix."comments WHERE comment_ID = ".$idComment;
      $checkData = $wpdb->get_results($sql);
      if($checkData){
        $comment        = 'comment_'.$actionLike;
        // set data
        $str_idUser  = $checkData[0]->$comment;
        if ($str_idUser != '') {
          $string_idUser  = explode(',', $str_idUser);
          // check user like exist
          if (($key = array_search($idUser, $string_idUser)) !== false) {
              unset($string_idUser[$key]);
          }else{
              array_push($string_idUser,$idUser);
          }
          $appendAdd        = implode(",", $string_idUser);
          $countCheckOne    = count($string_idUser);//up like to number count
        }else{
          $appendAdd        = $idUser;
          $countCheckOne    = 1;
        }
        // unlike or like request
        if ($actionLike == "like") {
          $actionCheck_idUser   = $checkData[0]->comment_unlike;
        }else{
          $actionCheck_idUser   = $checkData[0]->comment_like;
        }
        if($actionCheck_idUser != ''){
          $action_idUser  = explode(',', $actionCheck_idUser);
          // check user like exist
          if (($key1 = array_search($idUser, $action_idUser)) !== false) {
              unset($action_idUser[$key1]);
          }
          $appendReject       = implode(",", $action_idUser);
          $countCheckTwo      = count($action_idUser);//up like to number count
        }else{
          $appendReject       = '';
          $countCheckTwo      = 0;
        }
        // check return data FE
        if ($actionLike == "like") {
          $likeCount['add']     = $countCheckOne;
          $likeCount['reject']  = $countCheckTwo;
          $actionCheck          = 'unlike';
        }else{
          $likeCount['add']     = $countCheckTwo;
          $likeCount['reject']  = $countCheckOne;
          $actionCheck          = 'like';
        }
        // update sql
        $sql_update = "UPDATE ".$wpdb->prefix."comments SET comment_".$actionLike." = '".$appendAdd."', comment_".$actionCheck." = '".$appendReject."' WHERE comment_ID = ".$idComment;
          // update sql
        $result_update = $wpdb->query($wpdb->prepare($sql_update));
        if ($result_update) {
          $returnLike = $likeCount;
        }
      }else{
        // Error not data;
      }
    }
  }else{
    $returnLike = false;
  }
  // Demo return
  wp_send_json($returnLike);
  exit;
  die;
}
// action write a review
add_action('wp_ajax_actionWriteReview', 'dtheme_actionWriteReview_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_actionWriteReview', 'dtheme_actionWriteReview_ajax_handler'); // wp_ajax_nopriv_{action}
function dtheme_actionWriteReview_ajax_handler() {
  // Check verify
  // bbs_check_verify_nonce($_POST['security']);
  // check user login
  if ( is_user_logged_in() ) {
    $return = true;
  }else{
    $return = false;
  }
  // Demo return
  wp_send_json($return);
  exit;
  die;
}
// action click view
add_action('wp_ajax_actionClickView', 'dtheme_actionClickView_ajax_handler'); // wp_ajax_{action}
add_action('wp_ajax_nopriv_actionClickView', 'dtheme_actionClickView_ajax_handler'); // wp_ajax_nopriv_{action}
function dtheme_actionClickView_ajax_handler() {
  // Check verify
  // bbs_check_verify_nonce($_POST['security']);
  $idPost   = isset($_POST['data']) ? $_POST['data'] : '';
  $return   = false;
  // Demo return
  if ($idPost != '') {
      global $post;
      $args = array(
        'p'           => $idPost, // ID of a page, post, or custom type
        'post_type'   => 'product'
      );
      $loop = new WP_Query( $args );
      $loop->have_posts();
      $loop->the_post(); 
      $return = wc_get_template_part( 'content', 'popup-product' );
      wp_reset_query();
  }
  wp_send_json($return);
  
  exit;
  die;
}