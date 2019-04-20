import * as koa from 'koa';
import * as bodyparser from 'koa-bodyparser';

import routes from './routes/user';
import { PORT_NUMBER } from './constants/constant';
import { errorHandler } from './middlewares/errorhandler';

const app = new koa();

app.use(errorHandler);

app.use(bodyparser());

app.use(routes);

app.listen(PORT_NUMBER, () => {
    console.log('app is listenting at port ' + PORT_NUMBER)
})