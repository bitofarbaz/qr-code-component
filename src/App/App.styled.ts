import styled, { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`

	:root {
		font-family: 'Outfit', sans-serif;
		font-size: 15px;
	}
	
	* {
		margin: unset;
		box-sizing: border-box;
	}


	html, body {
		background-color: ${(props) => props.theme.colors.lightGray};
	}

	body {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

`;

export const StyledCard = styled.article`
  width: 300px;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem ${(props) => props.theme.colors.lightGray};

  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  border-radius: 1rem;

  margin-bottom: 2rem;
`;
export const StyledCardTitle = styled.h1`
  margin-bottom: 1rem;
`;
export const StyledCardDescription = styled.p`
  color: ${(props) => props.theme.colors.grayishBlue};
`;
