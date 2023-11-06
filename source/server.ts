import http from 'http';
import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import routes from './routes/index';

const router: Express = express();

/** Logging */
router.use(morgan('dev'));

/** Parse the request */
router.use(express.urlencoded({ extended: false }));

/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API         */
router.use((req: Request, res: Response, next: NextFunction) => {
  // Set the CORS policy
  res.header('Access-Control-Allow-Origin', '*');
  // Set the CORS headers
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');
  // Set the CORS method headers
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
    return res.status(200).json({});
  }
  next();
});

/** Routes */
router.use('/', routes);

/** Error handling */
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: err.message,
  });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
