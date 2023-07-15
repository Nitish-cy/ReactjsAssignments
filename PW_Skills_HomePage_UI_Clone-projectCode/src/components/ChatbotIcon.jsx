import chatbotIcon from "../images/chatbot.png";
function Chatbot() {
	return (
		<>
			<img
				className="w-14 fixed right-7 bottom-5 z-10 cursor-pointer"
				src={chatbotIcon}
				alt="chatbot"
			/>
		</>
	);
}

export default Chatbot;
