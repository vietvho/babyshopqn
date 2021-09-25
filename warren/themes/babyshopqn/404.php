<?php get_header(); ?>
<div class="page404area">
<div class="bbs2-container">
	<div class="row">
	      <div class="d_col">
	         <div class="page404area__logo"><img src="<?= THEME_CHILD_URI ?>/assets/img/about-1571979483591.png" alt="about"></div>
	      </div>
	</div>
	<div class="row">
	      <div class="d_col">
	         <div>
	            <h1 class="page404area__title"><?= __('Không tìm thấy trang!', 'bbs') ?></h1>
	            <div class="page404area__description">
	               <p><?= __('Chúng tôi có thể dường như tìm thấy trang mà bạn đang tìm kiếm.', 'bbs') ?>
	               <?=  __('URL có thể bị sai chính tả hoặc trang bạn đang tìm kiếm không còn khả dụng.', 'bbs') ?></p>
	               <p><?=  __('Bạn có thể vào liên kết gợi ý dưới đây:', 'bbs') ?></p>
	            </div>
               <div>
               	<a href="<?= HOME_URX ?>" class="_btndefault"><?=  __('Trang chủ', 'bbs'); ?></a>
               	<a href="<?= HOME_URX ?>/BabyshopQN" class="_btndefault"><?=  __('Về BabyshopQN', 'bbs'); ?></a>
               </div>

	        </div>
	     </div>
	</div>
</div>
</div>
<?php 
// $shiping = new bbsShip();
// // $shiping->calculate_ghtk_fee();
// $shiping->create_ghtk_order();

?>
<?php get_footer(); ?>