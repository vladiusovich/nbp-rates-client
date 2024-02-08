import React from "react";
import Title from "./title/Title";
import S from "./Calculator.styled";
import Currencies from "./currencies/Currencies";

const Calculator: React.FC = () => {
	return (
		<S.container>
			<Title />
			<Currencies />
		</S.container>
	);
};

export default Calculator;
