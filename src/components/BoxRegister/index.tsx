import * as S from "./style";
import { useState } from "react";
import logo from "assets/icons/gamer.svg";
import ButtonLarge from "components/ButtonLarge";

const BoxRegister = () => {
    const [fields, setfields] = useState({
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        confirma: "",
    });

    const handleFields = (event: { target: { name: any; value: any } }) => {
        setfields({ ...fields, [event.target.name]: event.target.value });
    };

    return (
        <S.BoxRegister>
            <S.BoxRegisterLogo>
                <S.BoxRegisterLogoText>
                    <span>Game</span>
                    <span>Play</span>
                </S.BoxRegisterLogoText>
                <S.BoxRegisterLogoImage src={logo} alt="Logo" />
            </S.BoxRegisterLogo>
            <S.BoxRegisterForm>
                <input
                    value={fields.nome}
                    placeholder="Nome"
                    onChange={handleFields}
                    type="text"
                    required
                />
                <input
                    placeholder="E-mail"
                    value={fields.email}
                    onChange={handleFields}
                    type="email"
                    required
                />
                <input
                    placeholder="Senha"
                    value={fields.senha}
                    onChange={handleFields}
                    autoComplete="off"
                    type="password"
                    required
                />
                <input
                    placeholder="CPF"
                    value={fields.cpf}
                    onChange={handleFields}
                    type="text"
                    required
                />
                <input
                    placeholder="Confirmar Senha"
                    value={fields.confirma}
                    onChange={handleFields}
                    type="password"
                    required
                />
                <ButtonLarge value="CADASTRAR" type="button" />
            </S.BoxRegisterForm>
        </S.BoxRegister>
    );
};

export default BoxRegister;
