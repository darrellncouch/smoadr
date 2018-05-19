import * as express from "express";
import * as bodyParser from "body-Parser";
import { Request, Response } from "express";
import * as path from "path";
import cors from "cors";

class App {

  constructor () {
    this.app = express();
    this.config()
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(express.static(__dirname + './../')); //serves the index.html
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    // this.app.use(cors());
  }

  //api
  private routes(): void {
    const router = express.Router();

    router.get('/api/doSomthing', (req: Request, res: Response) => {
      console.log("did something")
      res.sendStatus(200)
    })

    this.app.use('/', router);
  }

};

export default new App().app;
