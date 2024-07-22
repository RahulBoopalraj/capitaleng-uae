"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[1];
  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src="/assets/img/service/service-details1-1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Environmental Solutions</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, we take pride in being a
                premier provider of environmental, health, and safety advisory
                and consulting services across the Middle East and Asia Pacific.
                With our professional approach and unwavering commitment to
                excellence, we serve both public and private sector clients,
                offering a comprehensive range of services designed to tackle
                environmental challenges and promote sustainability.
              </p>
              <p className="sec-text mt-30">
                Our multidisciplinary team combines extensive international
                experience with in-depth local knowledge, providing a unique
                blend of regulatory expertise and top-tier service. As a Class
                ‘A’ Environmental Consultant registered with the Environment
                Agency - Abu Dhabi (EAD), we are dedicated to delivering
                outstanding results for our clients.
              </p>
            </div>
            <div className="col-lg-12">
              <div className="video-area-1 mt-80 mb-80">
                <div className="video-wrap">
                  <div
                    className="jarallax background-image"
                    style={{
                      backgroundImage: "url(/assets/img/normal/video_2-2.png)",
                      overflow: "hidden",
                    }}
                  ></div>
                  <a
                    href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                    className="play-btn popup-video background-image"
                  ></a>
                </div>
              </div>
            </div>
            <h3 className="mt-40">Our Services Include:</h3>
            <p className="sec-text mb-30">
              1. Environmental and Social Impact Assessments
            </p>
            <p className="sec-text mb-30">2. Environmental Management Plans</p>
            <p className="sec-text mb-30">
              3. Environmental Monitoring of Works
            </p>
            <p className="sec-text mb-30">4. Environmental Audits</p>
            <p className="sec-text mb-30">5. Waste Management Consultancy</p>
            <p className="sec-text mb-30">
              6. Training and Environmental Education
            </p>
            <p className="sec-text mb-30">7. Risk and Hazard Assessments</p>
            <p className="sec-text mb-30">
              8. Environmental Due Diligence Consultancy
            </p>
            <p className="sec-text mb-n1 mt-40">
              At Capital Engineering Consultancy, we are dedicated to providing
              innovative and sustainable solutions that address our clients'
              needs while advancing environmental sustainability. With our
              expertise, experience, and commitment to quality, we are your
              trusted partner for all environmental, health, and safety advisory
              and consulting services.
            </p>
            <div className="row gy-4 mt-40">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Custom Solution
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-6.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      In-time Result
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
