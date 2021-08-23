<form action="<?php echo get_translate_url('/bo-suu-tap-beautizon');?>" class="searchform" method="get">
    <button><?php echo feature_rendersvg(THEME_CHILD_DIR."/assets/img/search.svg" );?></button>
    <input type="text" name="s" id="search" placeholder="<?php _e('Search','bbs');?>" value="<?php the_search_query(); ?>" />
</form>