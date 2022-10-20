import { Info } from '../../../models/Info';

export default interface IInfoServices {
    GetInfoByIdAsync(Id: string): Info;
}