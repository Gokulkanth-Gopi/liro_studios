import faqShape from '../../../public/assets/img/home-10/faq/faq-shape-1.png';
import Image from 'next/image';


const MobileApplicationFaq = () => {
    const faqItems = [
        {
            id: "collapseOne",
            question: "What is Liro Studios?",
            answer: "Liro Studios is a premium digital agency specializing in modern brand identity, high-end design, web development, and digital marketing strategies for ambitious brands.",
            show: true
        },
        {
            id: "collapseTwo",
            question: "Is there a mobile app available?",
            answer: "Yes, we develop custom native and cross-platform mobile applications for iOS and Android, designed to provide seamless user experiences and powerful integrations.",
            show: false
        },
        {
            id: "collapseThree",
            question: "Google mobile can monetize your app?",
            answer: "Yes, we integrate Google AdMob and other premium monetization networks, including in-app purchases and subscription models, tailored to your app's business strategy.",
            show: false
        },
        {
            id: "collapseFour",
            question: "Do you offer customer support?",
            answer: "Yes, we provide dedicated post-launch support and maintenance packages, ensuring your digital platforms and apps run smoothly, remain secure, and receive regular updates.",
            show: false
        },
        {
            id: "collapseFive",
            question: "How secure is our user data?",
            answer: "We implement industry-standard security practices, including data encryption, secure APIs, and compliance with privacy regulations to ensure your user data is fully protected.",
            show: false
        },
        {
            id: "collapseSix",
            question: "Can I lock my note app?",
            answer: "Yes, we support integration of biometric authentication (FaceID / TouchID) and secure PIN entry options to protect sensitive user information inside the applications we build.",
            show: false
        }
    ];

    return (
        <div className="app-faq-area p-relative pb-120">
            <div className="app-faq-shape" data-speed=".8">
                <Image src={faqShape} alt="faq-shape" />
            </div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="app-faq-heading p-relative mb-40">
                            <span className="tp-section-subtitle border-bg bg-color tp_fade_anim" data-delay=".3">FAQ</span>
                            <h3 className="tp-section-title-phudu fs-70 mb-20 tp_fade_anim" data-delay=".5">Got any <br /> questions?</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="app-faq-wrap pl-70">
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    {faqItems.map((item) => (
                                        <div className="accordion-items" key={item.id}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-buttons ${item.show ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${item.id}`}
                                                    aria-expanded={item.show ? "true" : "false"}
                                                    aria-controls={item.id}
                                                >
                                                    {item.question}
                                                    <span className="accordion-icon"></span>
                                                </button>
                                            </h2>
                                            <div
                                                id={item.id}
                                                className={`accordion-collapse collapse ${item.show ? 'show' : ''}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
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

export default MobileApplicationFaq;
