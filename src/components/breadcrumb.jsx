import { useStates, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';


function Breadcrumb () {
    const location = useLocation();
    
    let currentLink = ''
    console.log(currentLink)
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink =+ `/${crumb}`
        return(
            <li key={crumb}>
                <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <Link to={currentLink} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{crumb}</Link>
                </div>
            </li>
        )
    })
    return(
        <nav className={`${location.pathname === "/" ? "hidden" : "flex laptop:px-[90px]"} `} aria-label="Breadcrumb">
        {/* <nav className="flex" aria-label="Breadcrumb"> */}
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li>
                    <div className="flex items-center">
                        <Link to={"/"} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">CMM Apparel</Link>
                    </div>
                </li>
               {crumbs}
            </ol>
        </nav>
    )
}

export default Breadcrumb;