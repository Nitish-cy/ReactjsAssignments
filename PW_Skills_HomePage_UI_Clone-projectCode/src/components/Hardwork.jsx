import HardworkCards from "./HardworkCards";
import bookIcon from "../images/books-icon.svg";
import studentIcon from "../images/student-icon.svg";
import cardIcon from "../images/credit-card-icon.svg";
function Hardwork() {
	return (
		<>
			<div className="mt-20 text-indigo-600 text-[36px] font-semibold flex justify-center">
				"Pure Hardwork, No Shortcuts!"
			</div>
			<div className="mt-2.5 mb-[50px] ml-[545px] w-[125px] h-[4px] bg-amber-500"></div>
			<div className="flex justify-around items-center mt-12 mb-20">
				<HardworkCards src={bookIcon} count="600+" desc="Different Courses" />
				<HardworkCards
					src={studentIcon}
					count="700000+"
					desc="Students Enrolled"
				/>
				<HardworkCards
					src={cardIcon}
					count="10000+"
					desc="Successful Transition"
				/>
			</div>
		</>
	);
}

export default Hardwork;
