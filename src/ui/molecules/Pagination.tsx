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
// import { type Route } from "next";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ActiveLink } from "@/ui/atoms/ActiveLink";

// type PaginationProps = {
// 	pageNumber: number;
// 	totalPages: number;
// 	url: Route;
// };
// export const Pagination = ({ pageNumber = 1, totalPages, url }: PaginationProps) => {
// 	return (
// 		<article
// 			aria-label="pagination"
// 			className="mt-12 flex w-full items-center justify-center gap-8"
// 		>
// 			<ActiveLink
// 				className=""
// 				activeClassName=""
// 				href={pageNumber === 1 ? `${url}` : (`${url}/${pageNumber - 1}` as Route)}
// 			>
// 				<ChevronLeft size={24} color="black" />
// 			</ActiveLink>
// 			<div className="flex gap-4 rounded-lg px-4 text-white">
// 				{Array.from({ length: totalPages }, (_, i) => (
// 					<ActiveLink
// 						activeClassName={i === pageNumber - 1 ? "bg-black text-white" : ""}
// 						key={i}
// 						href={i === 0 ? `${url}` : (`${url}/${i + 1}` as Route)}
// 					>
// 						{i + 1}
// 					</ActiveLink>
// 				))}
// 			</div>
// 			<ActiveLink
// 				className=""
// 				activeClassName=""
// 				href={
// 					pageNumber === totalPages
// 						? (`${url}/${totalPages}` as Route)
// 						: (`${url}/${pageNumber + 1}` as Route)
// 				}
// 			>
// 				<ChevronRight size={24} color="black" />
// 			</ActiveLink>
// 		</article>
// 	);
// };
