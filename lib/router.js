Router.configure({
    loadingTemplate: 'spinner',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'root',
    controller: 'MainPageController'
});

Router.route('/new', {
    name: 'newPost',
    controller: 'BaseController'
});

Router.route('/:_id', {
    name: 'singlePost',
    controller: 'SinglePostController'
});