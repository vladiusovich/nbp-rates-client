import typography from "@typography";
import React from "react";

const Title: React.FC = () => {
	return (
		<>
			<typography.h4>
				Kalkulator walut wg średnich kursów NBP na dziś, 6 lutego 2024
			</typography.h4>
			<typography.small>
				Aktualizowane: 03-02-2024, 14:35
			</typography.small>
		</>
	);
};

export default Title;
