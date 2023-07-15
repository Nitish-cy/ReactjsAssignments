import logoWhite from "../images/PWSkills-white.png";
import iso from "../images/iso-9001-2015.svg";
import fb from "../images/facebook-svgrepo-com.svg";
import insta from "../images/instagram-svgrepo-com.svg";
import telegram from "../images/telegram-svgrepo-com.svg";
import youtube from "../images/youtube-svgrepo-com.svg";
import twitter from "../images/twitter-svgrepo-com.svg";
import linkedin from "../images/linkedin-rounded-border-svgrepo-com.svg";
import discord from "../images/discord-svgrepo-com.svg";

function Footer() {
	return (
		<>
			<footer className="footer p-10 bg-[#1B2124] text-white pt-24">
				<div className="ml-14 mt-[-10px]">
					<img className="w-32" src={logoWhite} alt="logo" />
					<div className="flex gap-6 ml-1.5 mt-5">
						<span className="material-symbols-outlined">mail</span>
						<div>
							<p className="font-semibold text-base mb-1">Email us:</p>
							<p className=" text-base">support@pwskills.com</p>
						</div>
					</div>
					<div className="flex mt-5 gap-1.5">
						<img className="w-8 cursor-pointer" src={fb} alt="logo" />
						<img className="w-8 cursor-pointer" src={insta} alt="logo" />
						<img className="w-8 cursor-pointer" src={telegram} alt="logo" />
						<img className="w-8 cursor-pointer" src={youtube} alt="logo" />
						<img className="w-8 cursor-pointer" src={twitter} alt="logo" />
						<img className="w-8 cursor-pointer" src={linkedin} alt="logo" />
						<img className="w-8 cursor-pointer" src={discord} alt="logo" />
					</div>
				</div>
				<div>
					<span className="text-[26px] font-medium">PW Skills</span>
					<span className="mt-5 w-40 h-[1.5px] mb-7 bg-amber-500"></span>
					<div className="flex gap-[77px]">
						<a className="cursor-pointer text-base font-normal mb-1.5">
							About Us
						</a>
						<a className="cursor-pointer text-base font-normal mb-1.5 ">
							Contact Us
						</a>
					</div>
					<div className="flex gap-[108px]">
						<a className="cursor-pointer text-base font-normal mb-1.5">FAQs</a>
						<a className="cursor-pointer text-base font-normal mb-1.5">
							Job Assistance
						</a>
					</div>
					<div className="flex gap-10">
						<a className="cursor-pointer text-base font-normal mb-1.5">
							Privacy Policy
						</a>
						<a className="cursor-pointer text-base font-normal mb-1.5">
							Terms & Conditions
						</a>
					</div>
				</div>
				<div>
					<span className="text-[26px] font-medium">Products</span>
					<span className="mt-5 w-[165px] h-[1.5px] mb-7 bg-amber-500"></span>
					<a className="cursor-pointer text-base font-normal mb-1.5">
						PW Skills Lab
					</a>
					<a className="cursor-pointer text-base font-normal mb-1.5 ">
						Job Portal
					</a>
					<a className="cursor-pointer text-base font-normal mb-1.5">
						Experience Portal
					</a>
					<a className="cursor-pointer text-base font-normal mb-1.5">
						Become an Affiliate
					</a>
					<a className="cursor-pointer text-base font-normal mb-1.5">
						Hall Of Fame
					</a>
				</div>
			</footer>
			<div className="bg-[#1B2124] text-white pb-10 mt-[-80px]">
				<img className="ml-24 w-20" src={iso} alt="ISOLogo" />
				<p className="mt-4 ml-[100px]">ISO 9001</p>
			</div>
		</>
	);
}
export default Footer;
