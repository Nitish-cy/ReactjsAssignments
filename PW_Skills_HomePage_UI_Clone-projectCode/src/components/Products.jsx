import ProductCards from "./ProductCards";
import affiliate from "../images/affilitatePortal-icon.png";
import hof from "../images/halloffame-icon.svg";
import intern from "../images/Internship-icon.png";
import job from "../images/jobPortal-icon.png";
import neurolab from "../images/neurolab-icon.svg";
function Products() {
	return (
		<>
			<div className="mt-28 text-indigo-600 text-[36px] font-semibold flex justify-center">
				Our Products
			</div>
			<div className="flex flex-wrap justify-around items-center mt-12 mb-20">
				<ProductCards
					src={neurolab}
					title="PW Skills Lab"
					desc="Supercharge your project development with our robust lab."
				/>
				<ProductCards
					src={job}
					title="Job Portal"
					desc="Use exceptional templates for a stand-out resume minus the sign up process."
				/>
				<ProductCards
					src={intern}
					title="Experience Portal"
					desc="PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects."
				/>
				<ProductCards
					src={affiliate}
					title="Become an Affiliate"
					desc="Explore affiliate marketing opportunities with PW Skills and attain financial freedom."
				/>
				<ProductCards
					src={hof}
					title="Hall Of Fame"
					desc="Our student placements and 100K+ career transitions speak volumes about our courses."
				/>
			</div>
		</>
	);
}

export default Products;
