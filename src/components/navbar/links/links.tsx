"use client";

import { useState } from 'react'
import Styles from './links.module.css'
import NavLink from "./navLink/navLink"
const Links = () => {
    const links:object[] = [
        {
            title: 'Home Page',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        }
    ]
    const [open, setOpen] = useState<boolean>(false);
    const sesstion = true;
    const isAdmin = true;
    return (
        <div className={Styles.links}>
            {links.map((link:any, index) => {
            return (
                <NavLink path={link.path} title={link.title} key={index}/>
            )
            })}
            {sesstion ? (
                <>
                {isAdmin && (<NavLink path={'/admin'} title={'Admin'}/>)}
                <NavLink path={'/logout'} title={'Logout'}/>
                </>
            ) : (
                <NavLink path={'/register'} title={'Register'}/>
            )}
            <button onClick={() =>setOpen(prev => !prev)}>Menu</button>
            {open && 
                <div className={Styles.mobileLinks}>
                    {links.map((link:any, index) => {
                        return <NavLink path={link.path} title={link.title} key={index}/>;
                    })}
                </div>}
        </div>
    )
}

export default Links