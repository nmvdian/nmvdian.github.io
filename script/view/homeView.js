define(['utils/appFunc','utils/tplManager','i18n!nls/lang'],function(appFunc,TM,i18n){

    var homeView = {

        init: function(){
            //appFunc.hideToolbar('.views');
            //appFunc.hideNavbar('.views');
            $$('#homeView .pull-to-refresh-layer').show();

            //nmvdian.showIndicator();
        }
    };

    return homeView;
});