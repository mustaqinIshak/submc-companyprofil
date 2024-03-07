function Select({title ,items, value, setValue,}) {
    return(
        <div className="flex flex-row gap-6 items-center ">
            <label htmlFor="underline_select" className="py-2.5 text-sm">{title} :</label>
            <select value={value} onChange={e => setValue(e.target.value)} id="underline_select" className="block py-2.5 px-0 mx-w-sm text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                {
                    items.map((item, index) =>
                    <option className="mx-[8px] mb-[16px]" key={index} value={item}>{item}</option>
                    )
                }
            </select>
        </div>
    )
}

export default Select;