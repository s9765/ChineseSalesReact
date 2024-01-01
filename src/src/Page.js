import React from 'react'
export default function Page(props) {

    const { user, pass } = props;
    //const use=props.user;

    return (
        <> {user}
        {pass}</>
    )
}
