"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
				<div className="h-1/2 lg:h-full lg:w-1/2 relative">
					<Image className="object-contain" src="/hero.png" alt="image" fill />
				</div>

				<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
					<h1 className="text-4xl md:text-5xl font-bold">
						This is Title for this page
					</h1>
					<p className="md:text-3xl">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industrys standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<div className=" flex gap-4 w-full">
						<button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
							My Works
						</button>
						<button className="p-4 rounded-lg ring-1 ring-black">
							Contact me
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
