export const CurrencyParser = (value: number) => {
	return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value / 100);
};
// export const CurrencyParser = (amount: number) =>
//   new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(amount);
