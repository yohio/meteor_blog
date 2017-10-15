AutoForm.hooks({
    editPostForm: {
        onSuccess: function(operation, post) {
            Router.go('singlePost', post);
        }
    }
});

Template.editPost.helpers({
    allowedEdit() {
        const currentUser = Meteor.user();
        const instance = Template.instance();
        return currentUser.username == instance.data.author;
    }
});