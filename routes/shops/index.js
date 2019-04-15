import { Router } from 'express';

import { auth } from '../../controllers';
import post from './post';
import get from './get';
import list from './list';
import put from './put';
import shopDelete from './delete';

const router = Router();

router.post('/', auth.get, post);
router.get('/:id', get);
router.get('/', list);
router.put('/:id', auth.get, put);
router.delete('/:id', auth.get, shopDelete);

export default router;
