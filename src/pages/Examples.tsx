import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Examples from "@/components/Examples";

const ExamplesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <Examples />
      </main>
      <Footer />
    </div>
  );
};

export default ExamplesPage;
