<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

// --- Get extension configuration ---
$extConf = array();
if ( strlen($_EXTCONF) ) {
	$extConf = unserialize($_EXTCONF);
}

// --- Icon font key/name --
$iconFont = $extConf['iconFont'];

// --- Add RTE plugin --
//
switch ( $iconFont ) {
	case 'fontawesome':
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon'] = array();
		if ( TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) >= 7000000 ) {
			$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon']['objectReference'] = 'Laxap\\Iconfont\\Extension\\InsertIcon';
		} else {
			$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon']['objectReference'] = '&Laxap\\Iconfont\\Extension\\InsertIcon';
		}
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon']['addIconsToSkin'] = 1;
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertIcon']['disableInFE'] = 0;
		break;

	case 'fontello':
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertFontelloIcon'] = array();
		if ( TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) >= 7000000 ) {
			$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertFontelloIcon']['objectReference'] = 'Laxap\\Iconfont\\Extension\\InsertFontelloIcon';
		} else {
			$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertFontelloIcon']['objectReference'] = '&Laxap\\Iconfont\\Extension\\InsertFontelloIcon';
		}
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertFontelloIcon']['addIconsToSkin'] = 1;
		$TYPO3_CONF_VARS['EXTCONF']['rtehtmlarea']['plugins']['InsertFontelloIcon']['disableInFE'] = 0;
		break;
}



// --- Load default page TSconfig ---
//
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:iconfont/Configuration/TypoScript/tsconfig.ts">');
