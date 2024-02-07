export const CurrencyParser = (value: number) => {
	return new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(value / 100);
};
