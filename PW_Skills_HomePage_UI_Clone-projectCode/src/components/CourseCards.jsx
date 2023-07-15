function CourseCards({ src, cName, instructor, price }) {
	return (
		<div className="card w-96 bg-base-100 shadow-2xl cursor-pointer  ml-28">
			<figure className="px-10 pt-10">
				<img src={src} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title text-xl font-semibold text-indigo-500 ">
					{cName}
				</h2>
				<p className="text-[18px] font-normal mt-2">{instructor}</p>
				<p
					className="text-xl font-semibold "
					style={{ fontFamily: "'Roboto', sans-serif" }}
				>
					{price}
				</p>
			</div>
		</div>
	);
}
export default CourseCards;
