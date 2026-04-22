import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ReadingProgress from "@/components/ui/ReadingProgress";
import NeonCursor from "@/components/ui/NeonCursor";
import TerminalFrame from "@/components/ui/TerminalFrame";

export default function Home() {
    return (
        <TerminalFrame title="rakesh@portfolio ~ zsh">
            <Navbar />
            <ReadingProgress />
            <NeonCursor />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Blog />
                <Contact />
            </main>
        </TerminalFrame>
    );
}