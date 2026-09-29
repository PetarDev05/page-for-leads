import ContactForm from "../components/ContactForm.components.jsx";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full pt-20 px-5 md:px-10 flex flex-col items-center justify-center gap-15">
      <h2 className="text-3xl text-(--heading) font-semibold text-center">
        Pošalji prijavu
      </h2>
      <ContactForm/>
    </section>
  );
};

export default Contact;
