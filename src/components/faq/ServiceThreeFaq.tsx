

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    isOpen?: boolean;
}

const FAQItemComponent = ({ item }: { item: FAQItem }) => (
    <div className="accordion-items">
        <h2 className="accordion-header">
            <button
                className={`accordion-buttons ${item.isOpen ? '' : 'collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded={item.isOpen ? 'true' : 'false'}
                aria-controls={item.id}
            >
                {item.question}
                <span className="accordion-icon"></span>
            </button>
        </h2>
        <div
            id={item.id}
            className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
            data-bs-parent="#accordionExample1"
        >
            <div className="accordion-body">
                <p>{item.answer}</p>
            </div>
        </div>
    </div>
);

const ServiceThreeFaq = () => {
    const faqs: FAQItem[] = [
        {
            id: 'collapseOne1',
            question: 'How long does it take to get started?',
            answer: 'We can typically kick off a project within 1 to 2 weeks of finalizing our agreement. The exact timing depends on resource availability and how quickly we can complete the initial discovery phase and align on project specifications.',
            isOpen: true
        },
        {
            id: 'collapseTwo2',
            question: 'What is your typical working process?',
            answer: 'Our process follows four key phases: discovery & analysis, strategy & UX prototyping, visual design & implementation, and rigorous QA testing followed by launch. We prioritize transparency, feedback loops, and regular status check-ins.'
        },
        {
            id: 'collapseThree3',
            question: 'How do you usually start new collaborations?',
            answer: 'Every new collaboration begins with an initial consultation to understand your business goals. We then perform a detailed analysis of your requirements to provide a tailored proposal outlining scope, timelines, and pricing before initiating kickoff.'
        },
        {
            id: 'collapseFour4',
            question: 'What\'s the average project duration?',
            answer: 'Most branding and standard website projects take between 4 to 8 weeks, while complex digital products or custom applications can range from 3 to 6 months depending on requirements, features, and target integrations.'
        },
        {
            id: 'collapseFive5',
            question: 'Can we start the design without wireframes?',
            answer: 'While we strongly recommend wireframing to establish structural hierarchy and user experience, we can adapt to your needs if you have existing design guidelines. However, starting with wireframes ensures a smoother visual design process.'
        }
    ];

    return (
        <div className="app-faq-area service-faq-style p-relative pb-140">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="app-faq-heading p-relative mb-80 text-center">
                            <h3 className="tp-section-title-mango fs-100">Frequently asked questions</h3>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="app-faq-wrap">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample1">
                                    {faqs.map((faq) => (
                                        <FAQItemComponent key={faq.id} item={faq} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceThreeFaq;
