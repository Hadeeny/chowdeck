"use client";
import React, { useState } from "react";

const Faqs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const faq = [
    {
      question: "What is Chowdeck?",
      answer:
        "Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
    },
    {
      question: "What locations do we currently deliver to?",
      answer:
        "We currently pick up and also deliver food to places in Ikeja, Yaba, Ogudu, Surulere, Lekki. This means you can find your favourite restaurants and food vendors who are in these locations and order your meals from them. There are ongoing plans to expand to other areas in Lagos soon",
    },
    {
      question: "What is Chowdeck wallet?",
      answer:
        "Chowdeck wallet is a safe feature on the app where you can put in money for later use. The money in the Chowdeck wallet can be used to make payments for orders placed on the app. When an order gets rejected due to various reasons, the payment made initially when the order was placed automatically goes into your Chowdeck wallet which is accessible to make payments for future orders.",
    },
    {
      question: "What is Chowscore?",
      answer:
        "Chowscore indicates how active you are on Chowdeck as a customer. This works by combining all your overall activities on the app from the day you signed up till date and rewarding you points for it. You get points for ordering meals, rating and reviewing restaurants, rating riders and referring the app to friends. Rack up more points to move tiers and enjoy exclusive discounts and free delivery on orders.",
    },
    {
      question: "What is service fee?",
      answer:
        "The service fee is a consumer fee that appears on the price breakdown at checkout on the Chowdeck app. Unlike other consumer fees, the service fee depends on your order’s subtotal, that is, a percentage of your bill excluding the delivery fee. We understand the service fee increases as the order amount increases, so we’ve capped it to prevent it from getting too excessive. It also does not apply to all restaurants on our platform.",
    },
    {
      question: "How do we charge service fee?",
      answer:
        "Having food delivered to you anytime, anywhere is so convenient, but it can be extremely costly to operate a delivery service. We need to cover technology costs, transaction processing fees and support to do this effectively. The various fees on our checkout ensure we stay ahead of these costs and continue serving you, our deserving customer. We sincerely appreciate your patronage and look forward to surpassing delivery standards as we establish ourselves as a household name for meal delivery across Africa.",
    },
    {
      question: "What is surge fee?",
      answer:
        "A surge fee is a dynamic flat fee applicable when order demand exceeds available driver supply and is added to your subtotal during checkout on the Chowdeck app. The surge fee is calculated by considering how many people want to order on Chowdeck and how many delivery drivers are on the road in a particular area to fulfil orders.",
    },
    {
      question: "How do we charge surge fee?",
      answer:
        "The surge fee was established to inspire and reward Chowdeck Champions for delivering meals in less than ideal conditions such as heavy rain or traffic gridlocks. This also ensures we consistently deliver, regardless of the prevailing situations, which may naturally hinder effective delivery. We sincerely appreciate your patronage and look forward to surpassing delivery standards as we establish ourselves as a household name for meal delivery across Africa.",
    },
    {
      question: "How do I create an account on chowdeck?",
      answer:
        "Go to Playstore or App Store on your phone, search for Chowdeck and download the app. Create an account in seconds by entering your details and verifying your phone number and email address.",
    },
    {
      question: "How do I update my profile?",
      answer:
        "On the app, you can update your account details, delivery address and profile picture with avatars. Go to Profile on the homepage and make necessary edits.",
    },
    {
      question: "How do I delete a saved card?",
      answer:
        "On the app, you can delete your saved card details. Go to Profile on the homepage and click on Wallet. Click the Bin icon at the right of the saved card to delete the card.",
    },
    {
      question: "How do I fund/top up my Chowdeck wallet?",
      answer:
        "From the home page, click on Profile at the bottom right. Select Wallet, at the top right click on Add Money and you'll be able to fund your wallet with either your saved card or via a payment gateway. The added amount will reflect in your wallet balance after transaction as been completed.",
    },
  ];
  return (
    <section className="w-full border-2 border-black mt-[-8rem] bg-[#ffc501ff] md:bg-white rounded-2xl overflow-y-hidden">
      <div className="w-full  hidden md:flex h-[110vh] md:divide-y-0  divide-y-4 divide-black md:divide-black border-4 border-black rounded-2xl  flex-col md:flex-row">
        <div className="w-full md:w-[50%]  md:h-full h-1/2">
          <h2 className="font-bold text-[4rem] ml-4">FAQS.</h2>

          <div className=" w-full p-4  h-full">
            <ul className="w-full pb-[5rem]  pr-3 restaurant h-full space-y-4 overflow-y-scroll">
              {faq.map((item, i) => (
                <li
                  onClick={() => setCurrentIndex(i)}
                  key={i}
                  className={`border cursor-pointer  rounded-md ${
                    currentIndex == i
                      ? "bg-black text-white"
                      : "bg-slate-100 text-gray-800"
                  } border-black  px-4  text-xl py-5`}
                >
                  {item.question}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[50%] md:h-auto h-1/2 p-4">
          <h2 className="font-bold text-[4rem] ml-4">ANS.</h2>
          <div className="bg-[#ffc501ff] p-8 rounded-2xl w-full h-full">
            <div>Img</div>
            <br />
            <p className="text-2xl">{faq[currentIndex].answer}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between md:hidden h-[38rem] p-2">
        <div className="">
          <h2 className="font-bold text-[2rem] ml-2">FAQs.</h2>
          <div className=" p-2 rounded-2xl w-full h-full">
            <div>Img</div>
            <br />
            <p className="text-lg">{faq[currentIndex].answer}</p>
          </div>
        </div>
        <ul className=" grid grid-rows-1 scroll-class gap-x-4 overflow-scroll mb-2 grid-flow-col">
          {faq.map((item, i) => (
            <li
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-[14rem] mb-2 ${
                currentIndex == i ? "bg-black text-white" : "bg-white"
              } p-2 rounded-md`}
            >
              {item.question}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
