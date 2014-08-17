<?php

/***************************************************************
 * Extension Manager/Repository config file for ext: "iconfont"
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Icon font',
	'description' => 'Support for fontawesome or fontello icon font. Allows to show an icon besides headers and to add icons via RTE. RTE feature based on code from ext:fontawesome.',
	'category' => 'misc',
	'author' => 'Pascal Mayer',
	'author_email' => 'typo3@simple.ch',
	'author_company' => 'simplicity gmbh',
	'shy' => '',
	'version' => '0.5.2',
	'priority' => '',
	'module' => '',
	'state' => 'beta',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'modify_tables' => 'tt_content',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0-6.2.99',
		),
		'conflicts' => array(
			'fontawesome' => '',
		),
	),
);

?>