export const Search = () => {
    return (
        <div className="h-8 flex flex-row sm:ml-5">
            <input type="text" placeholder="Search..." className="
                px-3 py-1.5 
                form-control
                flex-auto
                bg-secondary border border-primary rounded-lg focus:outline-none
                transition ease-in-out"
            />
        </div>
    );
};