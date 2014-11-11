define(['utils/appFunc','utils/xhr','view/module','GS','i18n!nls/lang'],function(appFunc,xhr,VM,GS,i18n){

    var loadingCtrl = {

        init: function(){

            var bindings = [{
                element: '.goBtn',
                event: 'click',
                handler: loadingCtrl.loginSubmit
            }];

            VM.module('loadingView').init({
                bindings:bindings
            });
        },

        loginSubmit: function(){
            GS.setCurrentUser('12123123','dasdasda');
            mainView.router.loadPage('index.html');
        }

    };

    return loadingCtrl;
});