import FaqImg from '../../../public/assets/img/home-07/faq/faq.jpg';
import { AccordionItem, UserStat } from '@/types/custom-d-t';
import { VideoPlayIconFour } from '@/svg/VideoPlayIcons';
import { useVideoModal } from '@/provider/VideoProvider';
import Image from 'next/image';


const UniqueAIImageFaq = () => {
      const { playVideo } = useVideoModal();
    const accordionItems: AccordionItem[] = [
        {
            id: 'collapseOne',
            question: 'Can I customize the images?',
            answer: 'Absolutely. Our advanced AI generation system allows you to refine styles, colors, aspect ratios, and detailing parameters to perfectly align with your brand guidelines.',
            isExpanded: true
        },
        {
            id: 'collapseTwo',
            question: 'Can I Create Multiple Images at Once?',
            answer: 'Yes, the dashboard supports batch generation, enabling you to generate up to 4 high-resolution variations in a single request for faster visual comparison.'
        },
        {
            id: 'collapseThree',
            question: "What's the Standard Image Size?",
            answer: 'By default, images are generated in high-definition (1024x1024 px), but you can customize output aspect ratios from square to wide (16:9) or vertical (9:16) format.'
        }
    ];

    const userStats: UserStat[] = [
        {
            backgroundColor: '#abecd6',
            title: 'Users',
            value: '1M+',
            description: 'From 173 countries',
            animationDelay: '.3'
        },
        {
            backgroundColor: '#fff6bf',
            title: 'images',
            value: '1M+',
            description: 'Generated images',
            animationDelay: '.5'
        }
    ];

    return (
        <div className="ai-faq-area ai-faq-bg mb-130 p-relative">
            <div className="ai-faq-thumb">
                <div className="anim-zoomin-wrap">
                    <Image className="anim-zoomin" src={FaqImg} alt="faq" />
                </div>
                <div className="ai-faq-user-box d-flex align-items-center justify-content-end">
                    {userStats.map((stat, index) => (
                        <div
                            key={stat.title}
                            className={`ai-faq-user-item ${index === 0 ? 'mr-20' : ''} mb-20 tp_fade_anim`}
                            data-fade-from="top"
                            data-ease="bounce"
                            data-delay={stat.animationDelay}
                            style={{ backgroundColor: stat.backgroundColor }}
                        >
                            <span>{stat.title}</span>
                            <h4>{stat.value}</h4>
                            <span>{stat.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container container-1720">
                <div className="row">
                    <div className="offset-xl-7 offset-lg-6 col-xl-5 col-lg-6">
                        <div className="ai-faq-content-wrap">
                            <div className="ai-faq-title-box mb-20">
                                <div className="ai-faq-video">
                                    <button onClick={() => playVideo("ZXj5tn08Hgg", "youtube")}>
                                        <span><VideoPlayIconFour/></span> 
                                    </button>
                                </div>
                                <h4 className="tp-section-title fs-54">Frequently <br /> ask questions</h4>
                            </div>
                            <div className="ai-faq-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    {accordionItems.map((item) => (
                                        <div className="accordion-items" key={item.id}>
                                            <h2 className="accordion-header">
                                                <button
                                                    className={`accordion-buttons ${item.isExpanded ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${item.id}`}
                                                    aria-expanded={item.isExpanded ? 'true' : 'false'}
                                                    aria-controls={item.id}>
                                                    {item.question}
                                                    <span className="accordion-icon"></span>
                                                </button>
                                            </h2>
                                            <div
                                                id={item.id}
                                                className={`accordion-collapse collapse ${item.isExpanded ? 'show' : ''}`}
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

export default UniqueAIImageFaq;
