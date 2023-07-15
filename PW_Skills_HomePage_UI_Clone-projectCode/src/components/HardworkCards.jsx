function HardworkCards({ src, count, desc }) {
	return (
		<div className="flex flex-col justify-center items-center">
			<img className="w-40 mb-5" src={src} alt="img" />
			<h2 className="font-semibold text-3xl mb-5">{count}</h2>
			<p className="text-[25px] text-neutral-500 font-semibold">{desc}</p>
		</div>
	);
}
export default HardworkCards;
