import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import {setValue} from "../../redux/Input/actions";
import {getInputValueSelector} from "../../redux/Input/selectors";

const PageOne = () => {

	const dispatch = useDispatch();
	const text = useSelector(getInputValueSelector);

	const changeHandler = useCallback((event) => {
		dispatch(setValue(event.target.value));
	}, []);

	return (
		<>
            <input type='text'
				   onChange={changeHandler}
			/>
            <h1>{text}</h1>
			<NavLink to='/two'>See next page</NavLink>
		</>
	)
}
export default PageOne;
