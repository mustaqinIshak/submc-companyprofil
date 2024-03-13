import { useState,useEffect } from 'react';
import {getCategories} from '../../api/product'
function SelectCategory({title ,value, setValue,}) {
    const [data, setData] = useState([{
        value: {
            id: 0,
            name: "All"
        }, 
        label:"All"
    }])

    const loadOption = async () => {
        try{
            const arr = [{
                id: 0, 
                label:"All"
            }]
            const response = await getCategories()
            console.log(response)
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
            console.log(err.message)
        }
    };
    
    
    useEffect( () => {
      loadOption()
    },[])

    const handleOption = (value) => {
        setValue(value)
    }
    return(
        <div className="flex flex-row gap-6 items-center ">
            <label htmlFor="underline_select" className="py-2.5 text-[12px]">{title} :</label>
            <select value={value} onChange={e => setValue(e.target.value)} id="underline_select" className="block py-2.5 px-0 mx-w-sm text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                {
                    data.map((item, index) =>
                    <option className="mx-[8px] mb-[16px] text-[12px]" key={index} value={item.id}>{item.label}</option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectCategory;