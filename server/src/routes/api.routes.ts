import { Router, Request, Response } from 'express';
const router = Router();

// Get all Posts
router.route('/api').get((req: Request, res: Response) => {
    res.send({
        version: '1.0'
    });
});


export default router;