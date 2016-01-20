<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

$iconFont = 'fontawesome';
$customIconDefFile = '';
$iconFontOption = array(array('', 0));

// --- Get extension configuration ---
$extConf = array();
if ( strlen($_EXTCONF) ) {
	$extConf = unserialize($_EXTCONF);
}
// default is fontawesome
if ( ! isset($extConf['iconFont']) || trim($extConf['iconFont']) == '' ) {
	$extConf['iconFont'] = 'fontawesome';
}

// --- Add RTE plugin --
//
if ( $extConf['iconFont'] != 'custom' ) {
	if ( $extConf['iconFont'] == 'fontello' ) {
		$pluginName = 'InsertFontelloIcon';
	} else {
		$pluginName = 'InsertIcon';
	}
	$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins'][$pluginName] = array();
	if ( TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) >= 7000000 ) {
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins'][$pluginName]['objectReference'] = 'Laxap\\Iconfont\\Extension\\' . $pluginName;
	} else {
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins'][$pluginName]['objectReference'] = '&Laxap\\Iconfont\\Extension\\' . $pluginName;
	}
	$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins'][$pluginName]['addIconsToSkin'] = 1;
	$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins'][$pluginName]['disableInFE'] = 0;
}

// --- Typoscript Constants and page TSconfig  --
//
switch ( $extConf['iconFont'] ) {
	case 'fontello':
		$fontCssFile = 'typo3conf/ext/iconfont/Resources/Public/Lib/fontello/css/fontello.min.css';
		$contentCssFile = 'typo3conf/ext/iconfont/Resources/Public/Css/rte/fontello.css';
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
		$contentCssFile = 'typo3conf/ext/iconfont/Resources/Public/Css/rte/font-awesome.css';
		$fontClassPrefix = 'fa fa-';
		$fontClassAddon = '';
		break;
}

// TypoScript constants
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
plugin.tx_iconfont {
    # cat=tx_iconfont/base/010; type=string; label=Path to icon font css file
    cssFile = ' . $fontCssFile . '
    # cat=tx_iconfont/base/011; type=string; label=Icon font class prefix
    fontClassPrefix = ' . $fontClassPrefix . '
    # cat=tx_iconfont/base/012; type=string; label=Icon font class addon
    fontClassAddon = ' . $fontClassAddon . '
}');


// --- Load default page TSconfig ---
//
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:iconfont/Configuration/TypoScript/tsconfig.ts">');
