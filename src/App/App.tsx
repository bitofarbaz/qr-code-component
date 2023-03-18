import { FC } from "react";
import { ThemeProvider } from "styled-components";

import {
  CSSReset,
  StyledCard,
  StyledCardImage,
  StyledCardTitle,
  StyledCardDescription,
} from "./App.styled";
import { Attribution } from "./components/Attribution/Attribution";

import { THEME } from "../theme";
import QRCode from "../assets/image-qr-code.png";

export const App: FC = () => {
  return (
    <ThemeProvider theme={THEME}>
      <CSSReset />
      <StyledCard>
        <StyledCardImage src={QRCode} alt="QR Code" />
        <StyledCardTitle>
          Improve your front-end skills by building projects
        </StyledCardTitle>
        <StyledCardDescription>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </StyledCardDescription>
      </StyledCard>
      <Attribution />
    </ThemeProvider>
  );
};
