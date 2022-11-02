import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";

type ManageTablesType = HTMLAttributes<HTMLDivElement>;

type ManageTablesProps = {} & ManageTablesType;

const ManageTables = ({ ...props }: ManageTablesProps) => {
  return (
    <S.ManageTables {...props}>
      <S.ManageTablesTitle>Gerenciar Gêneros</S.ManageTablesTitle>
      <S.ManageTablesSub>
        <b>Gêneros</b>
      </S.ManageTablesSub>
      <S.ManageTablesContent>
        <S.ManageTablesContentAdd>
          <Add />
          <span>Adicionar gênero</span>
        </S.ManageTablesContentAdd>
        <S.ManageTablesContentAdd>
          <label htmlFor="tableId">Gêneros</label>
          <S.EditForm id="tableId" type="text" placeholder="Ação" />
        </S.ManageTablesContentAdd>
        {"Componente EditTable"}
      </S.ManageTablesContent>
      <S.ManageTablesActions>
        <S.ManageTablesActionsCancel>Cancelar</S.ManageTablesActionsCancel>
        <S.ManageTablesActionsSave>Salvar Mudanças</S.ManageTablesActionsSave>
      </S.ManageTablesActions>
    </S.ManageTables>
  );
};

export default ManageTables;