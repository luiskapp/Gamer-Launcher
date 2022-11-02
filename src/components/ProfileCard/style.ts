import styled, { css } from "styled-components";

export const ContainerProfileCard = styled.section`
	${({ theme }) => css`{
	width: 160px;
    height: 200px;
    border-radius:8px;
    cursor: pointer;
    transition: all .3s ease;
    box-shadow: 0 0 8px rgba(0,0,0, .5);
    text-decoration:none;
	color: ${theme.colors.textColor};
	display: flex;
	flex-direction: row;

	`}
	
`;

export const ProfileCard = styled.div`
	${() => css`{
	display: flex;
	align-items: center;
	text-decoration: none;
	flex-direction: column;
	
	`}
	
`;

export const Card = styled.div`
	${() => css`{
	display: flex;
	align-items: center;
	flex-direction: column;
	
	`}
	
`;

export const ImgCard = styled.a`
	${() => css`{
		display: flex;
	flex-direction: row;

		img{
        width: 160px;
        height: 200px;
        object-fit: cover;
        object-position: left;
        border-radius:8px;
    }
	`}
	
`;

export const TextCard = styled.p`
	${({ theme }) => css`{
		${theme.mixins.logoStyle};
		text-transform: uppercase;
		margin: 0;
	`}
	
`;