define(['utils/appFunc','i18n!nls/lang','utils/tplManager'],function(appFunc,i18n,TM){

    var loadingView = {

        init: function(params){
            appFunc.hideToolbar();
            //appFunc.hideNavbar();
            appFunc.bindEvents(params.bindings);
        },

        i18next: function(content){
            var renderData = {
                appName: i18n.app.name,
                goBtn: i18n.loadingPage.go_btn,
            };

            var output = TM.renderTpl(content,renderData);
            return output;
        }

    };

    return loadingView;
});