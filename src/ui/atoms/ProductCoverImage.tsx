export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={320}
				height={320}
				src={src}
				alt={alt}
				className=" h-full w-full cursor-pointer object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
