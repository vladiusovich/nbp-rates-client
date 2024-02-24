import React from "react";
import Title from "./title/Title";
import S from "./Calculator.styled";
import Currencies from "./currencies/Currencies";

const Calculator: React.FC = () => {
	return (
		<>
			<Title />
			<Currencies />
		</>
	);
};

export default Calculator;
