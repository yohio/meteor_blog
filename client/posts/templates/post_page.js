Template.postPage.helpers({
    isSameUser() {
        const instance = Template.instance();
        const currentUser = Meteor.user();
        return currentUser.username == instance.data.author;
    }
});

Template.postPage.events({
    'click #deletePosts' (event, instance) {
        event.preventDefault();
        event.stopPropagation();

        new Confirmation({
            message: "Are you sure ?",
            title: "Delete Post",
            cancelText: "Cancel",
            okText: "Ok",
            success: true,
            focus: "cancel"
        }, function (ok) {
            if(ok) {
                Router.go('root');
                Meteor.call('deletePost', instance.data._id);
            }

        });
    }
});