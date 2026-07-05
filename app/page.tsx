import HeroSlider from "@/sections/HeroSlider/HeroSlider";
import Introduction from "@/sections/Introduction/Introduction";
import Destination from "@/sections/Destination/Destination";
import WhyChooseUs from "@/sections/WhyChooseUs/WhyChooseUs";
import PaketWisata from "@/sections/PaketWisata/PaketWisata";
import Vehicle from "@/sections/Vehicle/Vehicle";
import Review from "@/sections/Review/Review";
import MapSection from "@/sections/MapSection/MapSection";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Introduction />
      <Destination />
      <WhyChooseUs />
      <PaketWisata />
      <Vehicle variant="home" />
      <Review />
      <MapSection />
    </main>
  );
}
