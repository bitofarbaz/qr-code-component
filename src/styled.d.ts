// import original module declarations
import "styled-components";
import { THEME } from "./theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      lightGray: string;
      grayishBlue: string;
      darkBlue: string;
    };
  }
}
