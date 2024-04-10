export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-zinc-700 py-6 text-center font-serif text-white">
			<span>
				by
				<a
					className="transition-all hover:text-teal-500"
					href="https://www.linkedin.com/in/marcin-chodkowski-745129284/"
				>
					{" "}
					xcinek1337{" "}
				</a>
				all rights reserved ℗ {year}
			</span>
		</footer>
	);
};
