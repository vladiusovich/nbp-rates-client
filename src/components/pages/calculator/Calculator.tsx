import React from "react";
import Title from "./title/Title";
import Currencies from "./currencies/Currencies";
import UI from "@ui";

const Calculator: React.FC = () => {
	return (
		<UI.Stack
			direction="column"
			gap={60}
		>
			<Title />
			<Currencies />
		</UI.Stack>
	);
};

export default Calculator;
