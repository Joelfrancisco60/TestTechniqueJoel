import Register from "./Componants/Register/register";
import Carouselle from "./Componants/carouselles/carouselles"
import Headline from "./Componants/Headline/headline";
import Footer from "./Componants/Footer/footer";
import Video from "./Componants/Video/video";
import Faq from "./Componants/Faq/faq";

export default function Home() {
  return (
    <div>
      <Register />
      <Carouselle />
      <Video />
      <Headline />
      <Faq />
      <Footer />
    </div>
  );
}
