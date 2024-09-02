import { Router } from 'express';
import { getFormEntries, createFormEntry } from '../controllers/formController';

const router = Router();

router.get('/', getFormEntries);
router.post('/form', createFormEntry);

export default router;