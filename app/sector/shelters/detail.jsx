"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import shelter from "@/public/assets/images/shelter.png";
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
                  src={shelter}
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
              <h2 className="sec-title">Shelters</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we understand the critical role shelters play in safeguarding lives and property. Whether it's a natural disaster, conflict, or displacement, our team of experts is dedicated to providing innovative shelter solutions that prioritize safety, durability, and functionality.

              </p>
              <p className="sec-text mt-30">
              We offer a range of shelter solutions tailored to specific needs and contexts, including emergency, transitional, and permanent shelters. Our designs prioritize safety, accessibility, and sustainability, ensuring structural integrity, health and hygiene, energy efficiency, and community integration.
              </p>
            </div>
            <h3>Designing for Safety and Sustainability</h3>
            <p className="sec-text mb-n1">
            Our shelter designs prioritize safety, accessibility, and sustainability:<br/>
<b>• Structural Integrity:</b> Ensuring that shelters can withstand extreme weather conditions and seismic activity.<br/>
<b>• Health and Hygiene:</b> Incorporating features to promote good hygiene and prevent the spread of disease.<br/>
<b>• Energy Efficiency:</b> Designing shelters to minimize energy consumption and reduce operational costs.<br/>
<b>• Community Integration:</b> Creating shelters that foster social cohesion and community resilience.
            </p>
            <h3 className="mt-35">Expert Guidance at Every Stage</h3>
            <p className="sec-text mb-n1">
            From assessment to post-construction support, we oversee every phase of your project:<br/>
<b>• Needs Assessment & Site Selection:</b> Identifying the best locations and understanding specific needs.<br/>
<b>• Design & Engineering:</b> Delivering innovative, cost-effective solutions.<br/>
<b>• Construction & Installation:</b> Utilizing efficient techniques and quality materials.<br/>
<b>• Post-Construction Support:</b> Ensuring shelters remain durable and functional over time.
            </p>
            <h3 className="mt-35">Partner With Us & Make a Difference</h3>
            <p className="sec-text mb-n1">
            When you work with Capital Engineering Consultancy, you invest in more than infrastructure, you invest in lives. Together, we can create shelters that stand as beacons of hope, safety, and resilience.
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
