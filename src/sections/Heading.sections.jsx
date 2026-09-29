const Heading = () => {
  return (
    <section className="relative w-full py-40 px-5 md:px-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-15 lg:gap-30">
      <div className="w-full max-w-120 flex flex-col items-center md:items-start justify-center gap-5">
        <h1 className="max-md:text-center text-3xl md:text-5xl lg:text-6xl text-(--heading) font-semibold">
          Dobro došli na moju kontakt stranicu
        </h1>
        <p className="max-md:text-center max-w-80 md:max-w-150 text-sm sm:text-md md:text-lg text-(--paragraph)">
          Pošaljite svoju prijavu putem forme i nakon što je pregledam, počinjem da pravim vaš personalizovani plan treninga i ishrane.
        </p>
        <a href="#contact" className="px-4 md:px-6 py-2 md:py-3 bg-(--primary) text-(--button-text) cursor-pointer text-sm md:text-md rounded-md">
          Kontaktiraj me
        </a>
      </div>
      <img
        src="/trainer.jpg"
        alt="trainer's image"
        className="w-full max-w-50 md:max-w-70 lg:max-w-80 rounded-full md:rounded-3xl"
      />
      <div className="absolute inset-0 w-full h-full -z-1 bg-[linear-gradient(165deg,var(--main1)_0%,var(--main2)_25%,var(--main3)_35%,transparent_50%,transparent_100%)]"></div>
    </section>
  );
};

export default Heading;
