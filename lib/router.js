Router.configure({});

Router.route('/', {
    name: 'root',
    controller: 'MainPageController'
});

Router.route('/new', {
    name: 'newPost',
    controller: 'BaseController'
});