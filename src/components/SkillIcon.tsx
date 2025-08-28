import React, {JSX} from "react";

type SkillIconProps = {
    children: JSX.Element;
    title?: string;
    classProps?: string; // extra classes from parent
};

const SkillIcon: React.FC<SkillIconProps> = ({children, classProps, title}) => {
    return React.cloneElement(children, {
        className: `text-green-600 w-8 h-8 mb-2 ${classProps || ""}`,
        title
    });
};

export default SkillIcon;
