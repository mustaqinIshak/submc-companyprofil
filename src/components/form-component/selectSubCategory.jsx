import { useState,useEffect } from 'react';
import {getSubCategories} from '../../api/product'
function SelectSubCategory({title ,value, setValue, category}) {
    const [data, setData] = useState([])

    const loadOption = async () => {
        try{
            const arr = [{
                id: "0", 
                label:"All"
            }]
            const payload = {
                id: category.id
            }
            const response = await getSubCategories(payload)
            if(response) {
                response.map((item) => {
                    const payload = {
                        id: item["id"],
                        label: `${item["name"]}`,
                    }
                    arr.push(payload)
                });
                setData([...arr]);
            }
        }
        catch(err) {
            console.log(err)
        }
    };
    
    
    useEffect( () => {
        setValue({...data[0]})
        loadOption()
    },[category])
    
    const handleOption = (e) => {
        const obj= JSON.parse(e.target.value)
        console.log(JSON.parse(e.target.value))
        setValue(prevState => ({
            ...prevState,
            id:  Number(obj.id),
            label: obj.label,
        }))
    }
    return(
        <div className="flex flex-row gap-6 items-center ">
            <label htmlFor="underline_select" className="py-2.5 text-[12px]">{title} :</label>
            <select onChange={e => handleOption(e)} id="underline_select" className="block py-2.5 px-0 mx-w-sm text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                {
                    data.map((item, index) =>
                    <option className="mx-[8px] mb-[16px] text-[12px]" key={index} value={JSON.stringify(item)}>{item.label}</option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectSubCategory;