const Heading = () => {
  return (
    <section className="relative w-full py-40 px-5 md:px-10 flex flex-row items-center justify-center gap-20">
      <div className="w-full max-w-120 flex flex-col items-start justify-center gap-5">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-(--heading) font-semibold">
          Welcome to my contact page
        </h1>
        <p className="max-w-150 text-sm sm:text-md md:text-lg text-(--paragraph)">
          Submit your aplication below and after I review it, I'll start working
          on your training and nutrition plan.
        </p>
        <button className="px-6 py-3 bg-(--primary) text-(--button-text) cursor-pointer text-md rounded-md">
          Let's get started
        </button>
      </div>
      <img
        src="/trainer.jpg"
        alt="trainer's image"
        className="w-full max-w-80 rounded-3xl"
      />
      <div className="absolute inset-0 w-full h-full -z-1 bg-[linear-gradient(165deg,var(--main1)_0%,var(--main2)_25%,var(--main3)_35%,transparent_50%,transparent_100%)]"></div>
    </section>
  );
};

export default Heading;
