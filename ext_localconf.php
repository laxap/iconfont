<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

// --- Get extension configuration ---
$extConf = array();
if ( strlen($_EXTCONF) ) {
	$extConf = unserialize($_EXTCONF);
}
// default is fontawesome
if ( ! isset($extConf['iconFont']) || trim($extConf['iconFont']) == '' ) {
	$extConf['iconFont'] = 'fontawesome';
}

// --- Fontawesome or custom ---
switch ( $extConf['iconFont'] ) {
	case 'custom':
		$pluginClass = isset($extConf['customRtePluginClass'])?$extConf['customRtePluginClass']:'';
		$fontCssFile = isset($extConf['customFontCssFile'])?$extConf['customFontCssFile']:'';
		break;

	default:
		$pluginClass = 'Laxap\\Iconfont\\Extension\\InsertIcon';
		$fontCssFile = 'typo3conf/ext/iconfont/Resources/Public/Lib/font-awesome/css/font-awesome.min.css';
		break;
}

// --- Add RTE plugin --
//
if ( $pluginClass != '' ) {
	$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon'] = array();
	$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon']['objectReference'] = $pluginClass;
	$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon']['addIconsToSkin'] = 1;
	$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon']['disableInFE'] = 0;
}


// TypoScript constants
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('
plugin.tx_iconfont {
    # cat=tx_iconfont/base/010; type=string; label=Path to icon font css file
    cssFile = ' . $fontCssFile . '
}');


// --- Load default page TSconfig ---
//
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:iconfont/Configuration/TypoScript/tsconfig.ts">');
