import { ProductItemType } from "@/ui/types";

export const SingleProductAdditionalGallery = ({ product }: { product: ProductItemType['coverImage'] }) => {
    const randomImageCount = Math.random() < 0.5 ? 2 : 3;

    return (
        <div className="flex flex-row">
            {Array.from({ length: randomImageCount }).map((_, index) => (
                <img
                    key={index}
                    className="mr-2 h-10 w-10 cursor-pointer border-2 border-cyan-500"
                    src={product.src}
                ></img>
            ))}
        </div>
    );
}