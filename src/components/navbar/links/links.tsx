"use client";
import Styles from './links.module.css'
import NavLink from "./navLink/navLink"
const Links = ({ categories }: any) => {
    return (
        <div className={Styles.links}>
            {categories.map((category:any) => {
            return (
                <NavLink path={category.path} title={category.title} key={category.slug}/>
            )
            })}
        </div>
    )
}

export default Links