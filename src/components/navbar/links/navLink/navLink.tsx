"use client";
import React from 'react';
import styles from './navLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    path: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    const pathName = usePathname();
    return (
        <Link href={path} className={`${styles.container} ${pathName === path && styles.active}`}>{title}</Link>
    );
};

export default NavLink;
