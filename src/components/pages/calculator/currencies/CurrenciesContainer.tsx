import { range } from "@helpers/random";
import UI from "@ui";
import React from "react";

interface Props {
	isLoading: boolean;
	children: React.ReactNode[];
}

const CurrenciesContainer: React.FC<Props> = ({ isLoading, children }) => {
	const loaderComponent = range(10).map((r, i) => (
		<UI.Grid key={i} md={3} xs={12}>
			<UI.Skeleton key={r} variant="rectangular" width={"100%"} height={50} />
		</UI.Grid>));

	return (
		<UI.Grid container rowSpacing={{ md: 7.5, xs: 3.5 }} columnSpacing={{ md: 6, xs: 1 }}>
			{isLoading ? loaderComponent : children.map((c, i) => (<UI.Grid key={i} md={3} xs={12}>{c}</UI.Grid>))}
		</UI.Grid>
	);
};

export default CurrenciesContainer;
