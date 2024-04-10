import { Facebook, Instagram, Rss, Twitter } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const links = [
	["lorem ipsum", "lorem ipsum", "lorem ipsum"],
	["services", "politcy", "returns", "regulations"],
	["about us", "contact us", "join us", "resources 100% eco"],
];
const socials = [Instagram, Facebook, Rss, Twitter];

export const SiteMap = () => {
	return (
		<nav className="bg-zinc-700  font-sans text-white">
			<ul className="mx-auto flex w-full max-w-screen-xl flex-col justify-between gap-10  p-12 text-sm sm:flex-row md:pl-12">
				<ul className="flex flex-col">
					<ActiveLink className="w-0 text-xl font-bold" href="/#">
						LOGO
					</ActiveLink>

					<span className="text-teal-400">lorem impuls arbitrum tu de moon</span>

					<ul className="flex gap-2 pt-5">
						{socials.map((Social, i) => {
							return (
								<ActiveLink key={i} href="https://www.linkedin.com/in/marcin-chodkowski-745129284/">
									<Social />{" "}
								</ActiveLink>
							);
						})}
					</ul>
				</ul>

				{links.map((columns, i) => {
					return (
						<ul key={i}>
							{columns.map((link, i) => {
								return (
									<li className="cursor-pointer transition-all hover:text-teal-400" key={i}>
										{link}
									</li>
								);
							})}
						</ul>
					);
				})}
			</ul>

			<div className="mx-auto h-[1px] w-10/12 bg-slate-50"></div>
		</nav>
	);
};
