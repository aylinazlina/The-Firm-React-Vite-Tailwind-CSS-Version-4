import React from 'react'
import logo from "../assets/logo.png"
import Button from './commoncomponent/Button';
const Header = () => {
    const menuitem = [
        {
            id: 1,
            name: "Home",
        },
        {
            id: 2,
            name: "Solutions",
        },
        {
            id: 3,
            name: "Cases",
        },
        {
            id: 4,
            name: "About us",
        },
        {
            id: 5,
            name: "Blog",
        },
        {
            id: 6,
            name: "Contact Us",
        }
    ];

    return (
        <div className='mt-[24px] flex justify-between items-center'>
            <picture>

                <img src={logo} alt='{logo}' />

            </picture>

            <div>
                <ul className='flex items-center gap-x-[44px] '>
                    {
                        menuitem.map((item)=>{
                            return (

                                <li key={item.id}>
                                    <a href='#' className='menu font-nunito font-extrabold text-black text-[20px] capitalize'>{item.name}</a>
                                </li>
                            )
                        })
                    }
                  
                </ul>
            </div>

            <Button btnContent="Get in Touch"
             btnDesign ={"bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg cursor-pointer"}
            />
        </div>
    )
}

export default Header
