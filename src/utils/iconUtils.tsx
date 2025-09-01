import {
    FaFacebook,
    FaGitAlt,
    FaGithub,
    FaInstagram,
    FaJava,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaTwitter
} from "react-icons/fa";
import {
    SiApachekafka,
    SiApachemaven,
    SiCplusplus,
    SiDocker,
    SiExpress,
    SiIntellijidea,
    SiJenkins,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiPostman,
    SiSocketdotio,
    SiSpring,
    SiSwagger,
    SiTailwindcss
} from "react-icons/si";
import {DiRedis} from "react-icons/di";
import {ReactElement} from "react";

export const GetSkillIcon: Record<string, ReactElement> = {
    java: <FaJava/>,
    "c/c++": <SiCplusplus/>,
    javascript: <FaNodeJs/>,
    "spring boot": <SiSpring/>,
    react: <FaReact/>,
    "next.js": <SiNextdotjs/>,
    "tailwind css": <SiTailwindcss/>,
    git: <FaGitAlt/>,
    maven: <SiApachemaven/>,
    jenkins: <SiJenkins/>,
    docker: <SiDocker/>,
    swagger: <SiSwagger/>,
    intellij: <SiIntellijidea/>,
    postman: <SiPostman/>,
    mysql: <SiMysql/>,
    postgresql: <SiPostgresql/>,
    mongodb: <SiMongodb/>,
    kafka: <SiApachekafka/>,
    redis: <DiRedis/>,
    linkedin: <FaLinkedin/>,
    twitter: <FaTwitter/>,
    facebook: <FaFacebook/>,
    instagram: <FaInstagram/>,
    github: <FaGithub/>,
    "node.js": <FaNodeJs/>,
    "socket.io": <SiSocketdotio/>,
    express: <SiExpress/>,

};
