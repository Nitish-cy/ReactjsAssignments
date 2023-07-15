function ProductCards({ src, title, desc }) {
	return (
		<div className="flex flex-col justify-around items-center mb-14 h-[316px]">
			<img className="w-40 h-40 mb-5" src={src} alt="img" />
			<h2 className="font-semibold text-2xl mb-5">{title}</h2>
			<p className="text-lg text-neutral-500 font-normal w-80 text-center">
				{desc}
			</p>
		</div>
	);
}
export default ProductCards;
