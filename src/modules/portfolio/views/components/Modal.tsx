import { useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element;
    onSubmit: () => void;
}

export const Modal = ({ children, onSubmit }: Props) => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <div className={`
            ${openModal ? '' : 'hidden'}
            py-12 z-10
            fixed top-0 right-0 bottom-0 left-0
            bg-secondary
        `}>
            <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-primary opacity-100 shadow-md rounded">
                    <form onSubmit={onSubmit}>
                        {children}
                    </form>
                    <div className="flex items-center justify-start w-full">
                        <button type='submit' className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Guardar</button>
                    </div>
                    <button onClick={() => setOpenModal(false)} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};