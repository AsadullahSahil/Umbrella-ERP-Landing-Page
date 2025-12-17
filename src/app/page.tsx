import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Snapshot from "./components/Snapshot";
import Sales from "./components/Sales";
import Outreach from "./components/Outreach";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import PartnerLogos from "./components/PartnerLogos";
import Work from "./components/Work"

export default function HomePage() {
  return (
    <>
      {/* Gradient Wrapper */}
      <div className="relative min-h-screen border rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_image.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative">
          <Navbar showCta/>
          <main>
            <Hero />
          </main>
        </div>
      </div>

      {/* Partner Logos (Outside gradient) */}
      <PartnerLogos />

      {/* Snapshot Section */}
      <Snapshot />

      {/* Sales Section */}
      <Sales />

      {/* Outreach Section */}
      <Outreach />

      {/* Work */}
      <Work />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </>
  );
}
