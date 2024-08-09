import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    user: IUser;
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <li>
            <Link href={`/users/${user.id}`}> {user.id} : {user.name} </Link>
        </li>
    );
};

export default UserComponent;