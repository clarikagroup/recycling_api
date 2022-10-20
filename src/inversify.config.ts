import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import  IInfoServices  from './application/interfaces/Services/IInfoService';
import InfoServices  from './services/InfoServices';


const recyclingContainer = new Container();
recyclingContainer
    .bind<IInfoServices>(TYPES.InfoServices)
    .to(InfoServices)
    .inRequestScope();

export default recyclingContainer;