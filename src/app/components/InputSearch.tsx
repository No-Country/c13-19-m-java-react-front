import SearchIcon from "../svg/SearchIcon"

const InputSearch = () => {
    return (
        <div className="flex items-center">
            <input className="max-w-xl w-full" type="search" />
            <SearchIcon />
        </div>
    )
}

export default InputSearch