import Menu from "components/Menu";
import * as S from "./style";
import { ReactComponent as Set } from "assets/icons/settings.svg";
import { RoutePath } from "assets/types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";
import { Profiles } from '../../mocks/profiles';
import ProfileCard from 'components/ProfileCard';


const Profile = () => {
    const dateDescription = DateTime.now().toLocaleString({
        ...DateTime.DATE_SHORT,
        weekday: "long",
    });
    return <S.Profile>
        <Menu active={RoutePath.PROFILES} navItems={navigationItems} />
        <S.ProfileContent>
            <header>
                <S.ProfileHeaderDetails>
                    <div>
                        <S.ProfileHeaderDetailsLogo>GamePlay</S.ProfileHeaderDetailsLogo>
                        <S.ProfileHeaderDetailsDate>{dateDescription}</S.ProfileHeaderDetailsDate>
                    </div>

                        <S.ButtonSetting href='/settings/users'><Set/>Gerenciar Perfis</S.ButtonSetting>
                    
                </S.ProfileHeaderDetails>
            </header>
            <div>
                <S.ProfileProductTitle>
                    <b>Perfis</b>
                </S.ProfileProductTitle>
                <S.ProfileProductList>
                    {Profiles.map((profile: any) => (
                        <ProfileCard
                            name={profile.title}
                            image={profile.image_url}
                            key={profile.id}
                        />
                    ))}
                </S.ProfileProductList>
            </div>
        </S.ProfileContent>
    </S.Profile>;
}

export default Profile;