import { Navigation } from "@/ui/molecules/Navigation";
import { HeaderSearch } from "@/ui/molecules/HeaderSearch";

export const Header = () => {
	return (
		<header className=" sticky top-0 z-50 flex flex-col bg-slate-50">
			<HeaderSearch />
			<Navigation />
		</header>
	);
};
