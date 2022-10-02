import React from "react";
import "./About.css";
import Nav from "./Nav";
import { SiGithub ,SiLinkedin} from "react-icons/si";
export default function About() {
    return (
        <>
        <Nav />
        <div className="container-about">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content-about">
            <h1>Hi there , I am Omar Sosa 👨🏻‍💻 Fullstack Web Developer</h1>
            <p className="text-about">
                With experience building sites and web applications. I specialize in
                JavaScript 🤓 I am always looking to improve my skills to grow
                professionally in a continuous way to be able to constantly
                contribute to the work group I am with and in the future groups that
                I will be, always willing to teach and learn. ❤
            </p>
                <div className="container-icon">
                    <a className="route-about" href="https://github.com/omar1779" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="icon-about"/>
                    </a>
                    <a className="route-about" href="https://www.linkedin.com/in/omar-codex/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="icon-about"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
