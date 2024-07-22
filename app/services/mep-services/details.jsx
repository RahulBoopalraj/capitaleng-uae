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
              <h2 className="sec-title">MEP Services</h2>
              <p className="sec-text mt-30">
                Capital Engineering Consultancy is a distinguished leader in
                multi-disciplinary engineering, offering a comprehensive suite
                of MEP design services that include HVAC, electrical, plumbing,
                fire protection, and security and information technology
                systems. With a history of delivering exceptional results, we
                are dedicated to providing unparalleled service excellence to
                our esteemed clients.
              </p>
              <p className="sec-text mt-30">
                Our MEP design services encompass a wide range of solutions,
                from meticulous analysis and conceptualization to precise
                construction budgeting, detailed services documentation, and
                comprehensive construction administration. By collaborating
                closely with our clients, we develop bespoke solutions tailored
                to their specific requirements, consistently striving to exceed
                expectations at every stage of the project lifecycle.
              </p>
              <p className="sec-text mt-30">
                Understanding the importance of innovation and efficiency in MEP
                design, we focus on creating sustainable and environmentally
                conscious solutions. Our team of seasoned professionals,
                equipped with state-of-the-art tools and technologies, delivers
                cutting-edge solutions that achieve remarkable results.
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
            <p className="sec-text mt-30">
              What sets us apart is our unwavering commitment to quality,
              meticulous attention to detail, and dedication to delivering
              exceptional customer service. Whether you need a comprehensive MEP
              design partner or specialized support, we have the expertise and
              experience to meet your requirements with excellence.
            </p>
            <h3 className="mt-40">Areas of Expertise in MEP:</h3>
            <p className="sec-text mb-30">1. Mechanical Engineering</p>
            <p className="sec-text mb-30">
              2. Electrical and Low Current Engineering
            </p>
            <p className="sec-text mb-30">3. HVAC Engineering</p>
            <p className="sec-text mb-30">
              4. BIM (Building Information Modeling)
            </p>
            <p className="sec-text mb-30">5. Infrastructure Design</p>
            <p className="sec-text mb-30">6. Energy Modeling</p>
            <p className="sec-text mb-30">7. Sustainable Design Analysis</p>
            <p className="sec-text mb-30">
              8. DM Green Building and Estidama Compliant Design
            </p>
            <p className="sec-text mb-30">9. Value Engineering</p>
            <p className="sec-text mb-30">10. Building Retrofit Design</p>
            <p className="sec-text mb-30">11. Quantity Surveying</p>
            <p className="sec-text mb-n1 mt-40">
              Choose Capital Engineering Consultancy as your trusted partner for
              all your MEP design needs, and elevate your projects to new
              heights of engineering excellence.
            </p>
          </div>
          <div className="col-xl-8 mt-40">
            <div className="row gy-4">
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
