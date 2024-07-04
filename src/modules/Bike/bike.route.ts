import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { BikeValidationSchema } from './bike.validation';
import { BikeController } from './bike.controller';
import auth from '../../app/middlewares/auth';

const router = express.Router();
router.post(
  '/create-bike', auth(),
  validateRequest(BikeValidationSchema.createBikeValidationSchema),
  BikeController.createBike,
);

router.get('/',auth(), BikeController.getAllBikes);
router.put(
  '/:id', auth(),
  validateRequest(BikeValidationSchema.updateBikeValidationSchema),
  BikeController.updateBike,
);
router.delete('/:id', auth(), BikeController.deleteBike);

export const BikeRoutes = router