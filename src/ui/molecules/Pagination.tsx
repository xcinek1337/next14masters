"use client";

import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Pagination({
	totalPages,
	linkTo,
	queryParams,
	currentPage,
}: {
	totalPages: number;
	linkTo: string;
	queryParams?: string;
	currentPage: number;
}) {
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<nav className="my-4 text-center" aria-label="pagination">
			<ActiveLink
				activeClassName="text-gray-400 cursor-no-drop"
				className="mr-2 text-teal-400"
				href={
					currentPage === 1
						? ""
						: `/${linkTo}/${currentPage - 1}${queryParams ? `?${queryParams}` : ``}`
				}
			>
				{"<"}
			</ActiveLink>
			{pageNumbers.map((pageNumber) => (
				<ActiveLink
					activeClassName="border-solid border-2 px-4 border-teal-400 py-1.5 rounded-md text-teal-400 underline"
					className="mx-2 text-teal-400 text-xl"
					key={pageNumber}
					aria-label={`pagination - ${pageNumber}`}
					href={`/${linkTo}/${pageNumber}${queryParams ? `?${queryParams}` : ""}` as Route}
				>
					{pageNumber}
				</ActiveLink>
			))}
			<ActiveLink
				activeClassName="text-gray-400 cursor-no-drop"
				className="ml-2 text-teal-400"
				href={
					currentPage === totalPages
						? ""
						: `/${linkTo}/${currentPage + 1}${queryParams ? `?${queryParams}` : ``}`
				}
			>
				{">"}
			</ActiveLink>
		</nav>
	);
}
