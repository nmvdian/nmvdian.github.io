define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var homeCtrl = {

        init: function(){

            VM.module('homeView').init();
            appFunc.hideToolbar('.view');
            appFunc.hideNavbar('.view');
            //this.getTimeline();
        },

        bindEvent: function(){

            var bindings = [{
                element: '#homeView',
                selector: '.pull-to-refresh-content',
                event: 'refresh',
                handler: homeCtrl.refreshTimeline
            }];

            appFunc.bindEvents(bindings);

        },

        
    };

    homeCtrl.bindEvent();

    return homeCtrl;
});