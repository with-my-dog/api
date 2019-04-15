import { Router } from 'express';

import { auth } from '../../controllers';
import post from './post';
import list from './list';
import reviewDelete from './delete';

const router = Router();

router.post('/', auth.get, post);
router.get('/', list);
router.delete('/:id', auth.get, reviewDelete);

export default router;
