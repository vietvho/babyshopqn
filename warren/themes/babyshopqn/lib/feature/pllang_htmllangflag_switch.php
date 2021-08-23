<?php // outputs a list of languages names ?>
<?php 
// [bbs_feature_pllang__top_currentlang]
add_shortcode( 'bbs_feature_pllang__top_currentlang', 'bbs_feature_pllang__top_currentlang' );
function bbs_feature_pllang__top_currentlang() {
	if(function_exists('pll_the_languages')) {
		$_langslugcurrent =  function_exists('pll_current_language') ? pll_current_language('slug') : 'en';
		$_list = pll_the_languages(array('raw' => 1));
		
		$value = $_list[$_langslugcurrent];
	
		$_urlflagimg = THEME_CHILD_URI . '/assets/img/language_' . $value['slug'] . '.png';
		if(file_exists(THEME_CHILD_DIR . '/assets/img/language_' . $value['slug'] . '.svg')) {
			$_urlflagimg = THEME_CHILD_URI . '/assets/img/language_' . $value['slug'] . '.svg';
		}

		echo '<span class="header--top_language"
			data-popover="mn_popover_language" >
				<img src="' . $_urlflagimg . '" alt="' . $value['name'] . ' language icon">&nbsp;
                <span class="string">' . strtoupper($value['slug']) . '</span>
		</span>';
	
	}
}
add_shortcode( 'bbs_feature_pllang__top_otherlanguage', 'bbs_feature_pllang__top_otherlanguage' );
function bbs_feature_pllang__top_otherlanguage() {
	if(function_exists('pll_the_languages')) {
		$_langslugcurrent =  function_exists('pll_current_language') ? pll_current_language('slug') : 'en';
		$_list = pll_the_languages(array('raw' => 1));
		unset($_list[$_langslugcurrent]);
		foreach ($_list as $key => $value) {
			// set PNG to default
			$_urlflagimg = THEME_CHILD_URI . '/assets/img/language_' . $value['slug'] . '.png';
			if(file_exists(THEME_CHILD_DIR . '/assets/img/language_' . $value['slug'] . '.svg')) {
				// if has SVG in dir then set it
				$_urlflagimg = THEME_CHILD_URI . '/assets/img/language_' . $value['slug'] . '.svg';
			}
			echo '<a href="' . $value['url'] . '" class="top_flaglang" >
					<img src="' . $_urlflagimg . '" alt="' . $value['name'] . ' language icon">&nbsp;
	                <span class="string">' . strtoupper($value['slug']) . '</span>
			</a>';
		}
	}
}