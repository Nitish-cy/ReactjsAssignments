import webHinglish from "../images/webHinglish.jpg";
import webEnglish from "../images/webEnglish.jpg";
import javaHinglish from "../images/javaHinglish.jpg";
import javaEnglish from "../images/javaEnglish.jpg";
import dataHinglish from "../images/dataScienceHinglish.jpg";
import dataEnglish from "../images/dataScienceEnglish.jpg";
import CourseCards from "./CourseCards";

function PopularProg({ title, desc }) {
	return (
		<div className=" mt-28 mb-20 flex flex-col justify-center items-center">
			<h1 className="text-indigo-500 text-4xl font-semibold mb-4">{title}</h1>
			<p className="text-lg mb-14 text-neutral-500">{desc}</p>
			<div className="carousel w-1/2">
				<div id="slide11" className="carousel-item relative w-full">
					<CourseCards
						src={webHinglish}
						cName="Full Stack Web Development"
						instructor="Hitesh Choudhary"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide66" className="btn btn-circle">
							❮
						</a>
						<a href="#slide22" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide22" className="carousel-item relative w-full">
					<CourseCards
						src={webEnglish}
						cName="Full Stack Web Development"
						instructor="Hitesh Choudhary"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide11" className="btn btn-circle">
							❮
						</a>
						<a href="#slide33" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide33" className="carousel-item relative w-full">
					<CourseCards
						src={dataHinglish}
						cName="Data Science Masters"
						instructor="Krish Naik"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide22" className="btn btn-circle">
							❮
						</a>
						<a href="#slide44" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide44" className="carousel-item relative w-full">
					<CourseCards
						src={dataEnglish}
						cName="Data Science Masters"
						instructor="Krish Naik"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide33" className="btn btn-circle">
							❮
						</a>
						<a href="#slide55" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide55" className="carousel-item relative w-full">
					<CourseCards
						src={javaHinglish}
						cName="Java with DSA and System Design"
						instructor="Priya Bhatia"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide44" className="btn btn-circle">
							❮
						</a>
						<a href="#slide66" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide66" className="carousel-item relative w-full">
					<CourseCards
						src={javaEnglish}
						cName="Java with DSA and System Design"
						instructor="Priya Bhatia"
						price="₹3500.00"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide55" className="btn btn-circle">
							❮
						</a>
						<a href="#slide11" className="btn btn-circle">
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

export default PopularProg;
