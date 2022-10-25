import Menu from "components/Menu";
import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";

const Home = () => {
  return <S.Home>
    <Menu />
    <S.HomeContent>
      <header>
        <S.HomeHeaderDetails>
          <div>
            <S.HomeHeaderDetailsLogo>PlayGame</S.HomeHeaderDetailsLogo>
            <S.HomeHeaderDetailsDate>Aqui ficará a data</S.HomeHeaderDetailsDate>
          </div>
          <S.HomeHeaderDetailsSearch>
            <Search />
            <input type="text" placeholder="Buscar..." />
          </S.HomeHeaderDetailsSearch>
        </S.HomeHeaderDetails>
      </header>
      <div>
        <S.HomeProductTitle>
          <b>Games</b>
        </S.HomeProductTitle>
        <S.HomeProductList>
          <p>Lista de produtos aqui</p>
        </S.HomeProductList>
      </div>
    </S.HomeContent>
  </S.Home>;
}

export default Home;