import { FC } from "react";
const ChatBox: FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex bg-pink-800 rounded-lg shadow-lg max-w-screen-xl h-3/4">
                <div className="w-1/3 bg-pink-900 rounded-l-lg p-6 flex flex-col items-center">
                    <img
                        src="https://placehold.co/100x100"
                        alt="Profile picture of a virtual assistant character"
                        className="rounded-full mb-4"
                    />
                    <h2 className="text-white text-2xl font-bold">Negro Chan</h2>
                    <h3 className="text-pink-300 text-lg">(MAINTENANCE)</h3>
                    <p className="text-pink-300 mb-4">Ask me anything!</p>
                    <div className="flex-grow"></div>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="type something..."
                            className="w-full p-2 rounded-lg bg-pink-700 text-white placeholder-pink-300"
                        />
                    </div>
                </div>
                <div className="w-2/3 bg-pink-600 rounded-r-lg p-10">
                    <h1 className="text-white text-5xl font-bold mb-4">
                        Chat With Our <span className="text-pink-300">AI</span>
                    </h1>
                    <p className="text-white text-lg mb-4">
                        Negro Chan adalah asisten virtual yang menggunakan kecerdasan buatan untuk menyediakan bantuan dan informasi kepada
                        pengguna. Dengan kemampuan pemrosesan berdasarkan GPT-2, Negro Chan dapat menjawab pertanyaan, memberikan saran, dan
                        berinteraksi dalam berbagai konteks.
                    </p>
                    <p className="text-white text-lg mb-8">
                        Desainnya bertujuan untuk menciptakan pengalaman pengguna yang ramah dan informatif.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white text-3xl">

                        </a>
                        <a href="#" className="text-white text-3xl">

                        </a>
                        <a href="#" className="text-white text-3xl">

                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
