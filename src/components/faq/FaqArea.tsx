
const FaqArea = () => {
    return (
        <div className="app-faq-area p-relative pb-120">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="app-faq-wrap faq-inner-style">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample1">
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                                How long does it take to get started? <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseOne1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    We can typically kick off a project within 1 to 2 weeks of finalizing our agreement. The exact timing depends on resource availability and how quickly we can complete the initial discovery phase and align on project specifications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                                What is your typical working process? <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    Our process follows four key phases: discovery &amp; analysis, strategy &amp; UX prototyping, visual design &amp; implementation, and rigorous QA testing followed by launch. We prioritize transparency, feedback loops, and regular status check-ins.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                                How do you usually start new collaborations? <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseThree3" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    Every new collaboration begins with an initial consultation to understand your business goals. We then perform a detailed analysis of your requirements to provide a tailored proposal outlining scope, timelines, and pricing before initiating kickoff.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                                                What’s the average project duration? <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseFour4" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    Most branding and standard website projects take between 4 to 8 weeks, while complex digital products or custom applications can range from 3 to 6 months depending on requirements, features, and target integrations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-items">
                                        <h2 className="accordion-header">
                                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive5" aria-expanded="false" aria-controls="collapseFive5">
                                                Can we start the design without wireframes? <span className="accordion-icon"></span>
                                            </button>
                                        </h2>
                                        <div id="collapseFive5" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                            <div className="accordion-body">
                                                <p>
                                                    While we strongly recommend wireframing to establish structural hierarchy and user experience, we can adapt to your needs if you have existing design guidelines. However, starting with wireframes ensures a smoother visual design process.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqArea;