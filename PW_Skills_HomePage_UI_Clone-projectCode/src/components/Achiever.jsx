import amazon from "../images/amazon.png";
import convergytics from "../images/convergytics.png";
import geekyants from "../images/geekyants.png";
import ibm from "../images/ibm.png";
import metadome from "../images/Metadome-ai.png";
import redbus from "../images/redbus.png";
import rsm from "../images/rsm.png";
import shubhkey from "../images/shubhkey.png";
import tataiq from "../images/tataiq.png";
import thermo from "../images/thermo-fisher.png";
function Achiever() {
	return (
		<div className="bg-gray-200 mb-20 pt-20 flex flex-col justify-center items-center">
			<p className="mb-20 text-4xl text-indigo-600 font-semibold">
				Our Achiever's Work with
			</p>
			<div className="carousel rounded-box w-9/12 mb-20 flex justify-between items-center gap-5 ">
				<div className="carousel-item flex justify-center items-center">
					<img src={amazon} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={convergytics} className="w-fit h-[70px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={geekyants} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={ibm} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={metadome} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={redbus} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={rsm} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={shubhkey} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={tataiq} className="w-fit h-[50px]" />
				</div>
				<div className="carousel-item flex justify-center items-center">
					<img src={thermo} className="w-fit h-[50px]" />
				</div>
			</div>
		</div>
	);
}

export default Achiever;
