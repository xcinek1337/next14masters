"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState } from "react";

export const ProductsFilter = () => {
	const searchParams = useSearchParams();
	const getSortByInitialValue = () => {
		if (!searchParams.get("sortBy")) {
			return "no-sort";
		}
		return searchParams.get("sortBy") || "no-sort";
	};

	const [sortBy, setSortBy] = useState(getSortByInitialValue());

	const router = useRouter();

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
		if (e.target.value === "no-sort") {
			router.push(`/products/1`);
		} else {
			router.push(`/products/1?sortBy=${e.target.value}`);
		}
	};

	return (
		<select
			className="w-fit cursor-pointer rounded-md border border-r-8 border-transparent px-2 py-1 text-xs font-light sm:outline outline-2 sm:text-sm lg:mt-1"
			value={sortBy}
			onChange={handleChange}
		>
			{/* {options.map((option) => {
				<option key={option.value} data-testid={option["data-testid"]} value={option.value}>
					{option.label}
				</option>;
			})} */}
			<option data-testid="sort-by-price" value={"price-asc"}>
				Price (Low to High)
			</option>
			<option value={"price-desc"}>Price (High to Low)</option>
			<option data-testid="sort-by-rating" value={"rat-asc"}>
				Rating (Low to High)
			</option>
			<option value={"rat-desc"}>Rating (High to Low)</option>
			<option value={"no-sort"}>All</option>
		</select>
	);
};
