<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

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
if ( $iconFont == 'custom' ) {
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
// show icons in select options
//$tempColumn['tx_iconfont_icon']['config']['iconsInOptionTags'] = 1;
// don't show icons below select box
$tempColumn['tx_iconfont_icon']['config']['suppress_icons'] = 'ONLY_SELECTED';
// add after header_layout
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumn, 1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'header', 'tx_iconfont_icon', 'after:header_layout');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'headers', 'tx_iconfont_icon', 'after:header_layout');


// --- Add static ts configurations  --
//
switch ( $iconFont ) {
	case 'fontello':
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
plugin.tx_iconfont {
    # cat=tx_iconfont/base/010; type=string; label=Path to icon font css file
    cssFile = fileadmin/templates/fontello/css/fontello.css
    # cat=tx_iconfont/base/011; type=string; label=Icon font class prefix
    fontClassPrefix = icon-
    # cat=tx_iconfont/base/012; type=string; label=Icon font class addon
    fontClassAddon =
}');
		break;

	default:
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
plugin.tx_iconfont {
    # cat=tx_iconfont/base/010; type=string; label=Path to icon font css file
    cssFile = https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css
    # cat=tx_iconfont/base/011; type=string; label=Icon font class prefix
    fontClassPrefix = fa fa-
    # cat=tx_iconfont/base/012; type=string; label=Icon font class addon
    fontClassAddon =
}');
		break;
}

// Default TS for iconfont
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Icon Font');

// Optional for modified header (option in bootstrap_core to have subheader in header tag)
if ( isset($extConf['enableHeaderRenderingOption']) && $extConf['enableHeaderRenderingOption'] ) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Header', 'Subheader in header (addon)');
}
