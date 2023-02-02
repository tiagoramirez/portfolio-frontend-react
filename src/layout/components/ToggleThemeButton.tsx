import { useSelector } from 'react-redux';
import { MoonIcon, SunIcon } from '../../icons';
import { RootState, setDarkMode, setLightMode, useAppDispatch } from '../../store';

export const ToggleThemeButton = () => {
    const { isDarkMode } = useSelector((state: RootState) => state.darkMode);

    const dispatch = useAppDispatch();

    function toggleTheme() {
        isDarkMode ? dispatch(setLightMode()) : dispatch(setDarkMode());
    }
    return (
        <div onClick={toggleTheme} className='
            h-8 mt-2 sm:mt-0 sm:ml-5
            flex items-center
            cursor-pointer hover:text-accent focus:outline-none
            transition duration-200 ease-in-out
        '>
            <span className="w-5 mr-2 flex justify-center items-center rounded-xl">
                <SunIcon />
            </span>
            <div className="w-8 h-4 flex items-center border border-primary rounded-full">
                <div className={`rounded-full w-3 h-3 transform mx-auto duration-300 ease-in-out ${isDarkMode ? 'bg-gray-400 translate-x-2' : 'bg-gray-600 -translate-x-2'}`}></div>
            </div>
            <span className="w-5 ml-2 flex justify-center items-center rounded-xl">
                <MoonIcon />
            </span>
        </div>
    );
};