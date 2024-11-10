import { Router } from 'express';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';


// **** Variables **** //

const apiRouter = Router();

// ** Add UserRouter ** //

// Init router
const phraselistGenerator = Router();


// Add UserRouter
apiRouter.use(Paths.PhraselistGenerator.Base, phraselistGenerator);


// **** Export default **** //

export default apiRouter;
