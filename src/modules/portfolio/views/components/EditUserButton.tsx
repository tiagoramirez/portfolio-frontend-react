import { useEdit } from '../../hooks';

export const EditUserButton = () => {

    const { isAuthenticated, isEditPage, isSameUserParamAuth, onRedirectEdit } = useEdit();

    if (isAuthenticated && isSameUserParamAuth && !isEditPage) {
        return (
            <button onClick={onRedirectEdit} className='
                p-2
                absolute right-3 top-3
                border border-primary rounded-lg
                shadow shadow-black bg-btnPrimary
                hover:shadow-none hover:bg-btnSecondary hover:text-accent
            '>EDIT INFO</button>
        );
    }
    return <></>;
};