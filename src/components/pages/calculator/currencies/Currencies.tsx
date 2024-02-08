import UI from "@ui";
import React, { useState } from "react";
import S from "./Currencies.styled";

const Currencies: React.FC = () => {
	const currencies = [...Array(10).keys()];
    const [value, setValue] = useState("1");

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		return setValue(e.target.value);
	};

	return (
		<S.container>
			<UI.Stack direction="row" gap={2} flexWrap="wrap">
				{currencies.map(m => (<UI.TextField value={value} onChange={handleOnChange} />))}
			</UI.Stack>
		</S.container>
	);
};

export default Currencies;
