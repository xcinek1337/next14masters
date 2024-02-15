import { ActiveLink } from "@/ui/atoms/ActiveLink";
export const Navigation = () => {
	return (
		<ul className="flex">
			<li>
				<ActiveLink exact href={"/"}>
					Home
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/products"}>All</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/#"}>Categories</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/#"}>Contact</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/#"}>Login</ActiveLink>
			</li>
		</ul>
	);
};
