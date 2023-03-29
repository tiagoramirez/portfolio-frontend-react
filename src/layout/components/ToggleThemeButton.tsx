import { useSelector } from 'react-redux';
import { MoonIcon, SunIcon } from '../../icons';
import { RootState, useAppDispatch } from '../../store';
import { setDarkMode, setLightMode } from '../../store/theme';

export const ToggleThemeButton = () => {
    const dispatch = useAppDispatch();
    
    const { isDarkMode } = useSelector((state: RootState) => state.darkMode);

    const toggleTheme = () => isDarkMode ? dispatch(setLightMode()) : dispatch(setDarkMode());

    return (
        <div
            onClick={toggleTheme}
            className='
                group
                sm:ml-5
                flex items-center
                cursor-pointer
                clickable
            '
        >
            <SunIcon className='h-6 mr-0.5' />
            <div className='w-8 h-4 flex items-center rounded-full'>
                <div className={`rounded-full w-3 h-3 transform mx-auto duration-300 ease-in-out bg-[var(--color-text-primary)] group-hover:bg-[var(--color-text-accent)] ${isDarkMode ? 'translate-x-2' : '-translate-x-2'}`}></div>
            </div>
            <MoonIcon className='h-6 ml-0.5' />
        </div>
    );
};