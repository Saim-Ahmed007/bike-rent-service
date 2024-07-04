import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import cors from 'cors';
import {} from 'express';
import { ZodError} from 'zod';
import { TErrorSource } from './app/interface/error';
import config from './app/config';
import { handleZodError } from './app/errors/handleZodError';
import { handleValidationError } from './app/errors/handleValidationError';
import { handleCastError } from './app/errors/handleCastError';
import { handleDuplicateError } from './app/errors/handleDuplicateError';
import AppError from './app/errors/AppError';
import notFound from './app/middlewares/not found';
import cookieParser from 'cookie-parser';
import { UserRoutes } from './modules/User/user.route';
import { BikeRoutes } from './modules/Bike/bike.route';
import { BookingRoutes } from './modules/Booking/booking.route';
import { AuthRoutes } from './modules/Auth/auth.route';
import morgan from 'morgan'

const app = express();

// parsers
app.use(cors({origin: ['http://localhost:5173']}));
app.use(cookieParser())
app.use(express.json());

app.use(morgan('tiny'))
//application routes
app.use('/api', UserRoutes)
app.use('/api/bike',BikeRoutes)
app.use('/api/rentals', BookingRoutes)
app.use('/api/auth',AuthRoutes)






//global error handler
const globalErrorHandler: ErrorRequestHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'something went wrong';


  let errorSources:TErrorSource = [{
    path: '',
    message: 'Something went Wrong!'
  }]
  
  if(error instanceof ZodError){
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
   else if(error?.name === "ValidationError"){
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
   else if(error?.name === "CastError"){
    const simplifiedError = handleCastError(error)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
  else if(error?.code === 11000){
    const simplifiedError = handleDuplicateError(error)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } 
  else if(error instanceof AppError){
    statusCode = error?.statusCode
    message = error.message
    errorSources = [{
      path : '',
      message : error?.message
    }]
  } else if(error instanceof Error){
    message = error.message
    errorSources = [{
      path : '',
      message : error?.message
    }]
  }
   //ultimate return
   return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error,
    stack: config.NODE_ENV === 'development' ? error?.stack : null
  });
 
};
app.use(globalErrorHandler);

const test = async(req: Request, res: Response)=>{
  
}
app.get('/',test)
app.use(notFound)

export default app;
