function Footer() {
    let profileCompany = JSON.parse(localStorage.getItem("profileCompany")) 

    return(
        <div className="w-full border-t-[1px] border-t-[#cccccc]">
            <div className="md:w-[1200px] pb-[100px] py-[35px] mx-auto">
                <nav>
                    <ul className="grid grid-cols-2 gap-11 justify-items-center tablet:flex tablet:justify-center">
                        <li className="mr-[10px]">
                            <dl>
                                <dt className="text-[11px] mb-[10px] font-normal pl-[1.25rem] pr-[1.25rem] w-full min-w-[85px]">TOP</dt>
                                <dd>
                                    <ul className="mx-[1.25rem]">
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >T-SHIRT</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >LONG-SHIRT</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >OUTWEAR</span>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li className="mr-[10px]">
                            <dl>
                                <dt className="text-[11px] mb-[10px] font-normal pl-[1.25rem] pr-[1.25rem] w-full min-w-[85px]">BOTTOM</dt>
                                <dd>
                                    <ul className="mx-[1.25rem]">
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >SHORT PANTS</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >LONG PANTS</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >SHOCKS</span>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li className="mr-[10px]">
                            <dl>
                                <dt className="text-[11px] mb-[10px] font-normal pl-[1.25rem] pr-[1.25rem] w-full min-w-[85px]">ACCESSORIES</dt>
                                <dd>
                                    <ul className="mx-[1.25rem]">
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >BAG</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >WALLET</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >CAP</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >JEWELRY</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >SHOES</span>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li className="mr-[10px]">
                            <dl>
                                <dt className="text-[11px] mb-[10px] font-normal pl-[1.25rem] pr-[1.25rem] w-full min-w-[85px]">ABBOUT US</dt>
                                <dd>
                                    <ul className="mx-[1.25rem]">
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >{profileCompany ? profileCompany.name : "Crasher"}</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >TERMS OF USE</span>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li className="mr-[10px] col-span-2">
                            <dl>
                                <dt className="
                                    underline 
                                    decoration-[1px] 
                                    decoration-black 
                                    underline-offset-[6px] 
                                    text-[11px] 
                                    mb-[10px] 
                                    font-normal 
                                    pl-[1.25rem] 
                                    pr-[1.25rem] 
                                    w-full 
                                    min-w-[85px]
                                    hover:cursor-pointer
                                    ">
                                        ADDRESS: {profileCompany ? profileCompany.alamat : ""}
                                </dt>
                                <dt className="
                                    underline 
                                    decoration-[1px] 
                                    decoration-black 
                                    underline-offset-[6px] 
                                    text-[11px] 
                                    mb-[10px] 
                                    font-normal 
                                    pl-[1.25rem] 
                                    pr-[1.25rem] 
                                    w-full 
                                    min-w-[85px]
                                    hover:cursor-pointer
                                    ">
                                        PHONE NUMBER: {profileCompany ? profileCompany["nomor_hp"] : ""}
                                </dt>
                                <dd>
                                    <ul className="mx-[1.25rem]">
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >INSTAGRAM</span>
                                        </li>
                                        <li>
                                            <span className="text-[11px] text-[#ccc] hover:cursor-pointer" >SHOOPEE</span>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer;