import React, {useState} from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

    const toggleOpen = () => {
        document.body.classList.toggle('modal-open');
        setIsOpen(true);
    };
    const toggleClose = () => {
        document.body.classList.toggle('modal-open');
        setIsOpen(false);
    };

    const toggleOpen2 = () => {
      document.body.classList.toggle('modal-open');
      setIsOpen2(true);
  };
  const toggleClose2 = () => {
      document.body.classList.toggle('modal-open');
      setIsOpen2(false);
  };


  return (
    <main>
      <header className="bg-black">
        <div className="wrapper py-6">
        <div className="w-32 md:w-48"><StaticImage className="w-full" src="../images/qh.svg" alt="Quantum Health" /></div>
        </div>
      </header>
      <section className="relative overflow-hidden bg-gray-800 md:bg-transparent">
        <div className="wrapper">
          <div className="gutter w-full md:w-2/4 text-white relative z-10">
          <h1>Your simplified, personalized healthcare experience.</h1>
          <p>Northrop Grumman is adding a new healthcare navigation and care coordination service, powered by Quantum Health, to your 2024 benefits package. This service will be available at no additional cost and will help you and your family confidently navigate your health benefits, as well as the cost and complexity of healthcare.</p>
          <hr className="my-8 block opacity-25" />
          <p><strong>Starting Jan. 1, 2024,</strong> Quantum Health will be available to all benefits-eligible U.S. employees, even if you’re not enrolled in a Northrop Grumman medical plan. Navigation services will differ based on your medical plan. </p>
          </div>
        </div>
        <div className="relative md:absolute top-0">
          <StaticImage className="w-full h-full" src="../images/22-2001-Stephanie-Vost-Hero.jpg" />
        </div>
      </section>
      <section className="gutter">
        <div className="wrapper">
        <div class="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="w-full md:w-2/4 relative">
            <div className="relative">
              <div className="play" onClick={toggleOpen}><i className="fa-regular fa-circle-play" /></div>
              <StaticImage className="shadow-2xl border-2 border-blue rounded" src="../images/video1.jpg" />
              {isOpen ? <div className="modal-overlay items-center justify-center" onClick={toggleClose}>
                <div className="modal video-m">
                    <div className="close"><i class="fa-solid fa-xmark" /></div>
                    <iframe src="https://player.vimeo.com/video/827765423?autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Why did Portico choose Quantum Health?"></iframe>
                </div>
            </div> : ''}
            </div>
            <h3 className="mt-6 text-center text-blue">Anthem Members</h3>
          </div>
          <div className="w-full md:w-2/4 relative">
            <div className="relative">
              <div className="play" onClick={toggleOpen2}><i className="fa-regular fa-circle-play" /></div>
              <StaticImage className="shadow-2xl border-2 border-blue rounded" src="../images/video2.jpg" />
              {isOpen2 ? <div className="modal-overlay items-center justify-center" onClick={toggleClose2}>
                <div className="modal video-m">
                    <div className="close"><i class="fa-solid fa-xmark" /></div>
                    <iframe src="https://player.vimeo.com/video/831679842?autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Why did Portico choose Quantum Health?"></iframe>
                </div>
            </div> : ''}
            </div>
            <h3 className="mt-6 text-center text-blue">Non-Anthem Members</h3>
          </div>
        </div>

        </div>
      </section>
      <section className="gutter sm top">
        <div className="wrapper flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-2/4">
            <h2>Quantum Health is your dedicated team of benefits experts. </h2>
            <p>Healthcare can be complex and confusing. With Quantum Health, you’ll have access to Care Coordinators – a team of nurses, claims specialists and benefits experts – who exclusively support Northrop Grumman employees and their families. Care Coordinators are trained on Northrop Grumman’s company culture, health plan and benefits, which means they will provide personalized support. </p>
            <p>Quantum Health will be available to all benefits-eligible U.S. employees, even if you’re not enrolled in a Northrop Grumman medical plan. Spouses or domestic partners enrolled in a Northrop Grumman medical plan can also take advantage of this service. Navigation services will differ based on your medical plan.</p>
          </div>
          <div className="w-full md:w-2/4">
            <StaticImage className="shadow-2xl" src="../images/whois-qh.jpg" />
          </div>
        </div>
      </section>
      <section className="gutter top">
        <div className="wrapper">
          <table className="hidden md:table text-left border-spacing-8 border-collapse w-full mb-12">
            <colgroup><col className="w-1/2" /><col className="w-1/4" /><col className="w-1/4" /></colgroup>
            
            <tbody className="comp">
              <tr>
                <th className="pt-8 pb-4 font-bold text-xl">Support</th>
                <th className="pt-8 pb-4 font-bold text-xl !text-blue text-center">Anthem Members</th>
                <th className="pt-8 pb-4 font-bold text-xl !text-blue text-center">Non-Anthem Members</th>
              </tr>
            </tbody>
            <tbody className="th">
              <tr>
                <th className="text-lg font-normal">Explain Northrop Grumman’s health and well-being benefits</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-check text-blue" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Recommend benefit solutions</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-check text-blue" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Provide contacts for specific benefits</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-check text-blue" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Review dental and vision coverage</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-check text-blue" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Manage the Well-being Incentive Program*</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-check text-blue" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Find in-network providers</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Contact providers to coordinate treatment</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Help navigate complicated medical situations and review treatment options</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Verify insurance coverage and get prior approval if needed</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Solve claims issues and explain your medical bills</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="text-lg font-normal">Discuss drug costs and coverage or concerns with prescriptions</th>
                <td><i className="fa-solid fa-check text-blue" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
            </tbody>
          </table>
          <div className="w-full md:w-2/4 m-auto"><p><em>*Participants in the HMSA, Kaiser Hawaii and Tricare Supplement plans aren’t eligible for the Well-being Incentive Program. Baltimore and Sunnyvale-represented employees are eligible for the Annual Physical Incentive.</em></p></div>
        </div>
      </section>
      <section className="gutter top">
        <div className="wrapper">
          <h2>Frequently Asked Questions</h2>
          <Accordion>
            <AccordionItem header="What is Quantum Health?">
              <p>Quantum Health is an industry-leading healthcare navigation and care coordination company. Organizations hire Quantum Health to help their employees and family members navigate the cost and complexity of healthcare, while ensuring they get the most out of their benefits.</p>
            </AccordionItem>
            <AccordionItem header="Why is Northrop Grumman partnering with Quantum Health?">
              <p>Northrop Grumman is committed to helping you thrive, both at work and in life. We continuously seek out a wide array of offerings designed to meet your needs at all life stages and across the spectrum of life experiences. This partnership will simplify, personalize and further enhance your healthcare experience. In addition to helping you and your family understand all the benefits Northrop Grumman offers, Quantum Health will help you confidently navigate health decisions, costs and coverage.</p>
            </AccordionItem>
            <AccordionItem header="Will Quantum Health replace my current insurance provider?">
              <p>No, Quantum Health is an independent healthcare navigation and care coordination service, which means they aren’t affiliated with your insurance company (Anthem, Kaiser, etc.) or pharmacy benefits (CVS Caremark). Insurance providers aren’t changing.</p>
            </AccordionItem>
            <AccordionItem header="Will Quantum Health cost me anything?">
              <p>No, at Northrop Grumman, we believe investing in our employees’ well-being is investing in our future. This service will be added to your benefits package at no additional cost.  </p>
            </AccordionItem>
            <AccordionItem header="Who are the Quantum Health Care Coordinators?">
              <p>Care Coordinators are your personal team of nurses, benefits experts and claims specialists who will work with you and your providers to make your care simpler and more affordable. Care Coordinators are trained on Northrop Grumman’s company culture, health plan and benefits, which means they will provide personalized support.</p>
            </AccordionItem>
            <AccordionItem header="What will Care Coordinators help with?">
              <p>Care Coordinators will be able to answer your healthcare and benefits questions. Whether you need to find a provider, have a question about a complex medical bill, can’t remember who administers your vision plan, want to understand what’s covered or just need help preparing for an upcoming doctor’s visit – no question is too big or small. Check out the videos above to learn how Care Coordinators will support Anthem members vs. non-Anthem members. </p>
            </AccordionItem>
            <AccordionItem header="When can I start using Quantum Health’s services?">
              <p>On Jan. 1, 2024, visit this page to create a Quantum Health account and learn about the services available to you and your family. After Jan. 1, you can contact Quantum Health anytime through your online account, the Quantum Health app or by calling (800) 894-4194 during business hours and selecting option 1 when prompted. </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <footer className="bg-black">
        <div className="wrapper py-12">
        <div className="w-48"><StaticImage className="w-full" src="../images/ngc-logo.png" alt="Northrop Grumman" /></div>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => 
<Seo
title="Quantum Health & Northrop Grumman"
desc="With Quantum Health and Northrop Grumman we improve access to care, reduces disparities, and enhances the overall efficiency and effectiveness of healthcare systems."
metaImage="..images/meta-ngc-qh.jpg"
/>
