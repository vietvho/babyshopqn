<?php 
// Template Name: Brand Story
?>
<?php get_header() ?>
<main>
<div class="brand-story">
<?php 
if ( have_rows( 'banner' ) ) : ?>
<?php while ( have_rows( 'banner' ) ) : the_row(); ?>
	<?php $image = get_sub_field( 'image' ); ?>
	<div class="brand-hero" >
		<div class="_text">
			<h1 class="caption"><?php the_sub_field( 'title' ); ?></h1>
			<div class="description text-center"><?php the_sub_field( 'description' ); ?></div>
		</div>
		<?php if ( $image ) { ?>
			<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="_img_bg" />
		<?php } else { ?>
			<img src="<?php echo THEME_CHILD_URI ?>/assets/img/banner-12.jpg" alt="Banner" class="_img_bg" />
		<?php } ?>
	</div>	
<?php endwhile; ?>
<?php endif; ?>
<div class="container">
<!-- 
<div class="row section sec1" >
   <div class="col-md-6 story center" style="order: 2">
		<div class="_inner">
			 <h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
			 <div class="description">Integer vulputate odio eget enim fermentum venenatis. Nullam blandit laoreet velit, a consequat turpis pretium non. Sed orci odio, euismod at rutrum ac, vestibulum sit amet arcu. Ut vitae iaculis libero. Nam dui ante, dignissim id porttitor eu, sodales in enim. Sed nec egestas nibh. Vivamus iaculis et urna in ullamcorper.</div>
		</div>
   </div>
   <div class="col-md-6 order-left">
      <div class="story-img" >
		<img src="<?php echo THEME_CHILD_URI ?>/assets/img/signup-right.70c50ec5.jpg" alt="signup" class="_img_bg" />
      </div>
   </div>
</div> -->
<?php if ( have_rows( 'section' ) ) : ?>
	<?php while ( have_rows( 'section' ) ) : the_row(); ?>
		<?php if ( get_sub_field( 'is_show' ) != 1 ) continue;  ?>
		<div class="row section sec1" >
		   <div class="col-md-6 story center" style="order: 2">
				<div class="_inner">
					 <h2 class="title"><?php the_sub_field( 'title' ); ?></h2>
					 <div class="description"><?php the_sub_field( 'description' ); ?></div>
					<?php $url_bai_viet_lien_ket = get_sub_field( 'bai_viet_lien_ket' ); ?>
					<?php if ( $url_bai_viet_lien_ket ): ?>
					<a href="<?php echo $url_bai_viet_lien_ket; ?>" class="_baivietlienket" >Xem thêm</a>
					<?php endif; ?>
				</div>
		   </div>
		   <div class="col-md-6 <?php if ( get_sub_field( 'is_right' ) == 1 ) { echo 'order-right'; } else { echo 'order-left'; } ?>">
		      <div class="story-img" >

				<?php $image = get_sub_field( 'image' ); ?>
				<?php if ( $image ) { ?>
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="_img_bg" />
				<?php } else { ?>
					<img src="<?php echo THEME_CHILD_URI ?>/assets/img/signup-right.70c50ec5.jpg" alt="signup" class="_img_bg" />
				<?php } ?>
		      </div>
		   </div>
		</div>

		
		
	<?php endwhile; ?>
<?php else : ?>
	<?php // no rows found ?>
<?php endif; ?>

</div>
<div class="container">
	<?php if ( have_rows( 'section_3' ) ) : ?>
		<div class="row section_auto">
		<?php while ( have_rows( 'section_3' ) ) : the_row();
			$_col = 12;
			switch (get_sub_field( 'column_option' )) {
				case '2-2':
					$_col = 6;
					break;
				case '3-3':
					$_col = 4;
					break;
				case '4-4':
					$_col = 3;
					break;

				default:
					# code...
					break;
			}

		 ?>
		<?php if ( get_sub_field( 'is_placeholder' ) == 1 ) { ?>
		 	<div class="col-md-<?php echo $_col; ?> _this_placeholder">
		 		<div class="_outer">
				<?php $image = get_sub_field( 'image' ); ?>
				<?php if ( $image ) { ?>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="_img_bg" />
				<?php } ?>
				<div class="_outercontent">
					<?php $title = get_sub_field( 'title' ); ?>
					<?php if($title) { ?>
						<div class="_title">
							<?php the_sub_field( 'title' ); ?>
						</div>
					<?php } ?>
					<?php $content = get_sub_field( 'content' ); ?>
					<?php if($content) { ?>
						<div class="_content">
							<?php the_sub_field( 'content' ); ?>
						</div>
					<?php } ?>
					<?php $url_bai_viet_lien_ket = get_sub_field( 'bai_viet_lien_ket' ); ?>
					<?php if ( $url_bai_viet_lien_ket ): ?>
					<a href="<?php echo $url_bai_viet_lien_ket; ?>" class="_baivietlienket" >Xem thêm</a>
					<?php endif; ?>
				</div>
				</div>
			</div>
		<?php } else { ?>
		 	<div class="col-md-<?php echo $_col; ?> <?php echo (get_sub_field( 'is_center' ) == 1) ? "_center_block" : "";  ?>" >
				<?php $title = get_sub_field( 'title' ); ?>
				<?php $content = get_sub_field( 'content' ); ?>
				<?php $image = get_sub_field( 'image' ); ?>
				<?php if ( $image ) { ?>
				<div class="_image <?php echo (empty($title) && empty($content)) ? 'marg0' : '' ?>">
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				</div>
				<?php } ?>
				<div class="_outercontent">
					<?php $title = get_sub_field( 'title' ); ?>
					<?php if($title) { ?>
						<div class="_title">
							<?php the_sub_field( 'title' ); ?>
						</div>
					<?php } ?>
					<?php $content = get_sub_field( 'content' ); ?>
					<?php if($content) { ?>
						<div class="_content">
							<?php the_sub_field( 'content' ); ?>
						</div>
					<?php } ?>
					
					<?php $url_bai_viet_lien_ket = get_sub_field( 'bai_viet_lien_ket' ); ?>
					<?php if ( $url_bai_viet_lien_ket ): ?>
					<a href="<?php echo $url_bai_viet_lien_ket; ?>" class="_baivietlienket" >Xem thêm</a>
					<?php endif; ?>
				</div>
			</div>
		<?php } ?>
			
		<?php endwhile; ?>
		</div>
	<?php else : ?>
		<?php // no rows found ?>
	<?php endif; ?>
</div>
</div>
</main>
<?php get_footer();