import ayush from "../images/ayush.jpeg";
import gaurav from "../images/gaurav.jpeg";
import dharmendra from "../images/dharmendra.jpeg";
import sunil from "../images/sunil.jpeg";
import sai from "../images/sai.jpeg";
import HalloffameCards from "./HalloffameCards";
function HallofFame() {
	return (
		<div className="mt-[85px] mb-20  flex flex-col justify-center items-center">
			<p className="text-4xl font-semibold text-indigo-600 mb-24">
				Hall of fame
			</p>
			<div className="carousel w-1/2">
				<div id="slide1" className="carousel-item relative w-full">
					<HalloffameCards
						src={sunil}
						name="SUNIL RAMESH DODDAMANI"
						pos="Statistician 2, Epsilon"
						desc="Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you to the entire ineuron team."
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<HalloffameCards
						src={sai}
						name="Sai Krishna Gorantla"
						pos="Data Analyst, Tredence Analytics"
						desc="Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics & it's all because of the excellent course called full stack data scientist in the ineuron."
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<HalloffameCards
						src={dharmendra}
						name="Dharmendra Kumar Yadav"
						pos="Data Science Associate, Cognizant"
						desc="Ineuron.ai came into existence exactly when I needed it the most. With the help of ineuron courses and internship, hard work towards its vision I made transition into Data science and joined Cognizant as Associate Data scientist."
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<HalloffameCards
						src={gaurav}
						name="Gaurav Varma"
						pos="Assistant Manager- Data Analyst, Biocube Matrics Pvt Ltd"
						desc="I joined FSDS NOV'21 batch, and it really helped me make that transition. I sincerely thank the whole Ineuron team, especially Sudhanshu Sir and Krish Sir, for their support and guidance."
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide5" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide5" className="carousel-item relative w-full">
					<HalloffameCards
						src={ayush}
						name="Ayushman Misra"
						pos=""
						desc="I have studied from Krish Sir's YouTube videos and ineuron, which helped me to understand the thorough concepts."
					/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
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

export default HallofFame;
