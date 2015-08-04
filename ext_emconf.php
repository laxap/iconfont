<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "iconfont".
 *
 * Auto generated 03-08-2015 22:30
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Icon font',
	'description' => 'Support for fontawesome or fontello icon font. Allows to show an icon besides headers and to add icons via RTE. RTE feature based on code from ext:fontawesome.',
	'category' => 'misc',
	'version' => '0.6.3',
	'state' => 'beta',
	'uploadfolder' => false,
	'createDirs' => '',
	'clearcacheonload' => true,
	'author' => 'Pascal Mayer',
	'author_email' => 'typo3@bsdist.ch',
	'author_company' => '',
	'constraints' => 
	array (
		'depends' => 
		array (
			'typo3' => '6.2.0-6.2.99',
		),
		'conflicts' => 
		array (
			'fontawesome' => '',
		),
		'suggests' => 
		array (
		),
	),
);

