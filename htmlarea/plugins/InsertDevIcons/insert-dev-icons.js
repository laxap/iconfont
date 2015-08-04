/***************************************************************
 *  Copyright notice
 *
 *  (c) 2015 Pascal Mayer <typo3(at)bsdist.ch>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *  A copy is found in the text file GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This script is a modified version of a script published under the htmlArea License.
 *  A copy of the htmlArea License may be found in the textfile HTMLAREA_LICENSE.txt.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/
/*
 * Insert Font Icon Plugin for TYPO3 htmlArea RTE
 */
HTMLArea.InsertDevIcons = Ext.extend(HTMLArea.Plugin, {

    configurePlugin: function (editor) {

        this.pageTSConfiguration = this.editorConfiguration.buttons.fonticon;

        this.icons = [
            devicons = [
                { class: 'devicons devicons-git', title: 'git'},
                { class: 'devicons devicons-git_compare', title: 'git_compare'},
                { class: 'devicons devicons-git_branch', title: 'git_branch'},
                { class: 'devicons devicons-git_commit', title: 'git_commit'},
                { class: 'devicons devicons-git_pull_request', title: 'git_pull_request'},
                { class: 'devicons devicons-git_merge', title: 'git_merge'},
                { class: 'devicons devicons-bitbucket', title: 'bitbucket'},
                { class: 'devicons devicons-github_alt', title: 'github_alt'},
                { class: 'devicons devicons-github_badge', title: 'github_badge'},
                { class: 'devicons devicons-github', title: 'github'},
                { class: 'devicons devicons-github_full', title: 'github_full'},
                { class: 'devicons devicons-java', title: 'java'},
                { class: 'devicons devicons-ruby', title: 'ruby'},
                { class: 'devicons devicons-scala', title: 'scala'},
                { class: 'devicons devicons-python', title: 'python'},
                { class: 'devicons devicons-go', title: 'go'},
                { class: 'devicons devicons-ruby_on_rails', title: 'ruby_on_rails'},
                { class: 'devicons devicons-django', title: 'django'},
                { class: 'devicons devicons-markdown', title: 'markdown'},
                { class: 'devicons devicons-php', title: 'php'},
                { class: 'devicons devicons-mysql', title: 'mysql'},
                { class: 'devicons devicons-streamline', title: 'streamline'},
                { class: 'devicons devicons-database', title: 'database'},
                { class: 'devicons devicons-laravel', title: 'laravel'},
                { class: 'devicons devicons-javascript', title: 'javascript'},
                { class: 'devicons devicons-angular', title: 'angular'},
                { class: 'devicons devicons-backbone', title: 'backbone'},
                { class: 'devicons devicons-coffeescript', title: 'coffeescript'},
                { class: 'devicons devicons-jquery', title: 'jquery'},
                { class: 'devicons devicons-modernizr', title: 'modernizr'},
                { class: 'devicons devicons-jquery_ui', title: 'jquery_ui'},
                { class: 'devicons devicons-ember', title: 'ember'},
                { class: 'devicons devicons-dojo', title: 'dojo'},
                { class: 'devicons devicons-nodejs', title: 'nodejs'},
                { class: 'devicons devicons-nodejs_small', title: 'nodejs_small'},
                { class: 'devicons devicons-javascript_shield', title: 'javascript_shield'},
                { class: 'devicons devicons-bootstrap', title: 'bootstrap'},
                { class: 'devicons devicons-sass', title: 'sass'},
                { class: 'devicons devicons-css3_full', title: 'css3_full'},
                { class: 'devicons devicons-css3', title: 'css3'},
                { class: 'devicons devicons-html5', title: 'html5'},
                { class: 'devicons devicons-html5_multimedia', title: 'html5_multimedia'},
                { class: 'devicons devicons-html5_device_access', title: 'html5_device_access'},
                { class: 'devicons devicons-html5_3d_effects', title: 'html5_3d_effects'},
                { class: 'devicons devicons-html5_connectivity', title: 'html5_connectivity'},
                { class: 'devicons devicons-ghost_small', title: 'ghost_small'},
                { class: 'devicons devicons-ghost', title: 'ghost'},
                { class: 'devicons devicons-magento', title: 'magento'},
                { class: 'devicons devicons-joomla', title: 'joomla'},
                { class: 'devicons devicons-jekyll_small', title: 'jekyll_small'},
                { class: 'devicons devicons-drupal', title: 'drupal'},
                { class: 'devicons devicons-wordpress', title: 'wordpress'},
                { class: 'devicons devicons-grunt', title: 'grunt'},
                { class: 'devicons devicons-bower', title: 'bower'},
                { class: 'devicons devicons-npm', title: 'npm'},
                { class: 'devicons devicons-yahoo_small', title: 'yahoo_small'},
                { class: 'devicons devicons-yahoo', title: 'yahoo'},
                { class: 'devicons devicons-bing_small', title: 'bing_small'},
                { class: 'devicons devicons-windows', title: 'windows'},
                { class: 'devicons devicons-linux', title: 'linux'},
                { class: 'devicons devicons-ubuntu', title: 'ubuntu'},
                { class: 'devicons devicons-android', title: 'android'},
                { class: 'devicons devicons-apple', title: 'apple'},
                { class: 'devicons devicons-appstore', title: 'appstore'},
                { class: 'devicons devicons-phonegap', title: 'phonegap'},
                { class: 'devicons devicons-blackberry', title: 'blackberry'},
                { class: 'devicons devicons-stackoverflow', title: 'stackoverflow'},
                { class: 'devicons devicons-techcrunch', title: 'techcrunch'},
                { class: 'devicons devicons-codrops', title: 'codrops'},
                { class: 'devicons devicons-css_tricks', title: 'css_tricks'},
                { class: 'devicons devicons-smashing_magazine', title: 'smashing_magazine'},
                { class: 'devicons devicons-netmagazine', title: 'netmagazine'},
                { class: 'devicons devicons-codepen', title: 'codepen'},
                { class: 'devicons devicons-cssdeck', title: 'cssdeck'},
                { class: 'devicons devicons-hackernews', title: 'hackernews'},
                { class: 'devicons devicons-dropbox', title: 'dropbox'},
                { class: 'devicons devicons-google_drive', title: 'google_drive'},
                { class: 'devicons devicons-visualstudio', title: 'visualstudio'},
                { class: 'devicons devicons-unity_small', title: 'unity_small'},
                { class: 'devicons devicons-raspberry_pi', title: 'raspberry_pi'},
                { class: 'devicons devicons-chrome', title: 'chrome'},
                { class: 'devicons devicons-ie', title: 'ie'},
                { class: 'devicons devicons-firefox', title: 'firefox'},
                { class: 'devicons devicons-opera', title: 'opera'},
                { class: 'devicons devicons-safari', title: 'safari'},
                { class: 'devicons devicons-swift', title: 'swift'},
                { class: 'devicons devicons-symfony', title: 'symfony'},
                { class: 'devicons devicons-symfony_badge', title: 'symfony_badge'},
                { class: 'devicons devicons-less', title: 'less'},
                { class: 'devicons devicons-stylus', title: 'stylus'},
                { class: 'devicons devicons-trello', title: 'trello'},
                { class: 'devicons devicons-atlassian', title: 'atlassian'},
                { class: 'devicons devicons-jira', title: 'jira'},
                { class: 'devicons devicons-envato', title: 'envato'},
                { class: 'devicons devicons-snap_svg', title: 'snap_svg'},
                { class: 'devicons devicons-raphael', title: 'raphael'},
                { class: 'devicons devicons-google_analytics', title: 'google_analytics'},
                { class: 'devicons devicons-compass', title: 'compass'},
                { class: 'devicons devicons-onedrive', title: 'onedrive'},
                { class: 'devicons devicons-gulp', title: 'gulp'},
                { class: 'devicons devicons-atom', title: 'atom'},
                { class: 'devicons devicons-cisco', title: 'cisco'},
                { class: 'devicons devicons-nancy', title: 'nancy'},
                { class: 'devicons devicons-clojure', title: 'clojure'},
                { class: 'devicons devicons-clojure_alt', title: 'clojure_alt'},
                { class: 'devicons devicons-perl', title: 'perl'},
                { class: 'devicons devicons-celluloid', title: 'celluloid'},
                { class: 'devicons devicons-w3c', title: 'w3c'},
                { class: 'devicons devicons-redis', title: 'redis'},
                { class: 'devicons devicons-postgresql', title: 'postgresql'},
                { class: 'devicons devicons-webplatform', title: 'webplatform'},
                { class: 'devicons devicons-jenkins', title: 'jenkins'},
                { class: 'devicons devicons-requirejs', title: 'requirejs'},
                { class: 'devicons devicons-opensource', title: 'opensource'},
                { class: 'devicons devicons-typo3', title: 'typo3'},
                { class: 'devicons devicons-uikit', title: 'uikit'},
                { class: 'devicons devicons-doctrine', title: 'doctrine'},
                { class: 'devicons devicons-groovy', title: 'groovy'},
                { class: 'devicons devicons-nginx', title: 'nginx'},
                { class: 'devicons devicons-haskell', title: 'haskell'},
                { class: 'devicons devicons-zend', title: 'zend'},
                { class: 'devicons devicons-gnu', title: 'gnu'},
                { class: 'devicons devicons-yeoman', title: 'yeoman'},
                { class: 'devicons devicons-heroku', title: 'heroku'},
                { class: 'devicons devicons-debian', title: 'debian'},
                { class: 'devicons devicons-travis', title: 'travis'},
                { class: 'devicons devicons-dotnet', title: 'dotnet'},
                { class: 'devicons devicons-codeigniter', title: 'codeigniter'},
                { class: 'devicons devicons-javascript_badge', title: 'javascript_badge'},
                { class: 'devicons devicons-yii', title: 'yii'},
                { class: 'devicons devicons-msql_server', title: 'msql_server'},
                { class: 'devicons devicons-composer', title: 'composer'},
                { class: 'devicons devicons-krakenjs_badge', title: 'krakenjs_badge'},
                { class: 'devicons devicons-krakenjs', title: 'krakenjs'},
                { class: 'devicons devicons-mozilla', title: 'mozilla'},
                { class: 'devicons devicons-firebase', title: 'firebase'},
                { class: 'devicons devicons-sizzlejs', title: 'sizzlejs'},
                { class: 'devicons devicons-creativecommons', title: 'creativecommons'},
                { class: 'devicons devicons-creativecommons_badge', title: 'creativecommons_badge'},
                { class: 'devicons devicons-mitlicence', title: 'mitlicence'},
                { class: 'devicons devicons-senchatouch', title: 'senchatouch'},
                { class: 'devicons devicons-bugsense', title: 'bugsense'},
                { class: 'devicons devicons-extjs', title: 'extjs'},
                { class: 'devicons devicons-mootools_badge', title: 'mootools_badge'},
                { class: 'devicons devicons-mootools', title: 'mootools'},
                { class: 'devicons devicons-ruby_rough', title: 'ruby_rough'},
                { class: 'devicons devicons-komodo', title: 'komodo'},
                { class: 'devicons devicons-coda', title: 'coda'},
                { class: 'devicons devicons-bintray', title: 'bintray'},
                { class: 'devicons devicons-terminal', title: 'terminal'},
                { class: 'devicons devicons-code', title: 'code'},
                { class: 'devicons devicons-responsive', title: 'responsive'},
                { class: 'devicons devicons-dart', title: 'dart'},
                { class: 'devicons devicons-aptana', title: 'aptana'},
                { class: 'devicons devicons-mailchimp', title: 'mailchimp'},
                { class: 'devicons devicons-netbeans', title: 'netbeans'},
                { class: 'devicons devicons-dreamweaver', title: 'dreamweaver'},
                { class: 'devicons devicons-brackets', title: 'brackets'},
                { class: 'devicons devicons-eclipse', title: 'eclipse'},
                { class: 'devicons devicons-cloud9', title: 'cloud9'},
                { class: 'devicons devicons-scrum', title: 'scrum'},
                { class: 'devicons devicons-prolog', title: 'prolog'},
                { class: 'devicons devicons-terminal_badge', title: 'terminal_badge'},
                { class: 'devicons devicons-code_badge', title: 'code_badge'},
                { class: 'devicons devicons-mongodb', title: 'mongodb'},
                { class: 'devicons devicons-meteor', title: 'meteor'},
                { class: 'devicons devicons-meteorfull', title: 'meteorfull'},
                { class: 'devicons devicons-fsharp', title: 'fsharp'},
                { class: 'devicons devicons-rust', title: 'rust'},
                { class: 'devicons devicons-ionic', title: 'ionic'},
                { class: 'devicons devicons-sublime', title: 'sublime'},
                { class: 'devicons devicons-appcelerator', title: 'appcelerator'},
                { class: 'devicons devicons-asterisk', title: 'asterisk'},
                { class: 'devicons devicons-aws', title: 'aws'},
                { class: 'devicons devicons-digital-ocean', title: 'digital-ocean'},
                { class: 'devicons devicons-dlang', title: 'dlang'},
                { class: 'devicons devicons-docker', title: 'docker'},
                { class: 'devicons devicons-erlang', title: 'erlang'},
                { class: 'devicons devicons-google-cloud-platform', title: 'google-cloud-platform'},
                { class: 'devicons devicons-grails', title: 'grails'},
                { class: 'devicons devicons-illustrator', title: 'illustrator'},
                { class: 'devicons devicons-intellij', title: 'intellij'},
                { class: 'devicons devicons-materializecss', title: 'materializecss'},
                { class: 'devicons devicons-openshift', title: 'openshift'},
                { class: 'devicons devicons-photoshop', title: 'photoshop'},
                { class: 'devicons devicons-rackspace', title: 'rackspace'},
                { class: 'devicons devicons-react', title: 'react'},
                { class: 'devicons devicons-redhat', title: 'redhat'},
                { class: 'devicons devicons-scriptcs', title: 'scriptcs'},
                { class: 'devicons devicons-sqllite', title: 'sqllite'},
                { class: 'devicons devicons-vim', title: 'vim'}
            ]
        ];

        var pluginInformation = {
            version: '1.0',
            developer: 'Pascal Mayer',
            developerUrl: '',
            copyrightOwner: '',
            sponsor: '',
            sponsorUrl: '',
            license: 'GPL'
        };

        this.registerPluginInformation(pluginInformation);

        var buttonId = 'InsertDevIcons';
        var buttonConfiguration = {
            id: buttonId,
            tooltip: this.localize('devicons'),
            iconCls: 'htmlarea-action-iconfont-icon-insert',
            action: 'onButtonPress',
            hotKey: (this.pageTSConfiguration ? this.pageTSConfiguration.hotKey : null),
            dialog: true
        };
        this.registerButton(buttonConfiguration);
        return true;
    },

    onButtonPress: function (editor, id) {
        var buttonId = this.translateHotKey(id);
        buttonId = buttonId ? buttonId : id;
        var dimensions = this.getWindowDimensions({width: 750, height: 500}, buttonId);

        this.dialog = new Ext.Window({
            title: this.localize('devicons'),
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
                items: this.buildTabs()
            },

            buttons: [this.buildButtonConfig('Cancel', this.onCancel)]
        });
        this.show();
    },

    buildTabs: function () {
        var tabItems = [];
        Ext.iterate(this.icons, function (id, map) {
            tabItems.push({
                xtype: 'box',
                cls: 'devicons-array',
                title: this.localize('devicons.group.' + map),
                itemId: map,
                tpl: new Ext.XTemplate(
                    '<link rel="stylesheet" type="text/css" href="../typo3conf/ext/iconfont/Resources/Public/Lib/devicons-master/css/devicons.min.css" media="all"> ' +
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