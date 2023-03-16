export const Search = () => {
    return (
        <div className='h-8 flex flex-row mb-3 sm:mb-0 sm:ml-5'>
            <input type='text' placeholder='Search...' className='
                px-3 py-1.5
                form-control
                flex-auto
                bg-input border border-secondary rounded-lg focus:outline-none
                transition duration-200 ease-in-out
            '/>
        </div>
    );
};