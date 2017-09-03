const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

// add url-route:
router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

router.get('/api', async (ctx, next) => {
    ctx.response.body = 'text data';
});

router.get('/api/1', async (ctx, next) => {
    // var name = ctx.params.name;
    ctx.response.body = 'text data 1';
});

router.get('/api/2', async (ctx, next) => {
    ctx.response.body = {
        a: 1,
        b: '123'
    };
});

// add router middleware:
app.use(router.routes());


app.listen(3000);
console.log('app started at port 3000...');