const FaqsList = ({ faqs }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="collapse collapse-plus bg-base-200 my-4 rounded-none border-l-4 border-l-accent"
        >
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqsList;
