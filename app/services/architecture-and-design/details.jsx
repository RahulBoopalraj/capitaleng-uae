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
              <h2 className="sec-title">Architecture & Design</h2>
              <p className="sec-text mt-30">
                Welcome to Capital Engineering Consultancy, your trusted partner
                for crafting visionary architecture in the UAE. We are a leading
                consultancy dedicated to creating timeless structures that blend
                functionality, beauty, and sustainability. With over a decade of
                experience, we have established a strong reputation for
                delivering exceptional results on a diverse range of projects.
              </p>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, we are driven by a
                commitment to excellence, integrity, and innovation. We go
                beyond simply building structures; we shape environments that
                inspire, connect, and enhance the lives of those who inhabit
                them.
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
            <h3>Our Expertise:</h3>
            <p className="sec-text mb-n1">
              Our team of highly skilled architects and designers brings a
              wealth of experience and expertise to every project. We work
              closely with our clients to understand their unique vision and
              translate it into reality, exceeding expectations with each
              endeavor.
            </p>
            <p className="sec-text mt-n1 mb-40">
              Our comprehensive range of services covers every phase of the
              architectural process, from initial concept development to project
              management. With a meticulous attention to detail and a commitment
              to excellence, we provide:
            </p>
            <ol className="sec-text mt-30">
              <li>Conceptual Design Development</li>
              <li>Detail Design Development</li>
              <li>Construction Document Preparation</li>
              <li>As-Built Drawings</li>
              <li>Feasibility Studies</li>
              <li>Bidding and Negotiation</li>
              <li>Construction and Contract Administration</li>
              <li>Architect of Record</li>
              <li>Project Management</li>
            </ol>
            <p className="sec-text mb-40 mt-30">
              Discover the transformative potential of architectural excellence
              with Capital Engineering Consultancy. Reach out to us today to
              learn how we can turn your vision into reality and create a
              lasting legacy for future generations.
            </p>
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
                      Advanced Design
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Leverage cutting-edge design ensuring robust project
                    outcomes
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="video-area-1 mt-80 mb-80">
                  <div className="video-wrap">
                    <div
                      className="jarallax background-image"
                      style={{
                        backgroundImage:
                          "url(/assets/img/normal/video_2-2.png)",
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
