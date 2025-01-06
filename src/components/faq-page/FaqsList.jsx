import Reveal from "../Reveal";

const FaqsList = ({ faqs }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      {faqs.map((faq, idx) => (
        <>
          <Reveal key={faq.id} className="my-3">
            <div className="collapse collapse-plus bg-base-200 rounded-none border-l-4 border-l-accent border-r-4 border-r-accent">
              <input
                type="radio"
                name="my-faqs"
                defaultChecked={idx === 0 ? true : false}
              />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </Reveal>
        </>
      ))}
    </div>
  );
};

export default FaqsList;
