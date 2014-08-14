<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

// --- Get extension configuration ---
$extConf = array();
if ( strlen($_EXTCONF) ) {
	$extConf = unserialize($_EXTCONF);
}


// --- Icon font key/name --
$iconFont = $extConf['iconFont'];


// --- Load array with icons --
//

if ( $iconFont == 'custom' ) {
	if ( file_exists(PATH_site . $extConf['customIconDefinitionFile']) ) {
		include(PATH_site . $extConf['customIconDefinitionFile']);
        }
} else {
	// Load default icon font specific select array
	if ( file_exists(PATH_site . 'typo3conf/ext/iconfont/ext_tables_' . $iconFont . '.php') ) {
		include(PATH_site . 'typo3conf/ext/iconfont/ext_tables_' . $iconFont . '.php');
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
// show icons in select options
$tempColumn['tx_iconfont_icon']['config']['iconsInOptionTags'] = 1;
// don't show icons below select box
$tempColumn['tx_iconfont_icon']['config']['suppress_icons'] = 'ONLY_SELECTED';
// add after header_layout
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumn, 1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'header', 'tx_iconfont_icon', 'after:header_layout');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'headers', 'tx_iconfont_icon', 'after:header_layout');


// --- Add static ts configurations  --
//
switch ( $iconFont ) {
	case 'fontawesome':
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
plugin.tx_iconfont {
    fontClassPrefix = fa fa-
    fontClassAddon =
}');
		break;
	case 'fontello':
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
plugin.tx_iconfont {
    fontClassPrefix = icon-
    fontClassAddon =
}');
		break;
}
