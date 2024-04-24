import { ActiveLink } from "@/ui/atoms/ActiveLink";
export const Navigation = () => {
	return (
		<nav className="bg-zinc-700 overflow-x-scroll sm:overflow-hidden">
			<ul className="mx-auto flex w-full max-w-screen-xl py-3.5 pl-2 md:pl-12">
				<li className="">
					<ActiveLink exact href={"/"}>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink  href={"/products"}>All</ActiveLink>
				</li>
				<li>
					<ActiveLink exact href={"/categories"}>
						Categories
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/categories/accessories/1"}>Accessories</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/categories/hoodies/1"}>Hoodies</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/categories/t-shirts/1"}>T-Shirts</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
