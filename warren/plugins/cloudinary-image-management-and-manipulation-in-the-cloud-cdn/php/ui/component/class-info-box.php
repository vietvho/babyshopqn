<?php
/**
 * Info box UI Component.
 *
 * @package Cloudinary
 */

namespace Cloudinary\UI\Component;

/**
 * Class Component
 *
 * @package Cloudinary\UI
 */
class Info_Box extends Panel {

	/**
	 * Holds the components build blueprint.
	 *
	 * @var string
	 */
	protected $blueprint = 'wrap|icon/|body|title/|text/|/body|link/|/wrap';

	/**
	 * Filter the link parts structure.
	 *
	 * @param array $struct The array structure.
	 *
	 * @return array
	 */
	protected function link( $struct ) {

		$struct['element']             = 'a';
		$struct['content']             = $this->setting->get_param( 'link_text' );
		$struct['attributes']['href']  = esc_url( $this->setting->get_param( 'url' ) );
		$struct['attributes']['class'] = array( 'button' );

		if ( true === $this->setting->get_param( 'blank', true ) ) {
			$struct['attributes']['target'] = '_blank';
			$struct['attributes']['rel']    = 'noreferrer';
		}

		return $struct;
	}

	/**
	 * Filter the wrap parts structure.
	 *
	 * @param array $struct The array structure.
	 *
	 * @return array
	 */
	protected function wrap( $struct ) {
		$struct = parent::wrap( $struct );
		unset( $struct['attributes']['class'][ array_search( 'has-heading', $struct['attributes']['class'] ) ] );

		return $struct;
	}

	/**
	 * Filter the text parts structure.
	 *
	 * @param array $struct The array structure.
	 *
	 * @return array
	 */
	protected function text( $struct ) {

		$struct['element'] = 'p';
		$struct['content'] = $this->setting->get_param( 'text' );

		return $struct;
	}

	/**
	 * Filter the body parts structure.
	 *
	 * @param array $struct The array structure.
	 *
	 * @return array
	 */
	protected function body( $struct ) {

		$struct['element'] = 'div';

		return $struct;
	}

}
