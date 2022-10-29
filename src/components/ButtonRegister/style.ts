import styled, { css } from "styled-components";

export const ButtonRegister = styled.a`
	${({ theme }) => css`
    display: flex;
	justify-content: center;
	align-items: center;
    margin: 0 auto;
    margin-top: 30px;
	background-color:transparent;
    color: #f2f2f2;
    border: 1.5px solid ${theme.colors.primaryColor};
    padding: 4px;
    width: 130px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 550;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all .4s ease;
    text-decoration:none;


    :hover{
        background: ${theme.colors.primaryColor};
        filter: drop-shadow(0px 0px 10px ${theme.colors.primaryColor});
        color: #FFFFFF;
        font-weight: bolder;
    `}
`;