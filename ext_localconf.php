<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

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

// --- Load default page TSconfig ---
//
ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:iconfont/Configuration/TypoScript/tsconfig.ts">');
