import { Router } from 'express';
import users from './users';
import auth from './auth';
import shops from './shops';
import reviews from './reviews';

const router = Router();

router.use('/users', users);
router.use('/auth', auth);
router.use('/shops', shops);
router.use('/reviews', reviews);

export default router;
