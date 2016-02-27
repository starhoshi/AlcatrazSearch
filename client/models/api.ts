import {AlcatrazPackages} from "../models/alcatrazPackages";

export type Api = {
  loading: boolean;
  error: boolean;
  result?: AlcatrazPackages;
};
