import gamer from "assets/icons/gamer.svg";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import * as S from "./style";

const Menu = () => {
    return (
        <S.Menu>
            <nav>
                <S.MenuLogo>
                    <img src={gamer} alt="Logo" />
                </S.MenuLogo>
                <S.MenuItem>
                    <S.MenuItemButton></S.MenuItemButton>
                </S.MenuItem>
            </nav>
            <S.MenuItemLogout>
				<Logout />
			</S.MenuItemLogout>
        </S.Menu>
    );
};

export default Menu;