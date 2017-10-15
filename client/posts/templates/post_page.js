Template.postPage.helpers({
    isSameUser() {
        const instance = Template.instance();
        const currentUser = Meteor.user();
        return currentUser.username == instance.data.author;
    }
});