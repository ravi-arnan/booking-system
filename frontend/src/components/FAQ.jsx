import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Are you open today?",
            answer: "We are open Monday to Sunday from 11am to 11pm." // Placeholder answer
        },
        {
            question: "Is the restaurant easily accessible for older people or wheelchair drivers or on crutches?",
            answer: "Yes, our restaurant is fully accessible with ramps and wide spaces." // Placeholder answer
        },
        {
            question: "Is the food halal? / Do you serve halal food? / Are you halal certified?",
            answer: "While we are not halal certified, we do not use pork or alcohol in our cooking." // Placeholder answer
        },
        {
            question: "Where is the parking area? / Where can I park my car or bike?",
            answer: "There are designated parking spots right in front of the restaurant." // Placeholder answer
        },
        {
            question: "What do you usually offer for special occasions? / Do I get something complimentary for my birthday? / I have a special request.",
            answer: "Please let us know in advance and we'd be happy to arrange something special for your celebration!" // Placeholder answer
        },
        {
            question: "How to make a booking / Can I make a reservation ? Can I book a table for today?",
            answer: "You can book easily using the 'Reserve A Table' button or writing us on WhatsApp." // Placeholder answer
        },
        {
            question: "Do you have gluten-free options?",
            answer: "Yes, many of our traditional Balinese dishes are naturally gluten-free." // Placeholder answer
        },
        {
            question: "Can I see the menu?",
            answer: "Our interactive menu is available at the restaurant and upon request via WhatsApp." // Placeholder answer
        },
        {
            question: "Do you have vegan options? / Are you vegan-friendly?",
            answer: "Yes, we offer a variety of delicious vegan options." // Placeholder
        },
        {
            question: "Do you use any MSG?",
            answer: "No, we are famous for our tasty food free of MSG, preservatives, or additives." // Placeholder
        },
        {
            question: "Do you have vegetarian options?",
            answer: "Absolutely, we have many vegetarian dishes available." // Placeholder
        },
        {
            question: "Do you have air conditioning? / Do you have an area with AC?",
            answer: "Yes, our indoor dining area is fully air-conditioned for your comfort." // Placeholder
        },
        {
            question: "Are you pet-friendly?",
            answer: "Yes, we welcome well-behaved pets in our outdoor seating areas." // Placeholder
        },
        {
            question: "Are you currently Hiring? Alternative: I am looking for a job",
            answer: "Please check our careers page or send your resume to our email." // Placeholder
        },
        {
            question: "Do you accept walk-in? Is a reservation required?",
            answer: "Walk-ins are welcome, but we highly recommend reservating to minimize wait times." // Placeholder
        },
        {
            question: "Can you accept the call? Alternative: Can I call you?",
            answer: "Yes, you can call us during our opening hours, though WhatsApp is often faster." // Placeholder
        }
    ];

    return (
        <section className="faq-section">
            <div className="container faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>

                <div className="accordion">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="accordion-question">{item.question}</span>
                                <span className="accordion-icon">
                                    <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1.5L6 6.5L11 1.5"
                                            stroke="#8c6a5d"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className="accordion-content"
                                style={{
                                    maxHeight: openIndex === index ? '200px' : '0'
                                }}
                            >
                                <div className="accordion-body">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
