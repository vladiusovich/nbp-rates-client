import { urls } from "@api/urls";
import { useRequest } from "@api/useRequest";
import { getDisplayedDate, getCurrentTime } from "@helpers/dateHelper";
import useCallWhenTabIsActive from "@hook/useCallWhenTabIsActive";
import ExchangeRate from "@type/exchangerates/ExchangeRate";
import typography from "@typography";
import UI from "@ui";
import React, { useState } from "react";
import S from "./Title.styled";

const Title: React.FC = () => {
	const { data: exchangeRates, isLoading } = useRequest<ExchangeRate[]>(urls.exchangerates.tables, { table: "a" })
	const [currentTime, setCurrentTime] = useState("");

	useCallWhenTabIsActive(() => (setCurrentTime(getCurrentTime())));

	const loading = isLoading || !exchangeRates;

	const exchangeRate = exchangeRates?.[0];
	const effectiveDate = getDisplayedDate(exchangeRate?.effectiveDate ?? "");

	return (
		<>
			<UI.Stack direction="column" gap={12}>
				<typography.header>
					Kalkulator walut wg średnich kursów NBP na dziś
				</typography.header>
				{loading
					? (<UI.Skeleton variant="rect" width={"250px"} height={"23px"} />)
					: (<S.small>Aktualizowane: {effectiveDate}, {currentTime}</S.small>)}
			</UI.Stack>
		</>
	);
};

export default Title;
