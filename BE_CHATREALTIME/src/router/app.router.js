const express = require('express');
const router = express();
const user_router = require('./user.router');
const auth_router = require('./auth.router');

const chat_router = require('./chat.router');
const message_router = require('./message.router');
const {checkUserLogin} = require('../jwt/jwtAction');
const appRouter = (app) => {
    router.all('*', checkUserLogin);
    router.use('/user', user_router);
    router.use('/auth', auth_router);
    router.use('/chat', chat_router);
    router.use('/message', message_router);
    return app.use('/api/v1', router);
}
module.exports = appRouter;
