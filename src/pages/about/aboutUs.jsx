import { useState, useEffect } from "react";
import { getIndex } from "../../api/aboutUs";

function AboutUs() {
    const [article, setArticle] = useState({})
    const handleGetAboutUs = async () => {
        try {
            const result = await getIndex()

            if(result) {
                setArticle({...result})
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleGetAboutUs()
    },[])

    return(
        <div className="flex flex-col justify-center items-center  my-[100px] mx-[30px]">
            <div className="max-w-[1400px]" dangerouslySetInnerHTML={{ __html: article.about_us }} />
        </div>
    )
}

export default AboutUs