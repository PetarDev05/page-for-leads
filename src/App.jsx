import { Toaster } from "react-hot-toast";
import About from "./sections/About.sections.jsx";
import Achievments from "./sections/Achievments.sections.jsx";
import Contact from "./sections/Contact.sections.jsx";
import Footer from "./sections/Footer.sections.jsx";
import Heading from "./sections/Heading.sections.jsx";

const App = () => {
  return (
    <main className="w-full ">
      <Heading />
      <Achievments />
      <About />
      <Contact />
      <Footer />
      <Toaster
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: "var(--success)",
              color: "var(--white)",
            },
          },
          error: {
            style: {
              background: "var(--error)",
              color: "var(--white)",
            },
          },
        }}
      />
    </main>
  );
};

export default App;
