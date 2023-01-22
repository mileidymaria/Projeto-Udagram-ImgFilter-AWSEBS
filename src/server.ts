import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles, deleteFiles, createResponseMessage} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get( "/filteredimage", async(req: Request, res: Response) => {
    let { image_url } = req.query;
    if (!image_url){
      res.status(400)
        .send(createResponseMessage('No image url! Please try to send a request with an url.'));
    } 
    try{
      let path = await filterImageFromURL(image_url);
      console.log(`Image path ${path}`);
      res.status(200)
        .sendFile(path, {}, () => deleteFiles([path]));
    } catch(err){
      res.status(400)
        .send(createResponseMessage('Image could not be filtered! Please review the url!', err))
    } 
  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();