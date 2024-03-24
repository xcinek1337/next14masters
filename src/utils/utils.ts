export const CurrencyParser = (value: number) => {
	return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
};
// export const CurrencyParser = (amount: number) =>
//   new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(amount);
