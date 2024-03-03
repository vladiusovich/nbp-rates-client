import { range } from "@helpers/random";
import UI from "@ui";
import React from "react";

interface Props {
	isLoading: boolean;
	children: React.ReactNode[];
}

const CurrenciesContainer: React.FC<Props> = ({ isLoading, children }) => {
	const loaderComponent = range(10).map((r, i) => (
		<UI.Grid key={i} xs={12} sm={6} md={4} lg={3} >
			<UI.Skeleton key={r} variant="rect" width={"100%"} height={"65"} />
		</UI.Grid>));

	return (
		<UI.Grid container rowSpacing={{ xs: 3.5, sm: 6 }} columnSpacing={{ xs: 3.5, sm: 7.5 }}>
			{isLoading
				? loaderComponent
				: children.map((c, i) => (<UI.Grid key={i} xs={12} sm={6} md={4} lg={3} >{c}</UI.Grid>))}
		</UI.Grid>
	);
};

export default CurrenciesContainer;
