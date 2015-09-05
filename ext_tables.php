<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

$iconFont = 'fontawesome';
$customIconDefFile = '';
$iconFontOption = array(array('', 0));


// --- Get extension configuration ---
$extConf = array();
if ( strlen($_EXTCONF) ) {
	$extConf = unserialize($_EXTCONF);
	$iconFont = $extConf['iconFont'];
	$customIconDefFile = $extConf['customIconDefinitionFile'];
}


// --- Load array with icons --
//
if ( $iconFont == 'custom' && $customIconDefFile ) {
	if ( file_exists(PATH_site . $customIconDefFile) ) {
		include(PATH_site . $customIconDefFile);
	}
} else {
	// Load default icon font specific select array
	if ( file_exists(PATH_site . 'typo3conf/ext/iconfont/ext_tables_' . $iconFont . '.php') ) {
		include(PATH_site . 'typo3conf/ext/iconfont/ext_tables_' . $iconFont . '.php');
	}

	// Add CSS for icon in RTE
	if (TYPO3_MODE == "BE")   {
		if ( TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) >= 7000000 ) {
			$TBE_STYLES['inDocStyles_TBEstyle'] .= '@import "/typo3conf/ext/iconfont/Resources/Public/Css/htmlarea.min.css";';
		}
	}
}

// --- Add field --
//
$tempColumn = array(
	'tx_iconfont_icon' => array (
		'exclude' => 0,
		'label' => 'LLL:EXT:iconfont/Resources/Private/Language/locallang_db.xlf:tt_content.tx_iconfont_icon',
		'config' => array (
			'type' => 'select',
			'default' => '0',
			'size' => 1,
			'maxitems' => 1,
			'items' => $iconFontOption
		)
	)
);
if ( $iconFont == 'fontawesome' ) {
	// show icons in select options
	$tempColumn['tx_iconfont_icon']['config']['iconsInOptionTags'] = 1;
}
// don't show icons below select box
$tempColumn['tx_iconfont_icon']['config']['suppress_icons'] = 1;
// add after header_layout
ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumn, 1);
ExtensionManagementUtility::addFieldsToPalette('tt_content', 'header', 'tx_iconfont_icon', 'after:header_layout');
ExtensionManagementUtility::addFieldsToPalette('tt_content', 'headers', 'tx_iconfont_icon', 'after:header_layout');


// --- Typoscript Constants and page TSconfig  --
//
switch ( $iconFont ) {
	case 'fontello':
		$fontCssFile = 'typo3conf/ext/iconfont/Resources/Public/Lib/fontello/css/fontello.min.css';
		$contentCssFile = 'typo3conf/ext/iconfont/Resources/Public/Css/rte/fontello.css'; # for older versions
		$fontClassPrefix = 'icon-';
		$fontClassAddon = '';
		break;

	case 'custom':
		$fontCssFile = '';
		$contentCssFile = '';
		$fontClassPrefix = '';
		$fontClassAddon = '';
		break;

	default:
		$fontCssFile = 'typo3conf/ext/iconfont/Resources/Public/Lib/font-awesome/css/font-awesome.min.css';
		$contentCssFile = 'typo3conf/ext/iconfont/Resources/Public/Css/rte/font-awesome.css'; # for older versions
		$fontClassPrefix = 'fa fa-';
		$fontClassAddon = '';
		break;
}

// TypoScript constants
ExtensionManagementUtility::addTypoScriptConstants('
plugin.tx_iconfont {
    # cat=tx_iconfont/base/010; type=string; label=Path to icon font css file
    cssFile = ' . $fontCssFile . '
    # cat=tx_iconfont/base/011; type=string; label=Icon font class prefix
    fontClassPrefix = ' . $fontClassPrefix . '
    # cat=tx_iconfont/base/012; type=string; label=Icon font class addon
    fontClassAddon = ' . $fontClassAddon . '
}');

// Page TSconfig
if ( $iconFont != 'custom' ) {

	// Supports multiple contentCSS files
	if ( TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) >= 7000000 ) {
		ExtensionManagementUtility::addPageTSConfig('
RTE.default.contentCSS >
RTE.default.contentCSS.default = typo3/sysext/rtehtmlarea/res/contentcss/default.css
RTE.default.contentCSS.iconfont = ' . $fontCssFile . '
');
	} else {
		ExtensionManagementUtility::addPageTSConfig('
RTE.default.contentCSS = ' . $contentCssFile . '
');
	}

}

// Default TS for iconfont
ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Icon Font');

// Optional for modified header (option in bootstrap_core to have subheader in header tag)
if ( isset($extConf['enableHeaderRenderingOption']) && $extConf['enableHeaderRenderingOption'] ) {
	ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Header', 'Subheader in header (addon)');
}
