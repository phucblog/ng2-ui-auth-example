"use strict";
/**
 * Created by ronze on 2/3/2016.
 */
exports.config = {
    rethinkdb: {
        host: 'localhost',
        port: 28015,
        authKey: '',
        db: 'test',
    },
    // Token Authentication
    SALT_ROUNDS: 10,
    TOKEN_SECRET: 'MyTokenSecret',
    // OAuth 2.0
    GOOGLE_SECRET: 'CHANGE_ME',
    // 3 legged auth
    TWITTER_API_KEY: 'CHANGE_ME',
    TWITTER_SECRET: 'CHANGE_ME'
};
//# sourceMappingURL=config.js.map