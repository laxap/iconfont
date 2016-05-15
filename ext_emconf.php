<?php

/***************************************************************
 * Extension Manager/Repository config file for ext: "iconfont"
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Icon font',
	'description' => 'Support for fontawesome or a custom icon font. Allows to show an icon besides headers and to add icons via RTE. RTE feature based on code from ext:fontawesome.',
	'category' => 'misc',
	'author' => 'Pascal Mayer',
	'author_email' => 'typo3@bsdist.ch',
	'author_company' => '',
	'state' => 'beta',
	'shy' => '',
	'priority' => '',
	'module' => '',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'modify_tables' => 'tt_content,pages',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'version' => '0.9.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '7.6.0-7.6.99',
		),
		'conflicts' => array(
			'fontawesome' => '',
		),
	),
);

?>