import styled, { css } from "styled-components";

export const BoxRegister = styled.section`
	${({ theme }) => css`
		background: ${theme.colors.baseBg2};
		width: 330px;
		height: 514px;
		padding: 20px 20px 35px 20px;
		margin: 20px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
		color: ${theme.colors.textColor};
	`}
`;

export const BoxRegisterLogo = styled.div`
  ${() => css`
  	display: flex;
  	justify-content: space-around;
  	align-items: center;
  `}
`;

export const BoxRegisterLogoText = styled.h1`
  ${({ theme }) => css`
  	font-family: ${theme.constants.logoFontFamily};
  	font-size: 4em;
  	line-height: 70px;
  	font-weight: 400;
  	text-transform: uppercase;
  	margin: 20px 0;
  	padding: 2.5px 0;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	border-top: 1px solid ${theme.colors.textColor};
  	border-bottom: 1px solid ${theme.colors.textColor};
  	text-align: center;
  	width: calc(50% - 10px);
  	span:first-child {
  		border-top: 1px solid ${theme.colors.textColor};
  		display: inline-block;
  		letter-spacing: 9px;
  	}
  	span:last-child {
  		border-bottom: 1px solid ${theme.colors.textColor};
  		display: inline-block;
  		letter-spacing: 9px;
  		letter-spacing: 6px;
  	}
  `}
`;

export const BoxRegisterLogoImage = styled.img`
  ${() => css`
  	width: 45%;
  `}
`;

export const BoxRegisterForm = styled.form`
  ${({ theme }) => css`
  	display: flex;
  	flex-direction: column;
  	gap: 15px;
  	input {
  		${theme.mixins.input()};
  		color: ${theme.colors.textColor};
  	}
  `}
`;

export const BoxRegisterError = styled.span`
  ${({ theme }) => css`
  	color: ${theme.colors.secondaryColor};
  	text-align: center;
  	display: inline-block;
  	margin-top: 25px;
  `}
`;

