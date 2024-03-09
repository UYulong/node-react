var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const UserRoute = require('./routes/admin/UserRoute');
const JWT = require('./utils/JWT');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 权限认证
app.use((req, res, next) => {
  if (req.url.includes('login')) {
    next()
    return
  }

  const token = req.headers.authorization?.split(' ')[1]
  if (token) {
    console.log('token', token);

    if (token === 'null') {
      res.status(401).send({ code: -1, msg: 'token 已过期，请重新登录' })
      return
    }

    const verifyResult = JWT.verify(token)
    if (verifyResult) {
      const newToken = JWT.generate({
        username: verifyResult.username,
        _id: verifyResult._id
      }, '1d')


      res.header('authorization', newToken)
      next()
    } else {
      res.status(401).send({ code: -1, msg: 'token 已过期，请重新登录' })
    }
  } else {
    res.status(401).send({ code: -1, msg: 'token 已过期，请重新登录' })
  }
})

app.use('/', indexRouter);
app.use(UserRoute) // 用户相关

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
