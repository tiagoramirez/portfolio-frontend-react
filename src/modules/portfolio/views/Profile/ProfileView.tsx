import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, StatusType } from '../../../../store';

export const ProfileView = () => {
    const { activeUser, isEnglishMode } = useSelector((state: RootState) => state.portfolio);

    const { status, username: usernameAuth } = useSelector((state: RootState) => state.auth);

    const { username: usernameParam } = useParams();

    const navigate = useNavigate();

    const onRedirectEdit = () => navigate(`/${usernameAuth}/edit`);

    return (
        <div className="
            relative
            w-4/5 lg:w-1/2 mb-3 mt-16
            break-words bg-primary rounded-lg border border-primary
        ">
            <div className="w-full flex justify-center">
                <img
                    src="https://thispersondoesnotexist.com/image"
                    className="
                        max-w-[100px] sm:max-w-[150px]
                        absolute -top-16
                        shadow-xl rounded-full border-none
                    "
                />
            </div>
            {
                status == StatusType.AUTHENTICATED
                &&
                usernameAuth === usernameParam
                &&
                <button onClick={onRedirectEdit} className='
                    p-2
                    absolute right-3 top-3
                    border border-primary rounded-lg
                    shadow shadow-black bg-btnPrimary
                    hover:shadow-none hover:bg-btnSecondary hover:text-accent
                '>EDIT INFO</button>
            }
            <div className="px-6">
                <div className="text-center mt-10 sm:mt-24">
                    <h3 className="text-2xl font-semibold mb-2">{activeUser.name}</h3>
                    <div className="text-xs text-secondary uppercase"> {activeUser.locationState}, {activeUser.locationCountry}</div>
                </div>
                <div className="mt-3 py-3 border-t border-primary text-center">
                    <div className="w-full px-4">
                        <p className="font-light leading-relaxed mb-4 text-base text-secondary">
                            {
                                activeUser.hasEnglishDesc && isEnglishMode
                                    ?
                                    activeUser.englishDesc
                                    :
                                    activeUser.nativeDesc
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};
