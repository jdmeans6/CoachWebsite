const conn = {
    authInfo: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
            authSource: 'admin'
        },
        user: 'jdmeans',
        pass: ''
    },
    url: 'mongodb+srv://jdmeans:y9psPA!CJ5Te8nd@bootcamp.porrz.mongodb.net',
    db: '/Bootcamp?retryWrites=true&w=majority'
}

exports.conn = conn