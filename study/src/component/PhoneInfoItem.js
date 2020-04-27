import React from "react";


const PhoneInfoItem = ({ info, test }) => {
    const { id, name } = info;
    const t = test;
    return (
        info.id % 2 === { test } ? (<div> 짝수입니다..</div>) : (<div>{test}홀수입니다</div>)
    );
    /*
        return (
            <div>
                <div> id = {info.id} </div>
                <div> name = {info.name} </div>
            </div>
        );
        */
};


export default PhoneInfoItem;
