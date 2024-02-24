import { range } from "@helpers/random";
import UI from "@ui";
import React from "react";

interface Props {
	isLoading: boolean;
	children: React.ReactNode[];
}

const CurrenciesContainer: React.FC<Props> = ({ isLoading, children }) => {
	isLoading = true;
	const loaderComponent = range(10).map((r, i) => (
		<UI.Grid key={i} md={3} xs={12} rowSpacing={7.5} columnSpacing={6}>
			<UI.Skeleton key={r} variant="rect" width={"100%"} height={"65"} />
		</UI.Grid>));

	//rowSpacing={{ md: 7.5, xs: 3.5 }} columnSpacing={{ md: 6, xs: 1 }}
	return (
		<UI.Grid container rowSpacing={7.5} columnSpacing={6}>
			{isLoading ? loaderComponent : children.map((c, i) => (<UI.Grid rowSpacing={7.5} columnSpacing={6} key={i} md={3} xs={12}>{c}</UI.Grid>))}
		</UI.Grid>
	);
};

export default CurrenciesContainer;
