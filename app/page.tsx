import { productData } from "@/constants";
import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-screen bg-primary-20 flexCenter">
			<section className="flex flex-col md:flex-row bg-white rounded-xl max-w-[350px] overflow-hidden md:max-w-fit">
				<div>
					<div>
						<Image
							alt="perfume bottle"
							src="/image-product-mobile.jpg"
							width={350}
							height={300}
							className="md:hidden"
						/>
						<Image
							alt="perfume bottle"
							src="/image-product-desktop.jpg"
							width={300}
							height={500}
							className="hidden md:block"
						/>
					</div>
				</div>
				<div className="p-6 flex flex-col gap-4 md:max-w-[300px] md:gap-6 md:p-8">
					<div className="flex flex-col gap-4">
						<span className="uppercase tracking-[.2rem]">
							{productData.category}
						</span>
						<h2 className="text-3xl font-bold">{productData.title}</h2>
						<p className="leading-relaxed">{productData.description}</p>
					</div>
					<div className="flex gap-4">
						<span className="font-['Fraunces'] text-primary-10 font-bold text-3xl">
							{productData.salePrice}
						</span>
						<span className="line-through mt-2">{productData.listPrice}</span>
					</div>
					<div>
						<button
							type="button"
							className="w-full flexCenter text-white bg-primary-10 rounded-lg gap-4 py-4 hover:bg-primary-11"
						>
							<Image
								src="/icon-cart.svg"
								alt="shopping cart"
								width={16}
								height={16}
							/>
							<label className="font-bold hover:cursor-pointer">
								Add to Cart
							</label>
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
