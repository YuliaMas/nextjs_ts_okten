import React from 'react';
import {userService} from "@/services/api.services";
import UserComponent from "@/components/UserComponent";

const UsersPage = async () => {
    let allUsers = await userService.getAllUsers();

    return (
        <div className={"text-start m-6"}>
            <h1 className={"font-bold"}>Users Page</h1>
            <ul>
                {
                    allUsers.map((user: IUser) => (
                            <UserComponent key={user.id} user={user}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersPage;