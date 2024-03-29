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
      <header className="">
        <div className="wrapper py-6 flex justify-between">
          <div className="w-32 md:w-48">
          <svg  xmlns="http://www.w3.org/2000/svg" width="100%" height="43" viewBox="0 0 200 43">
                              <g fill="none" fill-rule="evenodd">
                                  <g fill-rule="nonzero">
                                      <g>
                                          <g>
                                              <path fill="#ffcd00" d="M34.007 13.516c-.566-.885-.972-1.371-1.612-2.078-52.729 8.045 17.917 14.791-12.911 31.259h29.94C67.657 23.153-7.228 21.165 34.006 13.516" transform="translate(-64 -52) translate(64 52)"/>
                                              <path fill="#71a300" d="M18.458 40.723c2.532-1.351 4.153-2.533 5.19-3.526-.783.125-1.587.193-2.406.193-8.406 0-15.219-6.91-15.219-15.436 0-8.523 6.813-15.433 15.219-15.433 8.405 0 15.22 6.911 15.22 15.433 0 .17-.008.338-.013.505 1.752.628 3.517 1.292 5.228 2.01.116-.903.182-1.823.182-2.759C41.86 10.136 32.607.755 21.196.755 9.782.755.53 10.135.53 21.71c0 9.77 6.595 17.979 15.516 20.303l2.412-1.29z" transform="translate(-64 -52) translate(64 52)"/>
                                          </g>
                                          <path fill="#71a300" d="M124.474 31.599L126.004 31.599 126.004 36.238 131.537 36.238 131.537 31.599 133.083 31.599 133.083 42.696 131.537 42.696 131.537 37.619 126.004 37.619 126.004 42.696 124.474 42.696zM139.283 41.317L145.003 41.317 145.003 42.696 137.753 42.696 137.753 31.599 144.771 31.599 144.771 32.963 139.283 32.963 139.283 36.287 144.447 36.287 144.447 37.619 139.283 37.619zM149.826 42.697h-1.7L152.87 31.6h1.394l4.698 11.097h-1.73l-1.114-2.726h-5.192l-1.1 2.726zm1.64-4.092h4.096l-2.042-5.204-2.054 5.204zM164.235 41.317L169.121 41.317 169.121 42.696 162.705 42.696 162.705 31.599 164.235 31.599zM175.554 42.697L174.024 42.697 174.024 32.962 170.517 32.962 170.517 31.599 179.062 31.599 179.062 32.962 175.554 32.962zM182.821 31.599L184.351 31.599 184.351 36.238 189.885 36.238 189.885 31.599 191.431 31.599 191.431 42.696 189.885 42.696 189.885 37.619 184.351 37.619 184.351 42.696 182.821 42.696zM167.142 26.39h2.299v-8.474c0-1.508.211-2.686.642-3.532.43-.846.912-1.482 1.445-1.908.535-.423 1.051-.68 1.549-.775.5-.095.818-.141.957-.141 1.579 0 2.66.448 3.238 1.342.58.893.872 2.176.872 3.848v9.64h2.298v-8.793c0-.777.08-1.522.244-2.241.16-.717.422-1.36.781-1.924.361-.564.832-1.017 1.41-1.36.58-.341 1.303-.512 2.161-.512 1.576 0 2.657.448 3.238 1.342.58.893.87 2.176.87 3.848v9.64h2.298V15.905c0-2.073-.5-3.67-1.498-4.786-.996-1.118-2.542-1.677-4.63-1.677-1.091 0-2.142.306-3.151.92-1.009.61-1.747 1.446-2.21 2.507-.278-.709-.623-1.284-1.027-1.732-.406-.448-.842-.795-1.308-1.042-.463-.246-.945-.417-1.442-.512-.5-.093-.972-.141-1.41-.141-.978 0-1.957.246-2.944.743-.987.494-1.758 1.223-2.314 2.187h-.07V9.864h-2.472c.046.613.086 1.227.12 1.837.034.613.054 1.223.054 1.837V26.39zm-4.465 0c-.048-.613-.086-1.259-.12-1.942-.038-.681-.054-1.248-.054-1.696V9.863h-2.298v8.477c0 1.506-.233 2.684-.696 3.53-.466.846-.993 1.484-1.584 1.907-.594.424-1.156.681-1.688.776-.535.092-.86.141-.977.141-.86 0-1.573-.122-2.14-.369-.57-.247-1.022-.613-1.357-1.096-.337-.483-.575-1.078-.714-1.783-.14-.705-.209-1.52-.209-2.436V9.863h-2.298V20.35c0 2.073.497 3.67 1.495 4.786.997 1.118 2.541 1.677 4.631 1.677.535 0 1.073-.076 1.618-.228.546-.155 1.063-.366 1.55-.637.489-.269.927-.594 1.323-.97.394-.376.72-.788.974-1.236h.07c0 .448.005.887.018 1.324.01.434.04.876.085 1.324h2.37zM145.66 9.864h-4.701V5.205h-2.295v4.658h-3.449v2.12h3.449V22.4c0 .917.125 1.658.382 2.225.257.561.581 1.01.974 1.34.396.329.832.554 1.305.67.476.117.937.177 1.376.177 1.206 0 2.242-.2 3.1-.6l-.107-2.154c-.348.19-.73.341-1.148.458-.417.12-.824.176-1.217.176-.348 0-.667-.04-.958-.121-.292-.081-.54-.23-.749-.443-.209-.211-.372-.512-.487-.9-.118-.388-.177-.888-.177-1.5v-9.747h4.701V9.863zm-26.76 0c.045.614.088 1.262.123 1.943.034.684.051 1.248.051 1.696v12.889h2.299v-8.475c0-1.508.232-2.686.696-3.532.465-.846.992-1.482 1.586-1.908.591-.423 1.153-.68 1.686-.775.535-.095.859-.141.976-.141 1.696 0 2.855.488 3.484 1.465.626.977.939 2.385.939 4.219v9.147h2.295V15.904c0-2.073-.498-3.67-1.496-4.786-.998-1.118-2.542-1.677-4.629-1.677-.535 0-1.075.076-1.621.23-.546.152-1.063.363-1.55.635-.486.271-.928.594-1.32.971-.397.378-.72.79-.978 1.235h-.07c0-.444-.005-.887-.015-1.324-.014-.434-.04-.876-.088-1.324H118.9zm-7.66 6.393c-.974 0-2.05.05-3.219.142-1.174.095-2.276.33-3.31.705-1.032.378-1.89.95-2.576 1.712-.685.765-1.027 1.82-1.027 3.161 0 .801.157 1.5.471 2.103.313.6.73 1.108 1.252 1.517.524.413 1.12.72 1.795.917.671.201 1.367.301 2.09.301 1.321 0 2.44-.242 3.357-.724.918-.483 1.712-1.276 2.387-2.382h.07c0 .447.015.906.05 1.376.035.472.086.906.158 1.307h2.229c-.07-.447-.134-1.017-.193-1.711-.059-.695-.085-1.36-.085-1.997v-7.377c0-1.015-.164-1.884-.49-2.614-.324-.73-.754-1.338-1.287-1.82-.535-.48-1.167-.842-1.897-1.078-.733-.236-1.493-.353-2.282-.353-3.064 0-5.362.801-6.892 2.402l1.39 1.66c1.416-1.293 3.075-1.942 4.98-1.942 2.785 0 4.177 1.424 4.177 4.273v.423h-1.148zm1.148 1.908v1.199c0 .73-.096 1.419-.295 2.065-.198.648-.505 1.215-.923 1.695-.417.483-.933.866-1.549 1.148-.615.283-1.34.424-2.175.424-.465 0-.923-.052-1.377-.157-.45-.106-.864-.285-1.234-.532-.372-.246-.669-.565-.888-.952-.222-.388-.332-.852-.332-1.395 0-.825.284-1.47.854-1.943.57-.47 1.252-.817 2.054-1.042.8-.222 1.634-.363 2.507-.423.87-.057 1.595-.087 2.175-.087h1.183zM97.682 26.39c-.048-.614-.088-1.26-.124-1.943-.034-.681-.053-1.248-.053-1.696V9.863h-2.299v8.477c0 1.506-.23 2.684-.696 3.53-.463.846-.992 1.484-1.584 1.907-.59.424-1.156.681-1.688.776-.535.092-.859.141-.973.141-.862 0-1.573-.122-2.143-.369-.57-.247-1.023-.613-1.36-1.096-.336-.483-.572-1.078-.712-1.783-.141-.705-.208-1.52-.208-2.436V9.863h-2.299V20.35c0 2.073.498 3.67 1.495 4.786.998 1.118 2.542 1.677 4.634 1.677.533 0 1.07-.076 1.616-.228.546-.155 1.062-.366 1.552-.637.487-.269.926-.594 1.322-.97.393-.376.72-.788.973-1.236h.07c0 .448.008.887.018 1.324.01.434.04.876.088 1.324h2.37zM57.318 9.6c.442-1.26 1.079-2.372 1.913-3.338.838-.963 1.86-1.737 3.067-2.312 1.206-.578 2.576-.866 4.107-.866 1.509 0 2.868.288 4.075.866 1.206.575 2.229 1.349 3.063 2.312.838.966 1.475 2.078 1.916 3.337.442 1.26.661 2.584.661 3.973 0 1.389-.22 2.713-.66 3.972-.442 1.259-1.08 2.371-1.917 3.338-.834.966-1.857 1.736-3.063 2.311-1.206.578-2.566.866-4.075.866-1.53 0-2.9-.287-4.107-.866-1.207-.575-2.23-1.346-3.067-2.311-.834-.967-1.471-2.079-1.913-3.338-.441-1.26-.66-2.583-.66-3.972 0-1.39.22-2.713.66-3.973m23.19 14.46h-7.452v-.07c2.02-1.083 3.486-2.527 4.404-4.328.918-1.8 1.375-3.83 1.375-6.09 0-1.858-.313-3.573-.939-5.136-.626-1.566-1.495-2.92-2.611-4.062-1.116-1.143-2.432-2.03-3.952-2.668-1.52-.635-3.163-.952-4.928-.952-1.787 0-3.441.317-4.96.952-1.52.638-2.839 1.525-3.952 2.668-1.113 1.142-1.986 2.496-2.611 4.062-.63 1.563-.942 3.278-.942 5.137 0 1.858.313 3.573.942 5.136.626 1.566 1.498 2.92 2.61 4.062 1.114 1.143 2.433 2.03 3.953 2.668 1.52.635 3.173.952 4.96.952h14.102V24.06zM196.618 12.125v-.684h.503c.16 0 .393.098.393.326 0 .217-.203.357-.393.357h-.503v.001zm1.736 1.544l-.722-1.167c.308-.108.543-.365.543-.735 0-.66-.532-.863-1.033-.863h-1.172v2.765h.648V12.6h.385l.586 1.07h.765zm-3.78-1.35c0 1.361 1.086 2.43 2.43 2.43 1.34 0 2.429-1.069 2.429-2.43 0-1.36-1.089-2.453-2.43-2.453-1.343 0-2.43 1.093-2.43 2.452m.383 0c0-1.144.918-2.075 2.046-2.075 1.13 0 2.047.93 2.047 2.075 0 1.135-.918 2.076-2.047 2.076-1.128 0-2.046-.941-2.046-2.076" transform="translate(-64 -52) translate(64 52)" />
                                      </g>
                                  </g>
                              </g>
                          </svg>
            </div>


          </div>
      </header>
      <section className="relative overflow-hidden bg-gray-800 md:bg-transparent hero-bg">
        <div className="wrapper">
          <div className="w-full md:w-3/4 lg:w-2/4 text-white relative z-10 pt-40 pb-16">
          <h1 className="text-white">Your simplified, personalized healthcare experience.</h1>
          <p className="mb-0">In 2024, Northrop Grumman is adding a new healthcare navigation service, powered by Quantum Health, to your benefits package. This service will be available at no additional cost and will help you and your family confidently navigate your health benefits and the cost and complexity of healthcare.</p>
          
          </div>
        </div>
      </section>
      {/* <section className="relative gutter sm">
        <div className="wrapper">
        <div class="flex flex-col items-center md:flex-row gap-6 md:gap-24">
          <div className="w-full md:w-2/4 text-grey relative z-10">
            
            <h1>Your simplified, personalized healthcare experience.</h1>
            <p className="mb-0">In 2024, Northrop Grumman is adding a new healthcare navigation and care coordination service, powered by Quantum Health, to your benefits package. This service will be available at no additional cost and will help you and your family confidently navigate your health benefits and the cost and complexity of healthcare.</p>
          </div>
          <div className="w-full md:w-2/4 text-grey relative z-10">
            <StaticImage src="../images/ngc-Hero-2.jpg" className="rounded-2xl shadow-2xl" />
          </div>
          </div>
        </div>
      </section> */}
      <section className="bg-gradient-to-b from-grey-light to-white" id="videos">
        <div className="wrapper gutter sm">
          <div className="m-auto text-center md:w-2/4">
            <h2>Starting <strong>Jan. 1, 2024</strong></h2>
          <p>Quantum Health will be available to all benefits-eligible U.S. employees, even if you’re not enrolled in a Northrop Grumman medical plan. Spouses and domestic partners enrolled in a Northrop Grumman medical plan will also have access to this service.</p>
          </div>
        <div class="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="w-full md:w-2/4 relative bg-blue text-white pb-6 md:p-6 rounded-2xl md:shadow-xl">
            <div className="relative">
              <div className="play" onClick={toggleOpen}><i className="fa-regular fa-circle-play" /></div>
              <StaticImage className="shadow-2xl md:shadow-none rounded-t-xl md:rounded-xl" src="../images/video1.jpg" />
              {isOpen ? <div className="modal-overlay items-center justify-center" onClick={toggleClose}>
                <div className="modal video-m">
                    <div className="close"><i class="fa-solid fa-xmark" /></div>
                    <iframe allowtransparency="true" title="Wistia video player" allowFullscreen frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/6pk2porekc?autoplay=1"></iframe>
                </div>
            </div> : ''}
            </div>
            <h3 className="mt-6 text-center ">If you’re enrolled in an Anthem medical plan</h3>
          </div>
          <div className="w-full md:w-2/4 relative bg-blue text-white pb-6 md:p-6 rounded-2xl shadow-xl">
            <div className="relative">
              <div className="play" onClick={toggleOpen2}><i className="fa-regular fa-circle-play" /></div>
              <StaticImage className="shadow-2xl md:shadow-none rounded-t-xl md:rounded-xl" src="../images/video2.jpg" />
              {isOpen2 ? <div className="modal-overlay items-center justify-center" onClick={toggleClose2}>
                <div className="modal video-m">
                    <div className="close"><i class="fa-solid fa-xmark" /></div>
                    <iframe allowtransparency="true" title="Wistia video player" allowFullscreen frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/16258o0l9f?autoplay=1"></iframe>
                </div>
            </div> : ''}
            </div>
            <h3 className="mt-6 text-center ">If you’re NOT enrolled in an Anthem medical plan</h3>
          </div>
        </div>

        </div>
      </section>
      <section className="gutter sm top" id="services">
        <div className="wrapper">
          <h2 className="md:w-2/4 text-center m-auto mb-12">Navigation services will differ based on your medical plan.</h2>
          <div className="relative">
          <table className="hidden md:table text-left border-spacing-8 border-collapse w-full m-auto md:w-4/5 mb-12">
            <colgroup><col className="w-1/2" /><col className="w-1/4" /><col className="w-1/4" /></colgroup>
            
            <tbody className="comp">
              <tr>
                <th className="pt-8 pb-4 font-bold text-xl">Navigation services</th>
                <th className="pt-8 pb-4 font-bold text-lg !text-blue-light text-center">Anthem Medical Plan</th>
                <th className="pt-8 pb-4 font-bold text-lg !text-purple text-center">Non-Anthem Medical Plan</th>
              </tr>
            </tbody>
            <tbody className="th">
              <tr>
                <th className="font-normal">Explain Northrop Grumman’s health and well-being benefits</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-check text-purple" /></td>
              </tr>
              <tr>
                <th className="font-normal">Recommend benefit solutions</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-check text-purple" /></td>
              </tr>
              <tr>
                <th className="font-normal">Provide contacts for specific benefits</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-check text-purple" /></td>
              </tr>
              <tr>
                <th className="font-normal">Review dental and vision coverage</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-check text-purple" /></td>
              </tr>
              <tr>
                <th className="font-normal">Manage the Well-being Incentive Program*</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-check text-purple" /></td>
              </tr>
              <tr>
                <th className="font-normal">Find in-network providers</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="font-normal">Contact providers to coordinate treatment</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="font-normal">Help navigate complicated medical situations and review treatment options</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="font-normal">Verify insurance coverage and get prior approval if needed</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="font-normal">Solve claims issues and explain your medical bills</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="font-normal">Discuss drug costs and coverage or concerns with prescriptions</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
              <tr>
                <th className="font-normal">File appeals of medical claim determinations</th>
                <td><i className="fa-solid fa-check text-blue-light" /></td>
                <td><i className="fa-solid fa-minus text-grey-md" /></td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="md:hidden">
            <div className="feature p-6 shadow-lg mb-10">
              <div className="flex flex-wrap gap-2 justify-between items-center">
                <div className="comp">
                  <div className="pb-3 text-blue-light !font-bold text-lg">Anthem Medical Plan</div>
                </div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Explain Northrop Grumman’s health and well-being benefits</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Recommend benefit solutions</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Provide contacts for specific benefits</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Review dental and vision coverage</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Manage the Well-being Incentive Program*</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Find in-network providers</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Contact providers to coordinate treatment</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Help navigate complicated medical situations and review treatment options</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Verify insurance coverage and get prior approval if needed</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Solve claims issues and explain your medical bills</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Discuss drug costs and coverage or concerns with prescriptions</div>
              </div>
          </div>

          <div className="feature p-6 shadow-lg mb-10">
              <div className="flex flex-wrap gap-2 justify-between items-center">
                <div className="comp">
                  <div className="pb-3 text-blue-light !font-bold text-lg">Non-Anthem Medical Plan</div>
                </div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Explain Northrop Grumman’s health and well-being benefits</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Recommend benefit solutions</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Provide contacts for specific benefits</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Review dental and vision coverage</div>
              </div>
              <div className="flex border-t border-grey-light py-3 gap-2 items-center">
                <div className="flex self-start"><i className="text-xl fa-solid fa-check mr-4 text-blue-light" /> 
                </div>
                <div className="text-sm">Manage the Well-being Incentive Program*</div>
              </div>
          </div>
          
        </div>
        <div className="w-full md:w-4/5 m-auto"><p className="text-sm mb-0"><em>*Participants in the HMSA, Kaiser Hawaii and Tricare Supplement plans aren’t eligible for the Well-being Incentive Program. Baltimore and Sunnyvale-represented employees are eligible for the Annual Physical Incentive.</em></p></div>
        </div>
      </section>
      <section className="gutter sm bg-gradient-to-b from-grey-light to-white">
        <div className="wrapper flex flex-col items-center md:flex-row gap-4 md:gap-24">
          <div className="w-full md:w-2/4">
            <h2>Quantum Health is <strong>your dedicated team of benefits experts.</strong> </h2>
            <p className="mb-0">Healthcare can be complex and confusing. With Quantum Health, you’ll have access to Care Coordinators – a team of nurses, claims specialists and benefits experts – who exclusively support Northrop Grumman employees and their families. Care Coordinators are trained on Northrop Grumman’s company culture, health plan and benefits, which means they will provide personalized support. </p>
          </div>
          <div className="w-full md:w-2/4 mb-6 md:mb-0">
            <StaticImage className="rounded-2xl shadow-2xl" src="../images/whois-qh.jpg" />
          </div>
        </div>
      </section>
      
      <section className="gutter sm">
        <div className="wrapper">
          <h2 className="text-blue">Frequently Asked Questions</h2>
          <Accordion className="accord" transition transitionTimeout={250}>
            <AccordionItem header="What is Quantum Health?" initialEntered>
              <p>Quantum Health is an industry-leading healthcare navigation and care coordination company. Organizations hire Quantum Health to help their employees and family members navigate the cost and complexity of healthcare, while ensuring they get the most out of their benefits.</p>
            </AccordionItem>
            <AccordionItem header="Why is Northrop Grumman partnering with Quantum Health?">
              <p>Northrop Grumman is committed to helping you thrive, both at work and in life. We provide a diverse range of offerings designed to meet your needs at all life stages and across the spectrum of life experiences. Our partnership with Quantum Health will simplify, personalize and improve your healthcare experience. In addition to helping you and your family understand all the benefits Northrop Grumman offers, Quantum Health will help you confidently navigate health decisions, costs and coverage.</p>
            </AccordionItem>
            <AccordionItem header="Can all employees access Quantum Health?">
              <p>Yes, Quantum Health will be available to all benefits-eligible U.S. employees, even if you’re not enrolled in a Northrop Grumman medical plan. Spouses and domestic partners enrolled in a Northrop Grumman medical plan will also have access to this service. Navigation services will differ based on your medical plan. <a className="text-blue underline underline-offset-2" href="#services">View the table above for more information.</a></p>
            </AccordionItem>
            <AccordionItem header="Will Quantum Health replace my current insurance provider?">
              <p>No, Quantum Health is an independent healthcare navigation and care coordination service, which means they aren’t affiliated with your insurance company (Anthem, Kaiser, etc.) or pharmacy benefits manager (CVS Caremark). Insurance providers aren’t changing.</p>
            </AccordionItem>
            <AccordionItem header="Will Quantum Health cost me anything?">
              <p>No, at Northrop Grumman, we believe investing in our employees’ well-being is investing in our future. This service will be added to your benefits package at no additional cost.  </p>
            </AccordionItem>
            <AccordionItem header="Who are the Quantum Health Care Coordinators?">
              <p>Care Coordinators are your personal team of nurses, benefits experts and claims specialists who will work with you and your providers to make your care simpler and more affordable. Care Coordinators are trained on Northrop Grumman’s company culture, health plan and benefits, which means they will provide personalized support.</p>
            </AccordionItem>
            <AccordionItem header="What will Care Coordinators help with?">
              <p>Care Coordinators will be able to answer your healthcare and benefits questions. Whether you need to find a provider, have a question about a complex medical bill, can’t remember who administers your vision plan, want to understand what’s covered or just need help preparing for an upcoming doctor’s visit – no question is too big or small. <a className="text-blue underline" href="#videos">Check out the videos</a> above to learn how Care Coordinators will support employees enrolled in an Anthem medical plan vs. a non-Anthem medical plan. </p>
            </AccordionItem>
            <AccordionItem header="When can I start using Quantum Health’s services?">
              <p>Starting Jan. 1, 2024, you can visit this page to create a Quantum Health account and learn about the services available to you and your family. As New Year’s Day is an observed holiday, you can contact Quantum Health starting Jan. 2, 2024, through your online account, the Quantum Health app or by calling (800) 894-4194 during business hours and selecting option 1 when prompted.</p>
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
metaImage="https://adorable-truffle-42d431.netlify.app/static…ie-Vost-Hero-17ee0a3063c88828263d4932c59c2c55.jpg"
/>
