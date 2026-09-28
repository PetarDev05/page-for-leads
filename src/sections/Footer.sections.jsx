const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="relative h-70 flex flex-col items-center justify-end pb-10">
      <div className="absolute bottom-0 left-0 right-0 w-full h-full z-1 bg-[linear-gradient(-7deg,var(--main1)_0%,var(--main2)_25%,var(--main3)_35%,transparent_50%,transparent_100%)]"></div>
      <p className="text-(--heading) z-10">&copy; All Rights Reserved. Lead web page {year}</p>
    </div>
  );
};

export default Footer;
