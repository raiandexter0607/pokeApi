import { Router} from 'express';
import categories from './categories';

const app: Router = Router();

app.use('/categories', categories)

export default app