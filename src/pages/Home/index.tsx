import Menu from "components/Menu";
import * as S from "./style";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { RoutePath } from "assets/types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return <S.Home>
    <Menu active={RoutePath.HOME} navItems={navigationItems} />
    <S.HomeContent>
      <header>
        <S.HomeHeaderDetails>
          <div>
            <S.HomeHeaderDetailsLogo>GamePlay</S.HomeHeaderDetailsLogo>
            <S.HomeHeaderDetailsDate>{dateDescription}</S.HomeHeaderDetailsDate>
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