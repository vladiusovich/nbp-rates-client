import UI from "@ui";
import React from "react";

interface Props {
	baseCurrency: React.ReactNode;
	children: React.ReactNode[];
}

const CurrenciesContainer: React.FC<Props> = ({ baseCurrency, children }) => {
	return (
		<UI.Grid container rowSpacing={8} columnSpacing={8}>
			<UI.Grid md={3} xs={6}>{baseCurrency}</UI.Grid>
			{children.map(c => (<UI.Grid md={3} xs={6}>{c}</UI.Grid>))}
		</UI.Grid>
	);
};

export default CurrenciesContainer;
