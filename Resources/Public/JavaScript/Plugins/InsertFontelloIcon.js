/*
 *
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *
 */

/**
 * Abbreviation plugin for htmlArea RTE
 */
define('TYPO3/CMS/Rtehtmlarea/Plugins/InsertFontelloIcon',
    ['TYPO3/CMS/Rtehtmlarea/HTMLArea/Plugin/Plugin',
        'TYPO3/CMS/Rtehtmlarea/HTMLArea/Util/Util'],
    function (Plugin, Util) {

        var InsertFontelloIcon = function (editor, pluginName) {
            this.constructor.super.call(this, editor, pluginName);
        };
        Util.inherit(InsertFontelloIcon, Plugin);
        Util.apply(InsertFontelloIcon.prototype, {

            configurePlugin: function (editor) {
                this.pageTSConfiguration = this.editorConfiguration.buttons.fonticon;
                /**
                 * Available iocns
                 */
                this.icons = [
                    main = [
                        { class: 'icon-note-1', title: 'icon-note-1'},
                        { class: 'icon-note-beamed', title: 'icon-note-beamed'},
                        { class: 'icon-music-1', title: 'icon-music-1'},
                        { class: 'icon-search-1', title: 'icon-search-1'},
                        { class: 'icon-flashlight', title: 'icon-flashlight'},
                        { class: 'icon-mail-1', title: 'icon-mail-1'},
                        { class: 'icon-heart-1', title: 'icon-heart-1'},
                        { class: 'icon-heart-empty', title: 'icon-heart-empty'},
                        { class: 'icon-star-1', title: 'icon-star-1'},
                        { class: 'icon-star-empty', title: 'icon-star-empty'},
                        { class: 'icon-user-1', title: 'icon-user-1'},
                        { class: 'icon-users', title: 'icon-users'},
                        { class: 'icon-user-add', title: 'icon-user-add'},
                        { class: 'icon-video', title: 'icon-video'},
                        { class: 'icon-picture', title: 'icon-picture'},
                        { class: 'icon-camera-1', title: 'icon-camera-1'},
                        { class: 'icon-layout', title: 'icon-layout'},
                        { class: 'icon-menu', title: 'icon-menu'},
                        { class: 'icon-check', title: 'icon-check'},
                        { class: 'icon-cancel', title: 'icon-cancel'},
                        { class: 'icon-cancel-circled', title: 'icon-cancel-circled'},
                        { class: 'icon-cancel-squared', title: 'icon-cancel-squared'},
                        { class: 'icon-plus', title: 'icon-plus'},
                        { class: 'icon-plus-circled', title: 'icon-plus-circled'},
                        { class: 'icon-plus-squared', title: 'icon-plus-squared'},
                        { class: 'icon-minus', title: 'icon-minus'},
                        { class: 'icon-minus-circled', title: 'icon-minus-circled'},
                        { class: 'icon-minus-squared', title: 'icon-minus-squared'},
                        { class: 'icon-help', title: 'icon-help'},
                        { class: 'icon-help-circled', title: 'icon-help-circled'},
                        { class: 'icon-info', title: 'icon-info'},
                        { class: 'icon-info-circled', title: 'icon-info-circled'},
                        { class: 'icon-back', title: 'icon-back'},
                        { class: 'icon-home', title: 'icon-home'},
                        { class: 'icon-link', title: 'icon-link'},
                        { class: 'icon-attach-1', title: 'icon-attach-1'},
                        { class: 'icon-lock-1', title: 'icon-lock-1'},
                        { class: 'icon-lock-open', title: 'icon-lock-open'},
                        { class: 'icon-eye-1', title: 'icon-eye-1'},
                        { class: 'icon-tag-1', title: 'icon-tag-1'},
                        { class: 'icon-bookmark', title: 'icon-bookmark'},
                        { class: 'icon-bookmarks', title: 'icon-bookmarks'},
                        { class: 'icon-flag', title: 'icon-flag'},
                        { class: 'icon-thumbs-up-1', title: 'icon-thumbs-up-1'},
                        { class: 'icon-thumbs-down', title: 'icon-thumbs-down'},
                        { class: 'icon-download', title: 'icon-download'},
                        { class: 'icon-upload', title: 'icon-upload'},
                        { class: 'icon-upload-cloud', title: 'icon-upload-cloud'},
                        { class: 'icon-reply', title: 'icon-reply'},
                        { class: 'icon-reply-all', title: 'icon-reply-all'},
                        { class: 'icon-forward', title: 'icon-forward'},
                        { class: 'icon-quote', title: 'icon-quote'},
                        { class: 'icon-code', title: 'icon-code'},
                        { class: 'icon-export', title: 'icon-export'},
                        { class: 'icon-pencil-1', title: 'icon-pencil-1'},
                        { class: 'icon-feather', title: 'icon-feather'},
                        { class: 'icon-print', title: 'icon-print'},
                        { class: 'icon-retweet', title: 'icon-retweet'},
                        { class: 'icon-keyboard', title: 'icon-keyboard'},
                        { class: 'icon-comment-1', title: 'icon-comment-1'},
                        { class: 'icon-chat', title: 'icon-chat'},
                        { class: 'icon-bell', title: 'icon-bell'},
                        { class: 'icon-attention', title: 'icon-attention'},
                        { class: 'icon-alert', title: 'icon-alert'},
                        { class: 'icon-vcard', title: 'icon-vcard'},
                        { class: 'icon-address', title: 'icon-address'},
                        { class: 'icon-location-1', title: 'icon-location-1'},
                        { class: 'icon-map', title: 'icon-map'},
                        { class: 'icon-direction', title: 'icon-direction'},
                        { class: 'icon-compass', title: 'icon-compass'},
                        { class: 'icon-cup-1', title: 'icon-cup-1'},
                        { class: 'icon-trash-1', title: 'icon-trash-1'},
                        { class: 'icon-doc-1', title: 'icon-doc-1'},
                        { class: 'icon-docs', title: 'icon-docs'},
                        { class: 'icon-doc-landscape', title: 'icon-doc-landscape'},
                        { class: 'icon-doc-text', title: 'icon-doc-text'},
                        { class: 'icon-doc-text-inv', title: 'icon-doc-text-inv'},
                        { class: 'icon-newspaper', title: 'icon-newspaper'},
                        { class: 'icon-book-open', title: 'icon-book-open'},
                        { class: 'icon-book', title: 'icon-book'},
                        { class: 'icon-folder', title: 'icon-folder'},
                        { class: 'icon-archive', title: 'icon-archive'},
                        { class: 'icon-box', title: 'icon-box'},
                        { class: 'icon-rss', title: 'icon-rss'},
                        { class: 'icon-phone', title: 'icon-phone'},
                        { class: 'icon-cog-1', title: 'icon-cog-1'},
                        { class: 'icon-tools', title: 'icon-tools'},
                        { class: 'icon-share', title: 'icon-share'},
                        { class: 'icon-shareable', title: 'icon-shareable'},
                        { class: 'icon-basket', title: 'icon-basket'},
                        { class: 'icon-bag', title: 'icon-bag'},
                        { class: 'icon-calendar-1', title: 'icon-calendar-1'},
                        { class: 'icon-login', title: 'icon-login'},
                        { class: 'icon-logout', title: 'icon-logout'},
                        { class: 'icon-mic', title: 'icon-mic'},
                        { class: 'icon-mute', title: 'icon-mute'},
                        { class: 'icon-sound-1', title: 'icon-sound-1'},
                        { class: 'icon-volume', title: 'icon-volume'},
                        { class: 'icon-clock-1', title: 'icon-clock-1'},
                        { class: 'icon-hourglass', title: 'icon-hourglass'},
                        { class: 'icon-lamp', title: 'icon-lamp'},
                        { class: 'icon-light-down', title: 'icon-light-down'},
                        { class: 'icon-light-up', title: 'icon-light-up'},
                        { class: 'icon-adjust', title: 'icon-adjust'},
                        { class: 'icon-block', title: 'icon-block'},
                        { class: 'icon-resize-full', title: 'icon-resize-full'},
                        { class: 'icon-resize-small', title: 'icon-resize-small'},
                        { class: 'icon-popup', title: 'icon-popup'},
                        { class: 'icon-publish', title: 'icon-publish'},
                        { class: 'icon-window', title: 'icon-window'}
                    ],
                    more = [
                        { class: 'icon-arrow-combo', title: 'icon-arrow-combo'},
                        { class: 'icon-down-circled', title: 'icon-down-circled'},
                        { class: 'icon-left-circled', title: 'icon-left-circled'},
                        { class: 'icon-right-circled', title: 'icon-right-circled'},
                        { class: 'icon-up-circled', title: 'icon-up-circled'},
                        { class: 'icon-down-open', title: 'icon-down-open'},
                        { class: 'icon-left-open', title: 'icon-left-open'},
                        { class: 'icon-right-open', title: 'icon-right-open'},
                        { class: 'icon-up-open', title: 'icon-up-open'},
                        { class: 'icon-down-open-mini', title: 'icon-down-open-mini'},
                        { class: 'icon-left-open-mini', title: 'icon-left-open-mini'},
                        { class: 'icon-right-open-mini', title: 'icon-right-open-mini'},
                        { class: 'icon-up-open-mini', title: 'icon-up-open-mini'},
                        { class: 'icon-down-open-big', title: 'icon-down-open-big'},
                        { class: 'icon-left-open-big', title: 'icon-left-open-big'},
                        { class: 'icon-right-open-big', title: 'icon-right-open-big'},
                        { class: 'icon-up-open-big', title: 'icon-up-open-big'},
                        { class: 'icon-down', title: 'icon-down'},
                        { class: 'icon-left', title: 'icon-left'},
                        { class: 'icon-right', title: 'icon-right'},
                        { class: 'icon-up', title: 'icon-up'},
                        { class: 'icon-down-dir', title: 'icon-down-dir'},
                        { class: 'icon-left-dir', title: 'icon-left-dir'},
                        { class: 'icon-right-dir', title: 'icon-right-dir'},
                        { class: 'icon-up-dir', title: 'icon-up-dir'},
                        { class: 'icon-down-bold', title: 'icon-down-bold'},
                        { class: 'icon-left-bold', title: 'icon-left-bold'},
                        { class: 'icon-right-bold', title: 'icon-right-bold'},
                        { class: 'icon-up-bold', title: 'icon-up-bold'},
                        { class: 'icon-down-thin', title: 'icon-down-thin'},
                        { class: 'icon-left-thin', title: 'icon-left-thin'},
                        { class: 'icon-right-thin', title: 'icon-right-thin'},
                        { class: 'icon-up-thin', title: 'icon-up-thin'},
                        { class: 'icon-ccw', title: 'icon-ccw'},
                        { class: 'icon-cw', title: 'icon-cw'},
                        { class: 'icon-arrows-ccw', title: 'icon-arrows-ccw'},
                        { class: 'icon-level-down', title: 'icon-level-down'},
                        { class: 'icon-level-up', title: 'icon-level-up'},
                        { class: 'icon-shuffle', title: 'icon-shuffle'},
                        { class: 'icon-loop', title: 'icon-loop'},
                        { class: 'icon-switch', title: 'icon-switch'},
                        { class: 'icon-play', title: 'icon-play'},
                        { class: 'icon-stop', title: 'icon-stop'},
                        { class: 'icon-pause', title: 'icon-pause'},
                        { class: 'icon-record', title: 'icon-record'},
                        { class: 'icon-to-end', title: 'icon-to-end'},
                        { class: 'icon-to-start', title: 'icon-to-start'},
                        { class: 'icon-fast-forward', title: 'icon-fast-forward'},
                        { class: 'icon-fast-backward', title: 'icon-fast-backward'},
                        { class: 'icon-progress-0', title: 'icon-progress-0'},
                        { class: 'icon-progress-1', title: 'icon-progress-1'},
                        { class: 'icon-progress-2', title: 'icon-progress-2'},
                        { class: 'icon-progress-3', title: 'icon-progress-3'},
                        { class: 'icon-target', title: 'icon-target'},
                        { class: 'icon-palette', title: 'icon-palette'},
                        { class: 'icon-list', title: 'icon-list'},
                        { class: 'icon-list-add', title: 'icon-list-add'},
                        { class: 'icon-signal', title: 'icon-signal'},
                        { class: 'icon-trophy', title: 'icon-trophy'},
                        { class: 'icon-battery', title: 'icon-battery'},
                        { class: 'icon-back-in-time', title: 'icon-back-in-time'},
                        { class: 'icon-monitor', title: 'icon-monitor'},
                        { class: 'icon-mobile-1', title: 'icon-mobile-1'},
                        { class: 'icon-network', title: 'icon-network'},
                        { class: 'icon-cd-1', title: 'icon-cd-1'},
                        { class: 'icon-inbox-1', title: 'icon-inbox-1'},
                        { class: 'icon-install', title: 'icon-install'},
                        { class: 'icon-globe-1', title: 'icon-globe-1'},
                        { class: 'icon-cloud-1', title: 'icon-cloud-1'},
                        { class: 'icon-cloud-thunder', title: 'icon-cloud-thunder'},
                        { class: 'icon-flash', title: 'icon-flash'},
                        { class: 'icon-moon', title: 'icon-moon'},
                        { class: 'icon-flight', title: 'icon-flight'},
                        { class: 'icon-paper-plane-1', title: 'icon-paper-plane-1'},
                        { class: 'icon-leaf', title: 'icon-leaf'},
                        { class: 'icon-lifebuoy', title: 'icon-lifebuoy'},
                        { class: 'icon-mouse', title: 'icon-mouse'},
                        { class: 'icon-briefcase', title: 'icon-briefcase'},
                        { class: 'icon-suitcase', title: 'icon-suitcase'},
                        { class: 'icon-dot', title: 'icon-dot'},
                        { class: 'icon-dot-2', title: 'icon-dot-2'},
                        { class: 'icon-dot-3', title: 'icon-dot-3'},
                        { class: 'icon-brush', title: 'icon-brush'},
                        { class: 'icon-magnet', title: 'icon-magnet'},
                        { class: 'icon-infinity', title: 'icon-infinity'},
                        { class: 'icon-erase', title: 'icon-erase'},
                        { class: 'icon-chart-pie', title: 'icon-chart-pie'},
                        { class: 'icon-chart-line', title: 'icon-chart-line'},
                        { class: 'icon-chart-bar', title: 'icon-chart-bar'},
                        { class: 'icon-chart-area', title: 'icon-chart-area'},
                        { class: 'icon-tape', title: 'icon-tape'},
                        { class: 'icon-graduation-cap-1', title: 'icon-graduation-cap-1'},
                        { class: 'icon-language', title: 'icon-language'},
                        { class: 'icon-ticket', title: 'icon-ticket'},
                        { class: 'icon-water', title: 'icon-water'},
                        { class: 'icon-droplet', title: 'icon-droplet'},
                        { class: 'icon-air', title: 'icon-air'},
                        { class: 'icon-credit-card', title: 'icon-credit-card'},
                        { class: 'icon-floppy', title: 'icon-floppy'},
                        { class: 'icon-clipboard', title: 'icon-clipboard'},
                        { class: 'icon-megaphone-1', title: 'icon-megaphone-1'},
                        { class: 'icon-database-1', title: 'icon-database-1'},
                        { class: 'icon-drive', title: 'icon-drive'},
                        { class: 'icon-bucket', title: 'icon-bucket'},
                        { class: 'icon-thermometer', title: 'icon-thermometer'},
                        { class: 'icon-key-1', title: 'icon-key-1'},
                        { class: 'icon-flow-cascade', title: 'icon-flow-cascade'},
                        { class: 'icon-flow-branch', title: 'icon-flow-branch'},
                        { class: 'icon-flow-tree', title: 'icon-flow-tree'},
                        { class: 'icon-flow-line', title: 'icon-flow-line'},
                        { class: 'icon-flow-parallel', title: 'icon-flow-parallel'},
                        { class: 'icon-rocket', title: 'icon-rocket'},
                        { class: 'icon-gauge', title: 'icon-gauge'},
                        { class: 'icon-traffic-cone', title: 'icon-traffic-cone'},
                        { class: 'icon-cc', title: 'icon-cc'},
                        { class: 'icon-cc-by', title: 'icon-cc-by'},
                        { class: 'icon-cc-nc', title: 'icon-cc-nc'},
                        { class: 'icon-cc-nc-eu', title: 'icon-cc-nc-eu'},
                        { class: 'icon-cc-nc-jp', title: 'icon-cc-nc-jp'},
                        { class: 'icon-cc-sa', title: 'icon-cc-sa'},
                        { class: 'icon-cc-nd', title: 'icon-cc-nd'},
                        { class: 'icon-cc-pd', title: 'icon-cc-pd'},
                        { class: 'icon-cc-zero', title: 'icon-cc-zero'},
                        { class: 'icon-cc-share', title: 'icon-cc-share'},
                        { class: 'icon-cc-remix', title: 'icon-cc-remix'},
                        { class: 'icon-github', title: 'icon-github'},
                        { class: 'icon-github-circled', title: 'icon-github-circled'},
                        { class: 'icon-flickr', title: 'icon-flickr'},
                        { class: 'icon-flickr-circled', title: 'icon-flickr-circled'},
                        { class: 'icon-vimeo', title: 'icon-vimeo'},
                        { class: 'icon-vimeo-circled', title: 'icon-vimeo-circled'},
                        { class: 'icon-twitter', title: 'icon-twitter'},
                        { class: 'icon-twitter-circled', title: 'icon-twitter-circled'},
                        { class: 'icon-facebook', title: 'icon-facebook'},
                        { class: 'icon-facebook-circled', title: 'icon-facebook-circled'},
                        { class: 'icon-facebook-squared', title: 'icon-facebook-squared'},
                        { class: 'icon-gplus', title: 'icon-gplus'},
                        { class: 'icon-gplus-circled', title: 'icon-gplus-circled'},
                        { class: 'icon-pinterest', title: 'icon-pinterest'},
                        { class: 'icon-pinterest-circled', title: 'icon-pinterest-circled'},
                        { class: 'icon-tumblr', title: 'icon-tumblr'},
                        { class: 'icon-tumblr-circled', title: 'icon-tumblr-circled'},
                        { class: 'icon-linkedin', title: 'icon-linkedin'},
                        { class: 'icon-linkedin-circled', title: 'icon-linkedin-circled'},
                        { class: 'icon-dribbble', title: 'icon-dribbble'},
                        { class: 'icon-dribbble-circled', title: 'icon-dribbble-circled'},
                        { class: 'icon-stumbleupon', title: 'icon-stumbleupon'},
                        { class: 'icon-stumbleupon-circled', title: 'icon-stumbleupon-circled'},
                        { class: 'icon-lastfm', title: 'icon-lastfm'},
                        { class: 'icon-lastfm-circled', title: 'icon-lastfm-circled'},
                        { class: 'icon-rdio', title: 'icon-rdio'},
                        { class: 'icon-rdio-circled', title: 'icon-rdio-circled'},
                        { class: 'icon-spotify', title: 'icon-spotify'},
                        { class: 'icon-spotify-circled', title: 'icon-spotify-circled'},
                        { class: 'icon-qq', title: 'icon-qq'},
                        { class: 'icon-instagram', title: 'icon-instagram'},
                        { class: 'icon-dropbox', title: 'icon-dropbox'},
                        { class: 'icon-evernote', title: 'icon-evernote'},
                        { class: 'icon-flattr', title: 'icon-flattr'},
                        { class: 'icon-skype', title: 'icon-skype'},
                        { class: 'icon-skype-circled', title: 'icon-skype-circled'},
                        { class: 'icon-renren', title: 'icon-renren'},
                        { class: 'icon-sina-weibo', title: 'icon-sina-weibo'},
                        { class: 'icon-paypal', title: 'icon-paypal'},
                        { class: 'icon-picasa', title: 'icon-picasa'},
                        { class: 'icon-soundcloud', title: 'icon-soundcloud'},
                        { class: 'icon-mixi', title: 'icon-mixi'},
                        { class: 'icon-behance', title: 'icon-behance'},
                        { class: 'icon-google-circles', title: 'icon-google-circles'},
                        { class: 'icon-vkontakte', title: 'icon-vkontakte'},
                        { class: 'icon-smashing', title: 'icon-smashing'},
                        { class: 'icon-sweden', title: 'icon-sweden'},
                        { class: 'icon-db-shape', title: 'icon-db-shape'},
                        { class: 'icon-logo-db', title: 'icon-logo-db'}
                    ]
                ];

                /**
                 * Registering plugin "About" information
                 */
                var pluginInformation = {
                    version: '2.0',
                    developer: 'Pascal Mayer',
                    developerUrl: '',
                    copyrightOwner: '',
                    sponsor: '',
                    sponsorUrl: '',
                    license: 'GPL'
                };
                this.registerPluginInformation(pluginInformation);

                /**
                 * Registering the button
                 */
                var buttonId = 'InsertFontelloIcon';
                var buttonConfiguration = {
                    id: buttonId,
                    tooltip: this.localize('fontello'),
                    action: 'onButtonPress',
                    dialog: true,
                    iconCls: 'htmlarea-action-iconfont-icon-insert',
                    hotKey: (this.pageTSConfiguration ? this.pageTSConfiguration.hotKey : null)
                };
                this.registerButton(buttonConfiguration);
                return true;
            },

            /**
             * This function gets called when the button was pressed
             *
             * @param editor
             * @param id
             * @return boolean false if action is completed
             */
            onButtonPress: function (editor, id) {
                var buttonId = this.translateHotKey(id);
                buttonId = buttonId ? buttonId : id;
                this.openDialogue(
                    'fontello',
                    buttonId,
                    this.getWindowDimensions({width: 750, height: 500}, buttonId),
                    this.buildTabs()
                );
                return false;
            },

            /**
             * Open the dialogue window
             *
             * @param title the window title
             * @param buttonId the itemId of the button that was pressed
             * @param dimensions the opening width of the window
             * @param tabItems the configuration of the tabbed panel
             * @return void
             */
            openDialogue: function (title, buttonId, dimensions, tabItems) {
                this.dialog = new Ext.Window({
                    title: this.localize(title),
                    cls: 'htmlarea-window',
                    border: false,
                    width: dimensions.width,
                    height: dimensions.height,
                    iconCls: this.getButton(buttonId).iconCls,
                    listeners: {
                        close: {
                            fn: this.onClose,
                            scope: this
                        }
                    },
                    items: {
                        xtype: 'tabpanel',
                        activeTab: 0,
                        autoScroll: true,
                        listeners: {
                            tabchange: {
                                fn: this.syncHeight,
                                scope: this
                            }
                        },
                        items: tabItems
                    },

                    buttons: [
                        this.buildButtonConfig('Cancel', this.onCancel)
                    ]
                });
                this.show();
            },

            /**
             * Build the dialogue tab items config
             *
             * @return object the tab items configuration
             */
            buildTabs: function () {
                var tabItems = [];
                Ext.iterate(this.icons, function (id, map) {
                    tabItems.push({
                        xtype: 'box',
                        cls: 'fontello-array',
                        title: this.localize('fontello.group.' + map),
                        itemId: map,
                        tpl: new Ext.XTemplate(
                            '<link rel="stylesheet" type="text/css" href="../typo3conf/ext/iconfont/Resources/Public/Lib/fontello/css/fontello.min.css" media="all"> ' +
                            '<div>' +
                            '   <tpl for=".">' +
                            '       <a href="#" class="icon" hidefocus="on" ext:class="{class}"  ext:qtip="{title}" title="{title}">' +
                            '           <i class="{class}" style="background: #FFF; line-height: 22px; font-size: 20px; border: 1px solid #CCC; margin: 2px; display: inline-block; width: 22px; height: 22px; text-align: center; vertical-align: middle;" /></i>' +
                            '       </a>' +
                            '   </tpl>' +
                            '</div>'
                        ),
                        listeners: {
                            render: {
                                fn: this.render,
                                scope: this
                            }
                        }
                    });
                }, this);
                return tabItems;
            },

            render: function (component) {
                component.tpl.overwrite(component.el, this.icons[component.itemId]);
                component.mon(component.el, 'click', this.insertITag, this, {delegate: 'a'});
            },

            insertITag: function (event, target) {
                event.stopEvent();
                this.restoreSelection();
                var iTag = this.editor.document.createElement('i');
                iTag.setAttribute('class', target.getAttribute('ext:class'));
                this.editor.getSelection().insertNode(iTag);
                if (!Ext.isIE) {
                    this.editor.getSelection().selectNode(iTag, false);
                }
                this.close();
                return false;
            },

            resetFocus: function () {
                this.restoreSelection();
            }
        });

        return InsertFontelloIcon;

    });