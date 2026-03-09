// src/components/Faq.jsx
export default function Faq() {
  const faqs = [
    { q: "How authentic are your products?", a: "They are authentic as they are sourced from manufacturers." },
    { q: "Do you recommend products?", a: "No, we do not offer recommendations at the moment." },
    { q: "How long does it take to deliver?", a: "Within Lagos: 1–4 business days. Outside Lagos: 4–10 business days." },
    { q: "How much does delivery cost?", a: "Depends on location, method, and weight of the order." },
  ];

  return (
    <div className="flex px-5 py-5 bg-info">
      <h1 className="text-center text-white fw-bold">FAQ</h1>
      <p className="text-center text-muted">
        Here are a few questions you may have in mind.<br/>
        We have provided answers to each question in this section.
      </p>

      <div className="accordion" id="faqAccordion">
        {faqs.map((item, i) => (
          <div className="accordion-item mb-2" key={i}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq${i}`}
              >
                {item.q}
              </button>
            </h2>
            <div
              id={`faq${i}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}