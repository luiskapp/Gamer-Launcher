import * as S from "./style";

const ProfileCard = (props: any) => {
    return (
        <S.ContainerProfileCard>
            <S.ProfileCard >
                <S.Card>
                    <S.ImgCard href='/'>
                        <img
                            src={props.image} width={160} height={200}
                            alt={props.name}
                        />
                    </S.ImgCard>
                    <S.TextCard>
                        <p>{props.name}</p>
                    </S.TextCard>
                </S.Card>
            </S.ProfileCard>
        </S.ContainerProfileCard>
    );
}

export default ProfileCard;

