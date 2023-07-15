import logo from "../images/PWSkills-main.png";
import searchLogo from "../images/search-icon.svg";
function NavbarTop() {
	return (
		<div className=" mt-4 container mx-auto max-w-7xl flex justify-center gap-8 items-center ">
			<img className="mr-[40px] w-[150px]" src={logo} alt="logo" />
			<div className="flex justify-start items-center border border-zinc-400 w-[605px] rounded-md h-[43px] gap-3.5 ml-[-20px]">
				<img className="ml-4" src={searchLogo} alt="searchLogo" />
				<input
					className="w-[475px] h-[40px] font-medium text-sm  focus:outline-none"
					type="text"
					placeholder="What do you want to learn?"
				/>
			</div>
			<button className="bg-indigo-600 font-medium text-white w-[185px] h-[40px] rounded-md">
				Login / Register
			</button>
		</div>
	);
}

export default NavbarTop;
