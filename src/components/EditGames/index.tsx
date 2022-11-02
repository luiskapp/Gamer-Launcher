import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";


const EditGames = () => {
    return (
        <S.EditProduct>
            <>
                <S.EditProductImage src="" alt="Game..." />
                <S.EditProductDetails>
                    <S.EditProductDetailsName>Nome do Jogo</S.EditProductDetailsName>
                    <S.EditProductDetailsPrice>2010</S.EditProductDetailsPrice>
                    <S.EditProductDetailsDescription>score</S.EditProductDetailsDescription>
                </S.EditProductDetails>

                <S.EditProductAction>
                    <Pencil /> Editar
                </S.EditProductAction>
            </>
            <S.EditFormGroup>
                <S.EditForm type="text" placeholder="Título" />
                <S.EditForm type="url" placeholder="Imagem" />
                <S.EditForm type="text" placeholder="Descrição" />
                <S.EditForm type="number" placeholder="Ano" />
                <S.EditForm type="number" placeholder="Score" />
                <S.EditForm type="url" placeholder="Trailer" />
                <S.EditForm type="url" placeholder="Game Play" />
                <S.EditForm type="text" placeholder="Gênero" />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditProduct>
    );
}

export default EditGames;