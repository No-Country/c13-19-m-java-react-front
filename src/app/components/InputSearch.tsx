import SearchIcon from "../icons/SearchIcon"

const InputSearch = () => {
    return (
        <div className="flex items-center py-2  px-2 ">
            <SearchIcon />
            <input className="max-w-2xl bg-transparent w-full px-2 outline-none" placeholder="Buscar" type="search" />
        </div>
    )
}

export default InputSearch