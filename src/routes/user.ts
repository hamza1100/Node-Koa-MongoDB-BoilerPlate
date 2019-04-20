import * as Router from 'koa-router';
import * as userController from '../controllers/user';
const router = new Router();

router.get('/', userController.getAll);

router.get('/email', userController.getSingle);

router.post('/', userController.create);

router.put('/', userController.updateSingle);

router.delete('/email', userController.deleteUser);

export default router.routes();
