import { Router } from 'express';
const app: Router = Router();

app.get('/', (req, res) => {
    res.send({
        code: 200,
        status: 'OK',
        message: 'Categories',
    });
});

export default app;