/* eslint-disable @next/next/no-img-element */
export const SingleProductImage = ({ src, alt }: { src: string; alt: string }) => {
	return <img src={src} alt={alt} className="h-full w-full cursor-pointer max-w-lg md:max-w-2xl transition-transform hover:scale-110" />;
};
