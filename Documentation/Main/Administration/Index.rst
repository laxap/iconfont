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

- Include the static template. **Version 0.9.0+ supports only fluid_styled_content!** lib.fluidContent.partialRootPaths.10 will be set to overwrite the Header partials.

|img-includestatic|



Displaying icons in the Rich Text Editor
----------------------------------------

The font icon CSS file is added to RTE.default.contentCSS.

.. code-block:: typoscript

   RTE.default.contentCSS >
   RTE.default.contentCSS.default = typo3/sysext/rtehtmlarea/res/contentcss/default.css
   RTE.default.contentCSS.iconfont = typo3conf/ext/iconfont/Resources/Public/Lib/font-awesome/css/font-awesome.min.css

If the icons are not displayed in the RTE please check RTE.default.contentCSS and verify that the CSS of the icon font is loaded.



Use of a custom iconfont
------------------------

- In the extension configuration you may switch to a custom font. For RTE support you will have to create a new custom iconfont extension.

|img-extconf|


- See example extension ext:iconfont_fontello

|img-extconfcustom|

