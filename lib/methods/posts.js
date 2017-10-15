Meteor.methods({
    submitPost: function(post) {

        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error(401, 'You need to log in first');

        var additionalParams = {
            author: Meteor.user().username,
            createdAt: new Date(),
            userId: user._id
        };

        _.extend(post, additionalParams);
        post._id = Posts.insert(post);

        return post;
    },
    editPost: function(post) {

        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error(401, 'Only original poster is allowed to edit their post');

        var additionalParams = {
            author: Meteor.user().username,
            createdAt: new Date(),
            userId: user._id
        };

        _.extend(post, additionalParams);
        post._id = Posts.update(post);

        return post;
    }
});