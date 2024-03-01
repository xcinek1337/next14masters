import { Navigation } from "@/ui/molecules/Navigation";
import { HeaderPartTop } from "@/ui/molecules/HeaderPartTop";

export const Header = () => {
	return (
		<header className=" sticky top-0 z-50 flex flex-col bg-slate-50">
			<HeaderPartTop />
			<Navigation />
		</header>
	);
};
