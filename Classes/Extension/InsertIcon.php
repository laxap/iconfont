<?php
namespace Laxap\Iconfont\Extension;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Rtehtmlarea\RteHtmlAreaApi;
use TYPO3\CMS\Core\Utility\VersionNumberUtility;

/**
 * Insert Icon plugin for htmlArea RTE
 *
 */
class InsertIcon extends RteHtmlAreaApi {

	// The key of the extension that is extending htmlArea RTE
	protected $extensionKey = 'iconfont';

	// The name of the plugin registered by the extension
	protected $pluginName = 'InsertIcon';

	protected $pluginButtons = 'fonticon';

	protected $convertToolbarForHtmlAreaArray = array(
		'fonticon' => 'InsertIcon'
	);

	// --- T3 6.x ---
	// Path to this main locallang file of the extension relative to the extension dir.
	protected $relativePathToLocallangFile = '';
	// Path to the skin (css) file relative to the extension dir.
	protected $relativePathToSkin = 'extensions/InsertIcon/skin/htmlarea.css';
	// Reference to the invoking object
	protected $htmlAreaRTE;
	// Reference to RTE PageTSConfig
	protected $thisConfig;
	// Reference to RTE toolbar array
	protected $toolbar;
	// Frontend language array
	protected $LOCAL_LANG;

	/**
	 * Return JS configuration of the htmlArea plugins registered by the extension
	 *
	 * @param  integer	$RTEcounter		Relative id of the RTE editing area in the form
	 * @return string					JS configuration for registered plugins
	 */
	public function buildJavascriptConfiguration($RTEcounter = 0) {
		if ( VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) >= 7000000 ) {
			return parent::buildJavascriptConfiguration($RTEcounter);
		}
		return '';
	}

}
