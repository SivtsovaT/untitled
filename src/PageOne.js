import React, {useState} from "react";

const PageOne = ({submit, text, value, setValue}) => {

	return (
		<>
			<button onClick={submit}>press me</button>
            <input type='text'
				   value={value}
				   onChange={(e) => setValue(e.target.value)}
			/>
            <h1>{text}</h1>

		</>
	)
}
export default PageOne;