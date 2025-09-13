import { useState } from 'react';
import './Faq.css';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What makes this AI career coach different?",
    answer: "Our AI career coach provides personalized guidance by analyzing your unique skills and interests, then matching them with real-time market data. Unlike traditional counseling, it provides a dynamic roadmap that evolves with you."
  },
  {
    question: "How does the assessment work?",
    answer: "The assessment analyzes your self-reported skills, interests, and education level. It uses this information to identify relevant career paths and provides a detailed report on your strengths, growth areas, and a personalized learning path powered by Gemini 2.5 Flash."
  },
  {
    question: "Is my personal data safe?",
    answer: "Yes, we prioritize your privacy. All user data is securely stored in Firebase and used only to provide your personalized career analysis. We do not share your information with third parties."
  }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${openIndex === index ? 'open' : ''}`}
                    >
                        <button 
                            className="faq-question-btn" 
                            onClick={() => toggleFaq(index)}
                        >
                            <span>{item.question}</span>
                            <ChevronDown 
                                size={20} 
                                className={`faq-icon ${openIndex === index ? 'rotated' : ''}`} 
                            />
                        </button>
                        <div className="faq-answer-container">
                            <p className="faq-answer-text">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;