import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(function (req, res, next) {

  
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
      res.setHeader('Access-Control-Allow-Credentials', true);
  

      next();
  });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
