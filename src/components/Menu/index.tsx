import gamer from "assets/icons/gamer.svg";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import * as S from "./style";
import { RoutePath } from "assets/types/routes";
import { NavItem } from "./types";

interface MenuProps {
    active: RoutePath;
    navItems: NavItem[];
  }
  

const Menu = ({ active, navItems }: MenuProps) => {
    return (
        <S.Menu>
            <nav>
                <S.MenuLogo>
                    <img src={gamer} alt="Logo" />
                </S.MenuLogo>
                {navItems.map((item, index) => (
			<S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
				<S.MenuItemButton active={item.path === active}>
					{item.icon}
				</S.MenuItemButton>
			</S.MenuItem>
		))}
        
            </nav>
            <S.MenuItemLogout>
                <Logout />
            </S.MenuItemLogout>
        </S.Menu>
    );
};

export default Menu;