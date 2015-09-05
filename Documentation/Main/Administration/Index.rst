.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


Administration Manual
=====================


Installation
------------

- Install the extension.

- In the extension configuration select the iconfont - fontawesome or fontello.

|img-extconf|



- Include the static template.

|img-includestatic|



Displaying icons in the Rich Text Editor
----------------------------------------

Since version 0.7.1 the font icon CSS file is added to RTE.default.contentCSS.

TYPO3 6.2 supports only one css file. An additional css file is used to load the default rte css and the icon font css.

.. code-block:: typoscript

   RTE.default.contentCSS = typo3conf/ext/iconfont/Resources/Public/Css/rte/font-awesome.css

|img-contentcss|

TYPO3 7.2 supports multiple css. The setting applied by this extension is:

.. code-block:: typoscript

   RTE.default.contentCSS >
   RTE.default.contentCSS.default = typo3/sysext/rtehtmlarea/res/contentcss/default.css
   RTE.default.contentCSS.iconfont = typo3conf/ext/iconfont/Resources/Public/Lib/font-awesome/css/font-awesome.min.css

If the icons are not displayed in the RTE please check RTE.default.contentCSS and verify that the CSS of the icon font is loaded.
