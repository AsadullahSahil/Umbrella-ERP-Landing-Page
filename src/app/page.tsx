import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Snapshot from "./components/Snapshot";
import Sales from "./components/Sales";
import Outreach from "./components/Outreach";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import PartnerLogos from "./components/PartnerLogos";

export default function HomePage() {
  return (
    <>
      {/* Gradient Wrapper */}
      <div className="min-h-screen border bg-gradient-to-br bg-linear-115 from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-linear-145 rounded-3xl">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>

      {/* Partner Logos (Outside gradient) */}
      <PartnerLogos />

      {/* Snapshot Section */}
      <Snapshot />

      {/* Sales Section */}
      <Sales />

      {/* Outreach Section */}
      <Outreach />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </>
  );
}
