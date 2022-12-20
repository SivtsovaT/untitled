import React from "react";
import {useSelector} from "react-redux";
import {getInputValueSelector} from "../../redux/Input/selectors";
import {NavLink} from "react-router-dom";

const PageTwo = () => {
    const text = useSelector(getInputValueSelector);
    return (
        <>
            <h1>hello, {text}</h1>
            <NavLink to='/'>Go back</NavLink>
        </>
    );
}

export default PageTwo;
