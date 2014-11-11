define(['GS','controller/module'],function(GS,CM) {

    var router = {

        init: function() {
            $$(document).on('pageBeforeInit', function (e) {
                var page = e.detail.page;
                router.pageBeforeInit(page);
            });

            $$(document).on('pageAfterAnimation', function (e) {
                var page = e.detail.page;
                router.pageAfterAnimation(page);
            });

            
            if(!GS.isLogin()){
                mainView.router.reloadPage('page/loading.html');
            }else{
                mainView.router.reloadPage('index.html');
            }

        },

        pageAfterAnimation: function(page){
            var name = page.name;
            var from = page.from;
            var swipeBack = page.swipeBack;

            if(name === 'homeView' || name === 'contatcView' || name === 'setting' ){
                if(from === 'left' && swipeBack){

                    CM.module('appCtrl').showToolbar();
                }
            }
        },

        pageBeforeInit: function(page) {
            var name = page.name;
            var query = page.query;
            var from = page.from;
            switch (name) {
                case 'loading':
                    if(from === 'left') return;
                    CM.module('loadingCtrl').init();
                    break;
                case 'homeView':
                    if(from === 'left') return;
                    CM.module('homeCtrl').init();
                    break;
                case 'about':
                    CM.module('aboutCtrl').init();
                    break;
                case 'feedback':
                    CM.module('feedbackCtrl').init();
                    break;
                case 'item':
                    CM.module('itemCtrl').init(query);
                    CM.module('commentCtrl').init();
                    break;
                case 'message':
                    CM.module('messageCtrl').init(query);
                    break;
                case 'language':
                    CM.module('languageCtrl').init(query);
                    break;
            }
        },

        preprocess: function(content,url){
            if(!url) return false;

            url = url.split('?')[0] ;

            var viewName;

            switch (url) {
                case 'index.html':
                    viewName = 'appView';
                    break;
                case 'page/loading.html':
                    viewName = 'loadingView';
                    break;
                case 'page/about.html':
                    viewName = 'aboutView';
                    break;
                case 'page/feedback.html':
                    viewName = 'feedbackView';
                    break;
                case 'page/item.html':
                    viewName = 'itemView';
                    break;
                case 'page/message.html':
                    viewName = 'messageView';
                    break;
                case 'page/language.html':
                    viewName = 'languageView';
                    break;
                default :
                    return content;
            }
            var output = CM.module('appCtrl').i18next(viewName,content);
            return output;

        }

    };

    return router;
});