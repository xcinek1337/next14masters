import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
};

export const Pagination = ({ currentPage = 1, totalPages }: PaginationProps) => {
	return (
		<div aria-label="pagination" className="flex w-full items-center justify-center gap-4">
			<ActiveLink  href={currentPage === 1 ? "/products" : `/products/${currentPage - 1}`}>
				{"<"}
			</ActiveLink>
			<div className="flex gap-4 rounded-lg px-4">
				{Array.from({ length: totalPages }, (_, i) => {
					console.log(i, currentPage);
					return (
						<ActiveLink
							exact
							activeClassName={i + 1 === currentPage ? "underline" : ""}
							key={i}
							href={`/products/${i + 1}`}
						>
							{i + 1}
						</ActiveLink>
					);
				})}
			</div>
			<ActiveLink
				
				href={
					currentPage === totalPages ? `/products/${totalPages}` : `/products/${currentPage + 1}`
				}
			>
				{">"}
			</ActiveLink>
		</div>
	);
};
