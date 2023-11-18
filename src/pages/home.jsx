import { Homepage } from "../components/homepage";
import { About } from "../components/about";
import { Content } from "../components/content";

export const Home = () => {
    return(
        <div>
            <Homepage />
            <About />
            <Content />
        </div>
    );
}