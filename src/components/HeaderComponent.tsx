import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div>
            <ul className={"flex justify-evenly m-6 font-bold border-2 bg-amber-300"}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/users'}>Users</Link></li>
                <li><Link href={'/posts'}>Posts</Link></li>
                <li><Link href={'/comments'}>Comments</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;