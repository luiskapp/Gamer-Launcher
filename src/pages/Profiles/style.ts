import styled, { css } from "styled-components";

export const Profile = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		display: flex;
		justify-content: center;
	`}
`;

export const ProfileContent = styled.main`
	${() => css`
		width: calc(100% - 120px);
		padding: 20px;
		overflow: auto;
		height: 100vh;
		box-sizing: border-box;
	`}
`;

export const ProfileHeaderDetails = styled.div`
	${() => css`
		display: flex;
		justify-content: space-between;
	`}
`;

export const ProfileHeaderDetailsLogo = styled.h1`
	${({ theme }) => css`
		${theme.mixins.logoStyle};
		text-transform: uppercase;
		margin: 0;
	`}
`;

export const ProfileHeaderDetailsDate = styled.p`
	${() => css`
		text-transform: capitalize;
	`}
`;

export const ProfileHeaderDetailsSearch = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: flex-end;
		${theme.mixins.buttonIcon()};
    margin: 0 auto;
    margin-right: 100px;
		button {
			background: transparent;
			border: none;
			height: 100%;
			color: ${theme.colors.textColor};
      cursor: pointer;
		}
	`}
`;

export const ProfileProductTitle = styled.h2`
	${({ theme }) => css`
		margin: 0;
		border-bottom: 1px solid ${theme.colors.baseLine};
		${theme.mixins.bodyStyle()};
		color: ${theme.colors.primaryColor};
		padding-bottom: 10px;
		b {
			position: relative;
			&::after {
				content: "";
				position: absolute;
				left: 0;
				bottom: -13px;
				width: 100%;
				height: 4px;
				background-color: ${theme.colors.primaryColor};
				border-radius: 5rem;
			}
		}
	`}
`;

export const ProfileProductList = styled.div`
	${() => css`
		margin-top: 25px;
		padding-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content : center ;
    flex-wrap: wrap;
    gap:15px;

	`}
`;

export const ProfileProductListGap = styled.div`
	${({ theme }) => css`
		width: 200px;
	`}
`;

export const ButtonSetting = styled.a`
	${({ theme }) => css`
    display: flex;
	justify-content: space-between;
	align-items: flex-end;
	background-color:transparent;
    color: #f2f2f2;
    border-bottom: 1.5px solid ${theme.colors.primaryColor};
	margin-right: 50px;
    padding: 4px;
    width: 150px;
    font-size: 13px;
    font-weight: 550;
    cursor: pointer;
    letter-spacing: 1.5px;
    transition: all .4s ease;
    text-decoration:none;
	`}

`;