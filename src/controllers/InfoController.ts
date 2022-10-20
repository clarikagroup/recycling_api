import * as express from 'express';
import { inject } from "inversify";
import { interfaces, controller, httpGet,  request, response } from "inversify-express-utils";
import IInfoServices from '../application/interfaces/Services/IInfoService';
import { TYPES } from "../types";

@controller('/info')
export default class InfoController implements interfaces.Controller {

    private _infoServices : IInfoServices;
    constructor( @inject(TYPES.InfoServices) infoServices: IInfoServices) { 
        this._infoServices = infoServices;
    }

@httpGet("/")
  public async index (@request() _req: express.Request, @response() res: express.Response) {
    
    try {     
      res.send(this._infoServices.GetInfoByIdAsync("testId"));
    } catch(error) {
      res.status(400).json(error);
    }
  }

} 