import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"
import "./Faq.css"

const Faq = () => {
  const questions = [
    {
      "question": "How do I register for the hackathon?",
      "answer": "To register for the hackathon, visit our registration page on the event website and follow the instructions provided. You'll need to provide your name, contact information, and any team members' details if you're participating as a team."
    },
    {
      "question": "Is there a registration fee?",
      "answer": "No, participation in our hackathon is free of charge. We want to encourage as many participants as possible to join and showcase their skills."
    },
    {
      "question": "What are the key themes or focus areas for the hackathon projects?",
      "answer": "The hackathon projects can cover a wide range of themes, including but not limited to software development, AI, IoT, and cybersecurity."
    },
    {
      "question": "What should I bring to the hackathon?",
      "answer": "You should bring your own laptop, charger, any specific hardware or software you require, and a positive attitude. It's also a good idea to bring any personal items you'll need for the duration of the event."
    },
    {
      "question": "Are there any softwares we should be familiar with?",
      "answer": "Ensure that you and your teammates are comfortable with basic git commands like push, pull, commit, etc. To avoid merge conflicts, practise git with your team members beforehand."
    },
    {
      "question": "How can I contact the organizers for additional questions or assistance?",
      "answer": "You can reach out to the organizers by emailing djsanghavi.acm@gmail.com or calling 9372022651. We are here to assist with any questions or concerns."
    },
    {
      "question": "Can participants seek technical support or resources during the hackathon?",
      "answer": "Yes, a dedicated help desk will provide technical support and access to resources throughout the event."
    },
    {
      "question": "Is there a code of conduct that participants are expected to adhere to?",
      "answer": "Yes, a code of conduct will be provided to ensure a respectful and collaborative environment for all participants."
    },
  ]
  const [add, setAdd] = useState(null);
  const toggleQuestion = (index) => {
    setAdd(add === index ? null : index);
  }
  return (
    <div>
      <div id='faq' className='faq_main'>
        <h1 className='faq_head'>FAQs</h1>
        {questions.map((item, index) => (
          <div className="main_set">
            <div key={index} className="faq_set">
              <div className="question" onClick={() => toggleQuestion(index)}>
                {item.question} <span className='add'>{add === index ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}</span>
              </div>
              {add === index && <div className="answer">{item.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
