import React, {JSX} from "react";

import {motion, Variants} from "framer-motion";
import SkillIcon from "@/components/SkillIcon";


interface SkillCardProps {
    name: string;
    rating: number;
    icon: JSX.Element;
}

const skillCardVariants: Variants = {
    hidden: {opacity: 0, scale: 0.85},
    visible: {opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}},
};

const SkillCard: React.FC<SkillCardProps> = ({name, rating, icon}) => (
    <motion.div
        className="flex flex-col items-center p-4 sm:p-6 bg-green-50 rounded-xl shadow-lg cursor-pointer w-full"
        variants={skillCardVariants}
        whileHover={{scale: 1.05, rotate: 2}}
        whileTap={{scale: 0.95}}
    >
        <SkillIcon
            title={name}
            classProps="transition-transform duration-200 transform hover:scale-110"
        >
            {icon}
        </SkillIcon>

        <p className="text-gray-800 font-medium mt-2 mb-2 text-center">{name}</p>

        {/*<div className="flex">*/}
        {/*    {Array.from({length: 5}).map((_, i) =>*/}
        {/*        i < rating ? (*/}
        {/*            <AiFillStar key={i} className="text-yellow-400 w-5 h-5"/>*/}
        {/*        ) : (*/}
        {/*            <AiOutlineStar key={i} className="text-gray-300 w-5 h-5"/>*/}
        {/*        )*/}
        {/*    )}*/}
        {/*</div>*/}
    </motion.div>
);

export default SkillCard;