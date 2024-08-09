import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "UsersLayouts metadata",
};

type PropsType = {
    children: React.ReactNode;
}
const UsersLayout = ({children}: PropsType) => {
    return (
        <div className={""}>
            <h3 className={"font-bold m-6"}>   Users Layout Start  </h3>

            {children}

            <h3 className={"font-bold m-6"}>  Users Layout End </h3>
        </div>
    );
};

export default UsersLayout;