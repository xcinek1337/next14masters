import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	pageNumber: number;
	totalPages: number;
	url?: Route;
};

export const Pagination = ({ pageNumber = 1, totalPages }: PaginationProps) => {
	return (
		<div aria-label="pagination" className="flex w-full items-center justify-center gap-4">
			<ActiveLink href={pageNumber === 1 ? "/products" : `/products/${pageNumber - 1}`}>
				{"<"}
			</ActiveLink>
			<div className="flex gap-4 rounded-lg px-4">
				{Array.from({ length: totalPages }, (_, i) => {
					return (
						<ActiveLink
							exact
							activeClassName={i + 1 === pageNumber ? "underline" : ""}
							key={i}
							href={`/products/${i + 1}`}
						>
							{i + 1}
						</ActiveLink>
					);
				})}
			</div>
			<ActiveLink
				href={pageNumber === totalPages ? `/products/${totalPages}` : `/products/${pageNumber + 1}`}
			>
				{">"}
			</ActiveLink>
		</div>
	);
};