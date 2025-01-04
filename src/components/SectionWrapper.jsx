const SectionWrapper = ({
  children,
  id = "Custom Section Wrapper",
  className = "",
}) => {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-4 lg:px-8 2xl:px-16 my-10 lg:my-14">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
