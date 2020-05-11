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
	'priority' => '',
	'module' => '',
	'uploadfolder' => false,
	'createDirs' => '',
	'modify_tables' => 'tt_content,pages',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'version' => '0.9.0',
	'constraints' => array(
        'depends' => [
            'typo3' => '8.7.0-8.7.99',
            'backend' => '8.7.0-8.7.99',
            'frontend' => '8.7.0-8.7.99',
            'lang' => '8.7.0-8.7.99',
        ],
		'conflicts' => array(
			'fontawesome' => '',
		),
	),
);

?>