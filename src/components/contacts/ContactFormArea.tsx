import { ArrowTwenty } from '@/svg/ArrowIcons';
import { useState } from 'react';

const ContactFormArea = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, phone, message } = formData;

        const mailToLink = `mailto:contact@lirostudios.com?subject=Contact Form Enquiry&body=
Full Name: ${name}%0D%0A
Email: ${email}%0D%0A
Phone Number: ${phone}%0D%0A
Message: ${message}`;

        globalThis.location.href = mailToLink;
    };

    return (
        <div className="tp-contact-form-ptb pb-140">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-form-heading tp_fade_anim mb-50" style={{ color: '#fff' }}>
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-15">
                                <span className="tp-section-subtitle pre" style={{ color: '#fff' }}>Contact Us</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty />
                                </div>
                            </div>
                            <h2 className="tp-section-title lts" style={{ color: '#fff' }}>
                                Let&apos;s make <br />
                                your brand <br />
                                brilliant!
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tp-contact-form-wrap">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label htmlFor="name" style={{ color: '#fff ' }}>Full name*</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                onChange={handleChange}
                                                style={{ backgroundColor: '#3F5493', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label htmlFor="email" style={{ color: '#fff' }}>Email address*</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                onChange={handleChange}
                                                style={{ backgroundColor: '#3F5493', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label htmlFor="phone" style={{ color: '#fff' }}>Phone number*</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                onChange={handleChange}
                                                style={{ backgroundColor: '#3F5493', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label htmlFor="message" style={{ color: '#fff' }}>How Can We Help You*</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                onChange={handleChange}
                                                style={{ backgroundColor: '#3F5493', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                                            ></textarea>
                                        </div>

                                        <div className="tp-contact-form-btn">
                                            <button className="w-100" type="submit">
                                                <span>
                                                    <span className="text-1">Get in Touch</span>
                                                    <span className="text-2">Get in Touch</span>
                                                </span>
                                            </button>
                                            <p className="ajax-response mt-5"></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactFormArea;

