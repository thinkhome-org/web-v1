import Image from "next/image";
import { FloatingDockDemo } from "./components/dock";
import { Hero } from "./components/hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MiseCile } from "./components/mise_cile";

export default function Home() {
    return (
        <main>
            <BlurFade>
                <Hero />
            </BlurFade>
            <BlurFade>
                <MiseCile />
            </BlurFade>
        </main>
    );
}
