const conn = {
    authInfo: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
            authSource: 'admin'
        },
        user: 'jdmeans',
        pass: 'y9psPA!CJ5Te8nd'
    },
    url: 'bootcamp.porrz.mongodb.net/',
    db: 'Bootcamp'
}

exports.conn = conn

// mongodb+srv://jdmeans:y9psPA!CJ5Te8nd@bootcamp.porrz.mongodb.net/Bootcamp?retryWrites=true&w=majority