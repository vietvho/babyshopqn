<?php 
add_shortcode( 'bds_list', 'bds_list_func' );
function bds_list_func( $atts ) {
    $GLOBALS['bds_iddiv'] = isset($GLOBALS['bds_iddiv']) ? $GLOBALS['bds_iddiv'] + 1 : 0;
    
    ob_start();
?>

<div class="bds_list" 
  data-npost="<?= isset($atts['npost']) ? $atts['npost'] : 8 ?>"
  data-datnen_slug="<?= isset($atts['datnen_slug']) ? $atts['datnen_slug'] : "all" ?>"
  data-bds_id="bds-<?= $GLOBALS['bds_iddiv'] ?>">
  <script>var landPageId = <?php the_ID() ?>;</script>
  <div class='list-item lands'></div>
  <div class="modal-wrapper bds_list__modal bds_modal">
     <div class="modal-body card">
        <div class="modal-header">
           <a href="#!" class="close close-modal" aria-label="close this modal">
              <svg viewBox="0 0 24 24">
                 <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
           </a>
        </div>
        <div class="modal-content">
           <div class="land-modal-content"></div>
        </div>
     </div>
     <a href="#!" class="outside-trigger"></a>
  </div>
</div>
<?php 


    return ob_get_clean();
}