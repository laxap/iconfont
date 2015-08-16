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



Include font-awesome CSS in RTE contentCSS file
-----------------------------------------------

In your css file for the RTE (RTE.default.contentCSS) the font-awesome.min.css has to be included to display added icons in the rich text editor.

E.g.
@import "/typo3conf/ext/iconfont/Resources/Public/Lib/font-awesome/css/font-awesome.min.css";