import Hero from "./Hero";
import Reviews from "./Reviews";
import Services from "./Services";
import Work from "./Work";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <Work />
      <section id="services">
        <Services />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      {/* <Brands/>  */}
    </>
  );
};

export default Home;
