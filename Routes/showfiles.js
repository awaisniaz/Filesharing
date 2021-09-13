import express from 'express';
import showMiddleWare from '../Middleware/showFilesMiddleware';
const showRouter = express.Router();

showRouter.get("/:uuid",showMiddleWare)

module.exports = showRouter;