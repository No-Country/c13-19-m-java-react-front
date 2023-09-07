const SelectOptions = () => {
    return (
        <select name="Filtro" placeholder="Filtro" className="bg-transparent">
            <option value="filtro" selected>Filtro</option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
        </select>
    )
}

export default SelectOptions