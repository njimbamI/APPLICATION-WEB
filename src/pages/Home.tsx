import { About } from "../component/About";
import { Sociallink } from "../component/Sociallink";
import { Youtubevideo } from "../component/Youtubevideo";
import { Navigation } from "../navigation/Navigation";

export const Home = () =>{
    return (
        <div>
          <Navigation/>
          <About/>
          <Youtubevideo id="lRmyuxxMdS8"/>
          <Sociallink/>
        </div>
      );
}