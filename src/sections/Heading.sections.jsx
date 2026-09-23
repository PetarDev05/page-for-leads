const Heading = () => {
  return (
    <section className="w-full py-20 px-5 md:px-10 flex flex-col items-center gap-4">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-(--heading) font-semibold text-center">
        Welcome to my contact page
      </h1>
      <p className="max-w-150 text-center text-sm sm:text-md md:text-lg text-(--paragraph)">
        Submit your aplication below and after I review it, I'll start working
        on your training and nutrition plan.
      </p>
    </section>
  );
};

export default Heading;
