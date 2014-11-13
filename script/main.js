(function() {
    var lang = localStorage.getItem('lang') || 'zh-cn';
    require.config({
        locale: lang,
        paths: {
            text        :     '../vendors/require/text',
            i18n        :     '../vendors/require/i18n',
            frame       :     '../vendors/frame/frame',
            GTPL        :     '../page/global.tpl.html',
            GS          :     'services/globalService'
        },
        shim: {
            'frame':{exports: 'frame'}
        }
    });

    require(['frame','router','i18n!nls/lang','utils/appFunc'], function(frame,router,i18n,appFunc) {

        var app = {
            initialize: function() {
                this.bindEvents();
            },
            bindEvents: function() {
                if(appFunc.isPhonegap()) {
                    document.addEventListener('deviceready', this.onDeviceReady, false);
                }else{
                    window.onload = this.onDeviceReady();
                }
            },
            onDeviceReady: function() {
                app.receivedEvent('deviceready');
            },
            receivedEvent: function(event) {
                switch (event) {
                    case 'deviceready':
                        app.initMainView();
                        break;
                }
            },
            initMainView:function(){
                window.$$ = Dom7;

                window.nmvdian = new NMVDIAN({

                    pushState: false,
                    pushStateRoot: undefined,
                    pushStateNoAnimation: false,
                    pushStateSeparator: '#!/',

                    popupCloseByOutside:false,
                    animateNavBackIcon: true,
                    modalTitle: i18n.global.modal_title,
                    modalButtonOk: i18n.global.modal_button_ok,
                    modalButtonCancel: i18n.global.cancel,
                    preprocess:router.preprocess,

                    cache: true,
                    cacheIgnore: [],
                    cacheIgnoreGetParameters: false,
                    cacheDuration: 1000 * 60 * 5, // Ten minutes 
                    preloadPreviousPage: true,
                    uniqueHistory: false,
                    uniqueHistoryIgnoreGetParameters: false,
                    
                });

                window.mainView = nmvdian.addView('#homeView', {
                    dynamicNavbar: true
                });

                window.contatcView = nmvdian.addView('#contatcView', {
                    dynamicNavbar: true
                });

                window.settingView = nmvdian.addView('#settingView', {
                    dynamicNavbar: true
                });

                router.init();
            }
        };

        app.initialize();

    });
})();
