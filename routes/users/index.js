import { Router } from 'express';

import { auth } from '../../controllers';
import post from './post';
import get from './get';
import userDelete from './delete';
import userPut from './put';

const router = Router();

router.post('/', post);
router.get('/', auth.get, get);
router.delete('/', auth.get, userDelete);
router.put('/', auth.get, userPut);

export default router;
