import * as S from "./style";
import logo from 'assets/icons/gamer.svg';
import ButtonLarge from "components/ButtonLarge";
import { ButtonRegister } from "components/ButtonRegister/style";

const BoxLogin = () => {
    return (
        <S.BoxLogin>
            <S.BoxLoginLogo>
                <S.BoxLoginLogoText>
                    <span>Game</span>
                    <span>Play</span>
                </S.BoxLoginLogoText>
                <S.BoxLoginLogoImage src={logo} alt="Logo" />
            </S.BoxLoginLogo>
            <S.BoxLoginForm>
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <ButtonLarge value="Entrar" type="button" />
            </S.BoxLoginForm>
            <ButtonRegister href='/users'>CADASTRE-SE</ButtonRegister>
        </S.BoxLogin>
    );
};

export default BoxLogin;

