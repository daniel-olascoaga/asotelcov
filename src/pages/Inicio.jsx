import CarouselInicio from "../components/Carousel/Carousel";
import Landing from "../components/Landing/Landing";

import "./Styles.css";

export default function Inicio() {

  return (
    <div className="containerHome mb-20">
      <CarouselInicio/>
      <Landing/>*
    </div>
  );
}