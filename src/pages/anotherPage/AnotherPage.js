import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
const AnotherPage = () => {
    const { user } = useContext(GlobalContext);
    return (
        <div>
            Sony
           {user.status}
        </div>
    )
}

export default AnotherPage
