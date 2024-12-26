"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import healthcare from "@/public/assets/images/healthcare.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function SectorDetails() {
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),

    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };
  return (
    <div className="project-details-page-area space">
      <div className="container">
       
        
            <div  className="col-xl-12">
              <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={700}
                  className="w-100"
                  src={healthcare}
                  alt="img"
                />
              </div>
            </div>
          

        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40 hide">
              <ul className="list-wrap">
              <li>
                  <span>Navigate to:</span>
                  <div
                    className="manage-links"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    <a
                      href="/sector/commercial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Commercial Projects
                    </a>
                    <a
                      href="/sector/oil-and-gas"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Oil and Gas
                    </a>
                    <a
                      href="/sector/healthcare"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Health Care
                    </a>
                    <a
                      href="/sector/hospitality"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Hospitality
                    </a>
                    <a
                      href="/sector/education"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Education
                    </a>
                    <a
                      href="/sector/tank-farms"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Tank Farm
                    </a>
                    <a
                      href="/sector/power-and-energy"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Power and Energy
                    </a>
                    <a
                      href="/sector/roads-and-infrastructure"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Roads and Infrastructure
                    </a>
                    <a
                      href="/sector/religious"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Religous Projects
                    </a>
                    <a
                      href="/sector/government"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Government Projects
                    </a>
                    <a
                      href="/sector/industrial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Industrial Sectors
                    </a>
                    <a
                      href="/sector/railways"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Railways
                    </a>
                    <a
                      href="/sector/shelters"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Shelter
                    </a>
                    <a
                      href="/sector/residential-and-villa"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Residential and Villa
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Healthcare</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we understand that healthcare facilities are the foundation of exceptional care.  By working on projects like MNR Hospital, Meydan Wellness, Amana Healthcare and Mediclinic, we focus on patient well-being and operational excellence, we design spaces that meet the unique demands of the healthcare sector.
              </p>
             
            </div>
            <h3>Innovative Solutions for Modern Healthcare</h3>
            <p className="sec-text mb-n1">
            Our personalised solutions address the unique challenges of healthcare infrastructure, focusing on:<br/>
<b>•	Patient-Centred Hospitals:</b>
 Spaces that enhance care, streamline workflows and ensure safety.<br/>
<b>•	Specialty Medical Units:</b>
Developing critical care units, surgical theatres, and diagnostic labs that meet global standards for precision and functionality.<br/>
<b>•	Medical Research and Diagnostic Centres:</b>
Crafting modern spaces equipped with advanced technologies for research and diagnostics.<br/>
<b>•	Modernization with Minimal Disruption</b>: Upgrading facilities while maintaining smooth operations.
•	Integrated Complexes: Unified spaces that bring multiple medical services under one roof for seamless care.

            </p>
            <h3 className="mt-35">Delivering Value Through Expertise</h3>
            <p className="sec-text mb-n1">
            <b>• Customized Solutions:</b> Tailored designs that align with your care delivery and operational goals.<br/>
<b>• Regulatory Compliance:</b> Ensuring adherence to healthcare standards for safety and quality.<br/>
<b>• Sustainable Design:</b> Eco-friendly solutions that offer long-term operational efficiencies.<br/>
<b>• End-to-end Project Management:</b> Seamless execution from concept to completion, on time and within budget.
            </p>
            <h3 className="mt-35">Partner with Us for Better Healthcare</h3>
            <p className="sec-text mb-n1">
            Better healthcare starts with better infrastructure. At Capital Engineering Consultancy, we help you build innovative, patient-focused spaces that drive exceptional outcomes.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href="#" className="nav-btn">
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous Post</span>
                    <span className="effect-1">Previous Post</span>
                  </span>
                </span>
              </a>
              <a href="#" className="nav-btn">
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Next Post</span>
                    <span className="effect-1">Next Post</span>
                  </span>
                </span>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
