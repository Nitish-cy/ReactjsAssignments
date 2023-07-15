import linkedin from "../images/linkedin-svgrepo-com.svg";
function HalloffameCards({ src, name, pos, desc }) {
	return (
		<div className="card w-[400px] bg-base-100 shadow-2xl ml-[103px] ">
			<figure className="px-10 pt-10">
				<img src={src} alt="Shoes" className="rounded-full w-28" />
			</figure>
			<div className="card-body items-center text-center">
				<h1 className="card-title text-2xl font-semibold">{name}</h1>
				<h2 className="text-base my-2 font-medium text-neutral-500">{pos}</h2>
				<p className="text-sm">{desc}</p>
				<img className="w-8 cursor-pointer" src={linkedin} alt="linkedin" />
			</div>
		</div>
	);
}

export default HalloffameCards;
