export default function Faq() {
  return (
        <div className="container-fluid px-5 py-5 bg-info">
            <h1 className="text-center text-white fw-bold w-300">FAQ</h1>
            <p className="text-center text-mted nono-block">Here are a few more Questions you may have in mind. <br/>We have provided answers to every question in this section.</p>
            <div className="row">

                <div className="col-6 col-lg-6 col-md-6 col-sm-4 py-5">
                    <div className="accordion" id="faqAccordion">

          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How authentic are your products?
              </button>
            </h2>

            <div
              id="faq1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                They are authentic as they are sourced from the manufacturers of these items.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
               Do you recommend products?
              </button>
            </h2>

            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No, we do not offer recommendations at the moment
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                how long does it take to deliver?
              </button>
            </h2>

            <div
              id="faq3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Within Lagos, deliveries are home deliveries and takes 1–4 business days to arrive at your doorstep. Outside lagos deliveries are pick up station deliveries and takes 4–10 business days to arrive at your pick up station.
              </div>
            </div>
          </div>


          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq4"
              >
               how much does delivery cost?
              </button>
            </h2>

            <div
              id="faq4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
              It depends on delivery location and delivery method and the weight of the order.
              </div>
            </div>
          </div>
        </div>
    </div>

                <div className="col-6 col-lg-6 col-md-6 col-sm-4 py-5">

        <div className="accordion" id="faqAccordion">
        
        <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq6"
              >
                Do you deal on wholesales?
              </button>
            </h2>

            <div
              id="faq6"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Answer – Yes, for enquires on available wholesale deals, kindly send us a DM on WhatsApp on +234 708 780 8116
              </div>
            </div>
          </div>



          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq7"
              >
                Do you accept payment on delivery?
              </button>
            </h2>

            <div
              id="faq7"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We do not accept payment on delivery at the moment
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq8"
              >
                Am travelling. Can you deliver my order at a specific day and time?
              </button>
            </h2>

            <div
              id="faq8"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Due to unpredictable logistics challenges, we are unable to provide or guarantee an exact delivery day or time.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq9"
              >
                Do you swap products within an order?
              </button>
            </h2>

            <div
              id="faq9"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No We don’t
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#faq10"
              >
                can I get discount if I bulk purchase?
              </button>
            </h2>

            <div
              id="faq10"
              className="accordion-collapse collapse"
              data-bs-parent="#faq"
            >
              <div className="accordion-body">
                We do not offer discounts at the moment. Subscribe to our Newsletters so you can be the first to know when we start sending discount offers.
              </div>
            </div>
          </div>

        </div>
      </div>

   </div>
</div>
  );
}