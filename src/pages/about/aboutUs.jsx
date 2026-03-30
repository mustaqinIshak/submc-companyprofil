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
        window.scrollTo(0, 0)
        handleGetAboutUs()
    },[])

    return(
        <div className="flex flex-col w-full min-h-full pb-20 pt-10">
            <div className="max-w-4xl mx-auto px-6 tablet:px-12 w-full">
                <div className="flex flex-col gap-4 items-center text-center mb-12">
                    <h1 className="text-3xl laptop:text-4xl font-extrabold text-gray-900 tracking-widest uppercase">ABOUT US</h1>
                    <div className="w-16 h-1 bg-gray-900"></div>
                </div>

                <div 
                    className="prose prose-sm tablet:prose-base laptop:prose-lg max-w-none text-gray-700 leading-loose tracking-wide text-justify
                    [&>p]:mb-6 [&>p:last-child]:mb-0 
                    [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-4 [&>h1]:mt-8
                    [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-8
                    [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mb-3 [&>h3]:mt-6
                    [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6
                    [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-6
                    [&>li]:mb-2"
                    dangerouslySetInnerHTML={{ __html: article.about_us }} 
                />
            </div>
        </div>
    )
}

export default AboutUs