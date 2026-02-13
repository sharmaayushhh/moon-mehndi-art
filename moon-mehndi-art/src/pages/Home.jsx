import { motion } from "framer-motion";
import MoonHero from "../components/MoonHero";
import FeaturedGallery from "../components/FeaturedGallery";
import HomeSlideshow from "../components/HomeSlideshow";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MoonHero />
      <FeaturedGallery />
      <HomeSlideshow />
    </motion.div>
    
  );
}

export default Home;
