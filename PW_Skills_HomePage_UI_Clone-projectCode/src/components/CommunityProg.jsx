import stock from "../images/stock.jpg";
import cpp from "../images/c++.jpg";
import business from "../images/business.jpg";
import java from "../images/javaInterview.jpg";
import CourseCards from "./CourseCards";

function CommunityProg({ title, desc }) {
	return (
		<div className=" mt-28 mb-20 flex flex-col justify-center items-center">
			<h1 className="text-indigo-500 text-4xl font-semibold mb-4">{title}</h1>
			<p className="text-lg mb-14 text-neutral-500">{desc}</p>
			<div className="carousel w-1/2">
				<div id="slide101" className="carousel-item relative w-full">
					<CourseCards
						src={stock}
						cName="Stock Market Fundamentals"
						instructor="Kanan Bahl"
						price="FREE"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide401" className="btn btn-circle">
							❮
						</a>
						<a href="#slide201" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide201" className="carousel-item relative w-full">
					<CourseCards
						src={cpp}
						cName="C++ Foundation"
						instructor="Urvi Goel"
						price="FREE"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide101" className="btn btn-circle">
							❮
						</a>
						<a href="#slide301" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide301" className="carousel-item relative w-full">
					<CourseCards
						src={business}
						cName="Business Analytics Foundations"
						instructor="Gopal Sharma"
						price="FREE"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide201" className="btn btn-circle">
							❮
						</a>
						<a href="#slide401" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide401" className="carousel-item relative w-full">
					<CourseCards
						src={java}
						cName="Cracking the Coding Interview in Java - Foundation"
						instructor="Vishwa Mohan"
						price="FREE"
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide301" className="btn btn-circle">
							❮
						</a>
						<a href="#slide101" className="btn btn-circle">
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

export default CommunityProg;
