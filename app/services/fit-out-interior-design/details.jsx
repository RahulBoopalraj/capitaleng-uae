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
          <div className="col-xl-8 mb-40">
            <div className="title-area mb-35">
              <h2 className="sec-title">Fit Out & Interior Design</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, our Interior Design Team is
                composed of a skilled group of professionals dedicated to
                providing outstanding design solutions for a wide range of
                residential, commercial, and hospitality projects. With an
                impressive track record of 1361 permits, our team is committed
                to creating visually stunning designs that seamlessly integrate
                functionality, comfort, and customization to meet each client's
                unique needs.
              </p>
              <p className="sec-text mt-30">
                We believe that exceptional design goes beyond aesthetics to
                include functionality and sustainability. By employing
                cutting-edge technology and keeping up with the latest design
                trends, our team crafts spaces that are not only beautiful but
                also practical, efficient, and environmentally conscious. We
                emphasize the use of high-quality materials and finishes to
                enhance both the visual appeal and durability of every project.
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
            <h3>Our Scope of Work for Fit Out and Interior Design Includes:</h3>
            <p className="sec-text mb-40">
              1. Concept Design – Mood board creation and concept sketches.
            </p>
            <p className="sec-text mt-n1 mb-40">
              2. Detail Design – Preparation of detailed drawings and 3D views.
            </p>
            <p className="sec-text mt-30">
              3. Material and Finish Review – Evaluation of samples, submittals,
              and shop drawings.
            </p>
            <p className="sec-text mb-40 mt-30">4. Value Engineering.</p>
            <p className="sec-text mt-30">5. MEP Services.</p>
            <p className="sec-text mb-40 mt-30">
              6. Tender Document Preparation.
            </p>
            <p className="sec-text mt-30">
              7. Construction Stage – Supervision and preparation of Snag List.
            </p>
            <p className="sec-text mb-40 mt-30">
              Understanding that each project is unique, our team employs a
              collaborative approach, working closely with clients to understand
              their specific needs and preferences. We offer comprehensive,
              customized solutions designed to meet the distinct demands of each
              project.
            </p>
            <p className="sec-text mb-n1 mt-40">
              Our unwavering commitment to excellence is underscored by our
              ability to secure approvals from authorities and provide competent
              supervision, ensuring the successful realization of our clients'
              visions.
            </p>
          </div>
          <div className="col-xl-8">
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
