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
              <h2 className="sec-title">Structure Engineering</h2>
              <p className="sec-text mt-30">
                Capital Engineering Consultancy, with branches worldwide,
                proudly maintains ISO-9001 certification, ensuring the highest
                standards of quality and excellence.
              </p>
              <p className="sec-text mt-30">
                At Capital, we are dedicated to creating structural designs that
                harmonize perfectly with architectural beauty while delivering
                optimal efficiency and performance. Our skilled engineers
                conduct thorough analyses and evaluations, developing bespoke
                solutions that address budgetary constraints and client needs,
                all while preserving both visual appeal and structural strength.
              </p>
              <p className="sec-text mt-30">
                Choose Capital Engineering Consultancy, our structural services
                cover a broad range of projects, including expansions, new
                constructions, and the refurbishment and renovation of existing
                buildings. We provide end-to-end structural solutions, from
                initial design and conceptualization to regulatory approvals,
                construction, and on-site supervision.
              </p>
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
              <p className="sec-text mt-30">
                Choose Capital Engineering Consultancy for your structural
                engineering requirements, and benefit from unparalleled
                excellence in every phase of your project.
              </p>
            </div>
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
