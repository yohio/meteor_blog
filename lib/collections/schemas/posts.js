var postFields = {
    title: {
        type: String,
        label: 'Title'
    },
    body: {
        type: String,
        label: 'Body',
        autoform: {
            type: 'textarea',
            rows: 5
        }
    },
    published: {
        type: Boolean,
        defaultValue: true,
        label: 'Publish post?'
    },
    _id: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden",
            label: false
        },
    },
    userId: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    author: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    createdAt: {
        type: Date,
        optional: true,
        autoform: {
            omit: true
        }
    }
};

PostSchema = new SimpleSchema(postFields);