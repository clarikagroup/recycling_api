import  IInfoServices  from "../application/interfaces/Services/IInfoService";
import { Info } from "../models/Info";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class InfoServices implements IInfoServices {
    public GetInfoByIdAsync(Id: string): Info {
        return new Info(Id, "info Service alive");
    }
}