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
              <h2 className="sec-title">Project Management Consultancy</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, we go beyond traditional
                project management to become your dedicated partners in success.
                We are committed to providing integrated, multidisciplinary
                services that cover every aspect of the construction project
                lifecycle. From feasibility studies and conceptual design to
                final testing and commissioning, our comprehensive range of
                services is designed to ensure the success of your project.
              </p>
              <p className="sec-text mt-30">
                Our team of experts offers extensive experience across all
                construction phases, including design, tendering, procurement,
                construction management, and contract administration. We
                emphasize collaboration, working closely with clients to
                understand their unique needs and deliver bespoke solutions that
                surpass expectations.
              </p>
              <p className="sec-text mt-30">
                Focused on delivering exceptional value, we have a proven track
                record of completing projects on schedule, within budget, and to
                the highest quality standards. Our multidisciplinary approach
                and use of cutting-edge technologies and best practices ensure
                optimal project outcomes.
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
            <p className="sec-text mb-30">1. Value Engineering</p>
            <p className="sec-text mb-30">2. Supervision</p>
            <p className="sec-text mb-30">3. Contract Management</p>
            <p className="sec-text mb-30">4. Design Management and Review</p>
            <p className="sec-text mb-30">5. Planning</p>
            <p className="sec-text mb-30">6. Project Cost Control</p>
            <p className="sec-text mb-30">7. Deputations of Engineers</p>
            <p className="sec-text mb-30">
              8. Quality Management and Assurance
            </p>
            <p className="sec-text mb-30">9. Risk Management</p>
            <p className="sec-text mb-30">10. Scheduling</p>
            <p className="sec-text mb-30">11. Procurement</p>
            <p className="sec-text mb-30">12. Construction Management</p>
            <p className="sec-text mb-30">
              13. Claims Management and Dispute Resolution
            </p>
            <p className="sec-text mb-30">14. Contractual FIDIC Advice</p>
            <p className="sec-text mb-n1 mt-40">
              At Capital Engineering Consultancy, we offer more than just
              project management; we bring excellence, integrity, and innovation
              to every project. Allow us to be your trusted partner in achieving
              success in the construction industry.
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
