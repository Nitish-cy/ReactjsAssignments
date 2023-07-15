import webHinglish from "../images/webHinglish.jpg";
import decode from "../images/decodeHinglish.jpg";
import javaHinglish from "../images/javaHinglish.jpg";
import dataHinglish from "../images/dataScienceHinglish.jpg";
import CourseCards from "./CourseCards";

function AffordableProg({ title, desc }) {
	return (
		<div className=" mt-28 mb-20 flex flex-col justify-center items-center">
			<h1 className="text-indigo-500 text-4xl font-semibold mb-4">{title}</h1>
			<p className="text-lg mb-14 text-neutral-500">{desc}</p>
			<div className="carousel w-1/2">
				<div id="slide10" className="carousel-item relative w-full">
					<CourseCards
						src={decode}
						cName="Decode DSA with C++"
						instructor="Sanket Singh"
						price="₹2750.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide40" className="btn btn-circle">
							❮
						</a>
						<a href="#slide20" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide20" className="carousel-item relative w-full">
					<CourseCards
						src={javaHinglish}
						cName="Java with DSA and System Design"
						instructor="Priya Bhatia"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide10" className="btn btn-circle">
							❮
						</a>
						<a href="#slide30" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide30" className="carousel-item relative w-full">
					<CourseCards
						src={dataHinglish}
						cName="Data Science Masters"
						instructor="Krish Naik"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide20" className="btn btn-circle">
							❮
						</a>
						<a href="#slide40" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide40" className="carousel-item relative w-full">
					<CourseCards
						src={webHinglish}
						cName="Full Stack Web Development"
						instructor="Hitesh Choudhary"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide30" className="btn btn-circle">
							❮
						</a>
						<a href="#slide10" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
			<p className="text-base font-semibold text-neutral-500 mt-12 cursor-pointer">
				View More
			</p>
		</div>
	);
}

export default AffordableProg;
