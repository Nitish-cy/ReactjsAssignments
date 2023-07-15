function NavbarBottom() {
	return (
		<div className="mt-6 container mx-auto max-w-7xl  ">
			<ul className="flex justify-center gap-11 items-center text-base">
				<div className="dropdown dropdown-hover cursor-pointer">
					<label
						tabIndex={0}
						className=" m-1 cursor-pointer font-medium flex items-center"
					>
						<a href="#">Courses</a>
						<span className=" text-sm font-black pl-2 mt-1    material-symbols-outlined">
							expand_more
						</span>
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52  "
					>
						<li>
							<a>Web Development</a>
						</li>
						<li>
							<a>Data Science</a>
						</li>
						<li>
							<a>Java</a>
						</li>
						<li>
							<a>C++</a>
						</li>
						<li>
							<a>Finance</a>
						</li>
					</ul>
				</div>
				<li className="font-medium cursor-pointer">PW Skills Lab</li>
				<li className="font-medium cursor-pointer">Job Portal</li>
				<li className="font-medium cursor-pointer">Experience Portal</li>
				<li className="font-medium cursor-pointer">Become an affiliate</li>
				<li className="font-medium cursor-pointer">Hall of fame</li>
				<div className="dropdown dropdown-hover cursor-pointer">
					<label
						tabIndex={0}
						className=" m-1 cursor-pointer font-medium flex items-center"
					>
						<a href="#">More</a>
						<span className=" text-sm font-black pl-2 mt-1    material-symbols-outlined">
							expand_more
						</span>
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[350px]  ml-[-200px]"
					>
						<div className="flex w-[320px] justify-start gap-9">
							<li>
								<a>About US</a>
							</li>
							<li>
								<a>Contact Us</a>
							</li>
						</div>
						<div className="flex w-[320px] justify-start gap-[68px]">
							<li>
								<a>FAQs</a>
							</li>
							<li>
								<a>Job Assistance</a>
							</li>
						</div>
						<div className="flex w-[320px] justify-start">
							<li>
								<a>Privacy Policy</a>
							</li>
							<li>
								<a>Terms & Conditions</a>
							</li>
						</div>
					</ul>
				</div>
			</ul>
		</div>
	);
}

export default NavbarBottom;
