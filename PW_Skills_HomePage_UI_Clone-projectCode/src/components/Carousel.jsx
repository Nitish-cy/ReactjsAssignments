import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import carousel3 from "../images/carousel3.jpg";
import carousel4 from "../images/carousel4.jpg";
function Carousel() {
	return (
		<>
			<div className="carousel w-full mt-5">
				<div id="item1" className="carousel-item w-full">
					<img src={carousel1} className="w-full" />
				</div>
				<div id="item2" className="carousel-item w-full">
					<img src={carousel2} className="w-full" />
				</div>
				<div id="item3" className="carousel-item w-full">
					<img src={carousel3} className="w-full" />
				</div>
				<div id="item4" className="carousel-item w-full">
					<img src={carousel4} className="w-full" />
				</div>
			</div>
			<div className="flex justify-center w-full gap-5 mt-[-55px]  ">
				<a
					href="#item1"
					className="text-[35px] delay-150 ease-in-out font-black hover:text-white text-slate-500"
				>
					.
				</a>
				<a
					href="#item2"
					className="text-[35px] delay-150 ease-in-out font-black hover:text-white text-slate-500 "
				>
					.
				</a>
				<a
					href="#item3"
					className="text-[35px] delay-150 ease-in-out font-black hover:text-white text-slate-500 "
				>
					.
				</a>
				<a
					href="#item4"
					className="text-[35px] delay-150 ease-in-out font-black hover:text-white text-slate-500 "
				>
					.
				</a>
			</div>
		</>
	);
}
export default Carousel;
