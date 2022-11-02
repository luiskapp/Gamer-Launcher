import styled, { css } from "styled-components";
import { Theme } from "assets/types/styled-components";

export const ManageGames = styled.section`
  ${() => css`
    padding: 20px;
  `}
`;

export const ManageGamesTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    font-size: 20px;
    margin: 0;
  `}
`;

export const ManageGamesSub = styled.h2`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    margin: 25px 0 0 0;
    border-bottom: 1px solid ${theme.colors.baseLine};
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

export const ManageGamesContent = styled.div`
  ${() => css`
    margin-top: 15px;
    justify-content: center;
    height: 310px;
    padding-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    overflow: auto;
    /* Works on Firefox */
      {
      scrollbar-width: thin;
      scrollbar-color: #1F1D2B rgba(255, 255, 255, 0.562);
    }

    /* Works on Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
       width: 12px;
      }

    ::-webkit-scrollbar-track {
      background: #1F1D2B;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #1F1D2B;
      border-radius: 10px;
    }
  `}
`;

export const ManageGamesContentAdd = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    max-height: 285px;
    color: ${theme.colors.primaryColor};
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    max-height: 385px;
    box-sizing: border-box;
    padding: 10px 0;
    color: ${theme.colors.primaryColor};
    ${theme.mixins.bodyStyle()};
    font-weight: 500;
    border: 1px dashed ${theme.colors.primaryColor};
    border-radius: 8px;
    gap: 10px;
    cursor: pointer;
    /* Chrome */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    
  `}
`;

export const ManageGamesActions = styled.div`
  ${() => css`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `}
`;

export const ManageGamesActionsCancel = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;

export const ManageGamesActionsSave = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonFilled()};
  `}
`;

const EditFormMixins = {
  error: (theme: Theme) => css`
    border: 2px solid ${theme.colors.secondaryColor};
  `,
  success: (theme: Theme) => css`
    border: 2px solid ${theme.colors.primaryColor};
  `,
};

export const EditForm = styled.input<{ error?: boolean; success?: boolean }>`
  ${({ theme, error = false, success }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
    ${error && EditFormMixins.error(theme)}
    ${success && EditFormMixins.success(theme)}
    &:valid[type="url"] {
      ${success && EditFormMixins.success(theme)}
    }
    &:invalid {
      ${EditFormMixins.error(theme)}
    }
    width: 90%;
    overflow-y: scroll;
  `}
`;