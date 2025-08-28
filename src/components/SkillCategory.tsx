// Framer Motion variants
import {motion, Variants} from "framer-motion";
import {FaCode, FaCogs, FaDatabase} from "react-icons/fa";
import {GetSkillIcon} from "@/utils/iconUtils";
import SkillCard from "@/components/SkillCard";

const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.1}},
};


// -------------------- SkillCategory Component --------------------
interface SkillCategoryProps {
    category: string;
    skills: { name: string; rating: number }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({category, skills}) => {
    const getCategoryIcon = () => {
        switch (category) {
            case "Programming Languages":
                return <FaCode className="text-green-600 w-6 h-6"/>;
            case "Frameworks & Tools":
                return <FaCogs className="text-green-600 w-6 h-6"/>;
            case "Databases":
                return <FaDatabase className="text-green-600 w-6 h-6"/>;
            default:
                return null;
        }
    };

    return (
        <div className="mb-12">
            <motion.div
                className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 justify-center sm:justify-start"
                initial={{x: -50, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 0.2, duration: 0.5}}
            >
                {getCategoryIcon()}
                {category}
            </motion.div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                {skills.map((skill) => {
                    const icon = GetSkillIcon[skill.name.toLowerCase()];
                    if (!icon) return null;
                    return <SkillCard key={skill.name} name={skill.name} rating={skill.rating} icon={icon}/>;
                })}
            </motion.div>
        </div>
    );
};

export default SkillCategory;