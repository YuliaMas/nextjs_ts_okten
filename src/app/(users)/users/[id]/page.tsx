import React from 'react';
import {userService} from "@/services/api.services";
import Link from "next/link";

type Params = { id: string};
const UserPage = async ({params}: {params: Params}) => {
    let user = await userService.getUserById(params.id);
    return (
        <div className={"text-center"}>
            <h3 className={"font-bold"} >User Page {params.id}</h3>
            <h5>Name: {user?.name} <br/> email:{user?.email}</h5>
            <p>UserName: {user?.name}</p>
            <button className={"btn bg-teal-100 border-2 p-2 rounded"}>
                <Link href={{
                    pathname: '/users/' + user?.id + '/posts',
                    query: {id: user?.id}
                }}>
                 Posts of User {user?.id}
                </Link>
            </button>
        </div>
    );
};

export default UserPage;