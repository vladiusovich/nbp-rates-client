import { urls } from "@api/urls";
import { useRequest } from "@api/useRequest";
import { getCurrentTime } from "@helpers/dateHelper";
import useCallWhenTabIsActive from "@hook/useCallWhenTabIsActive";
import ExchangeRate from "@type/exchangerates/ExchangeRate";
import typography from "@typography";
import UI from "@ui";
import React, { useState } from "react";

const Title: React.FC = () => {
	const { data: exchangeRates, isLoading } = useRequest<ExchangeRate[]>(urls.exchangerates.tables, { table: "a" })
	const [currentTime, setCurrentTime] = useState("");

	useCallWhenTabIsActive(() => (setCurrentTime(getCurrentTime())));

	const loading = isLoading || !exchangeRates;

	const exchangeRate = exchangeRates?.at(0);

	return (
		<>
			<typography.h4>
				Kalkulator walut wg średnich kursów NBP na dziś
			</typography.h4>
			{loading ? (<UI.Skeleton variant="text" width={250} height={23} />) : (<typography.small>
				Aktualizowane: {exchangeRate?.effectiveDate}, {currentTime}
			</typography.small>)}
		</>
	);
};

export default Title;
