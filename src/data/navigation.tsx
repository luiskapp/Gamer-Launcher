import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/settings.svg";
import { ReactComponent as Profiles } from "assets/icons/users.svg";
import { RoutePath } from "assets/types/routes";

export const navigationItems: NavItem[] = [
	{
		icon: <Home />,
		path: RoutePath.HOME,
	},
	{
		icon: <Profiles />,
		path: RoutePath.PROFILES,
	},
	{
		icon: <Settings />,
		path: RoutePath.SETTINGS,
	},
];