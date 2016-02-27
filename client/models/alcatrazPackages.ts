import {Alcatraz} from "../models/alcatraz";

export type AlcatrazPackages = {
  created_at: string;
  color_schemes: Alcatraz[];
  plugins: Alcatraz[];
  project_templates: Alcatraz[];
  file_templates: Alcatraz[];
};
