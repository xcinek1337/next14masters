import { Suspense } from "react";
import { ShoppingCart } from "lucide-react";
import { HeaderInput } from "@/ui/atoms/HeaderInput";
import { Navigation } from "@/ui/molecules/Navigation";

export const Header = () => {
	return (
		<header className="border-b-2 border-b-emerald-800 bg-gray-50">
			{/* wyrzucic tag nav tylko do linkow nawigacji */}
			<nav className="mx-auto flex max-w-md items-center justify-between p-12 sm:max-w-2xl  sm:py-5 md:max-w-4xl lg:max-w-7xl">
				<Navigation />
				<Suspense>
					<HeaderInput />
				</Suspense>
				<ShoppingCart />
			</nav>
		</header>
	);
};
