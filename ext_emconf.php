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
            'typo3' => '9.5.0-9.5.99',
            'backend' => '9.5.0-9.5.99',
            'frontend' => '9.5.0-9.5.99'
        ],
		'conflicts' => array(
			'fontawesome' => '',
		),
	),
);

?>