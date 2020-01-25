const path = require('path');
const Koa = require('koa');
const send = require('koa-send');
const Router = require('koa-router');

const app = new Koa();

const router = new Router();
router.get(['/', '/**'], async (ctx) => {
  const url = ctx.path;
  await send(ctx, './index.html', {
      root: path.join(__dirname, 'dist'),
      maxAge: 1
    });
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);
