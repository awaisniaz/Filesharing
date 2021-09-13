import express from 'express';
import fileUploader from '../Middleware/fileMiddleware'
const fileRouter = express.Router();

fileRouter.post('/',fileUploader)

module.exports  = fileRouter