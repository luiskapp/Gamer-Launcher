import { ReactComponent as Info } from "assets/icons/info.svg";
import * as S from "./style";
import { RoutePath } from "assets/types/routes";
import NavColumnItem from "components/NavColumnItem";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

type NavColumnType = HTMLAttributes<HTMLDivElement>;

type NavColumnProps = {
  activeRoute: RoutePath;
} & NavColumnType;

const NavColumn = ({ activeRoute }: NavColumnProps) => {
  const navigate = useNavigate();
  
  const items = [
    {
      icon: <Info />,
      title: "Gerenciar Genêros",
      subtitle: "Adicione, configure genêros",
      navigation: RoutePath.SETTINGS_GENER,
    },
    {
      icon: <Info />,
      title: "Gerenciar Games",
      subtitle: "Adicione, Edite e Remova",
      navigation: RoutePath.SETTINGS_GAMES,
    },
    {
      icon: <Info />,
      title: "Gerenciar Usuários",
      subtitle: "Adicione, Edite e Remova",
      navigation: RoutePath.SETTINGS_USERS,
    },
  ];
  return (
    <S.NavColumn>
      {items.map((item, key) => (
        <NavColumnItem
          onClick={() => navigate(item.navigation)}
          active={item.navigation === activeRoute}
          icon={item.icon}
          title={item.title}
          key={key}
          subtitle={item.subtitle}
        />
      ))}
    </S.NavColumn>
  );
};

export default NavColumn;