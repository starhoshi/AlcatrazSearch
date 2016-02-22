import {Alcatraz} from "../models/alcatraz";

export type Api = {
  loading: boolean;
  error: boolean;
  result: Alcatraz[];
};
