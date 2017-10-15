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
        const postData = post.$set;
        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error(401, 'Only original poster is allowed to edit their post');
        var additionalParams = {
            author: Meteor.user().username,
            createdAt: new Date(),
            userId: user._id
        };

        _.extend(postData, additionalParams);
        Posts.update({_id : postData._id}, {$set : {
            "title" : postData.title,
            "body" : postData.body,
            "published" : postData.published
        }});

        return postData;
    },
    deletePost: function(postId) {
        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error(401, 'Only authors are allowed to delete posts');
        Posts.remove({_id : postId});
    }
});