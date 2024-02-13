import { range } from "@helpers/random";
import UI from "@ui";
import React from "react";

interface Props {
	isLoading: boolean;
	children: React.ReactNode[];
}

const CurrenciesContainer: React.FC<Props> = ({ isLoading, children }) => {

	const loaderComponent = range(10).map(r => (
		<UI.Grid md={3} xs={6}>
			<UI.Skeleton key={r} variant="rectangular" width={"100%"} height={50} />
		</UI.Grid>));

	return (
		<UI.Grid container rowSpacing={8} columnSpacing={8}>
			{isLoading ? loaderComponent : children.map(c => (<UI.Grid md={3} xs={6}>{c}</UI.Grid>))}
		</UI.Grid>
	);
};

export default CurrenciesContainer;
