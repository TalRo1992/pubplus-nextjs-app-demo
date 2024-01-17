import { getTermsOfService } from "@/app/api/sites";
import { headers } from "next/headers";
import NavLink from "../navbar/links/navLink/navLink";
import Styles from '../navbar/navbar.module.css'

const Footer = async () => {
    return (
        <div className={Styles.container} style={{background: '#000'}}>
            <NavLink path={'/privacy-policy'} title={'Privacy Policy'}/>
            <NavLink path={'/terms-of-service'} title={'Terms Of Service'}/>

    </div>
    )
}

export default Footer