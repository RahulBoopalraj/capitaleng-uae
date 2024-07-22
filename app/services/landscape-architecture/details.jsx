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
              <h2 className="sec-title">Landscape Architecture</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, we understand the profound
                impact that well-designed and sustainable landscapes can have on
                enhancing any project's appeal. Our team of dedicated landscape
                architects blends expertise with a commitment to creating
                thoughtful and eco-friendly landscape designs that harmoniously
                integrate hardscape and softscape elements.
              </p>
              <p className="sec-text mt-30">
                We strive to craft landscapes that are not only visually
                striking but also promote environmental sustainability. Our
                designs emphasize green spaces that minimize carbon footprints
                and improve the quality of life for communities. By
                collaborating closely with our clients, we ensure each design
                embodies their vision while respecting the local environment and
                cultural context.
              </p>
              <p className="sec-text mt-30">
                From initial site planning and detailed design to irrigation
                engineering and the implementation of landscaping and gardening
                works, our services encompass every facet of landscape design.
                We provide comprehensive drawing submittals and accurate plant
                specifications, ensuring that every element enhances both the
                aesthetic and functional aspects of the space.
              </p>
              <p className="sec-text mt-30">
                By utilizing the latest design tools and techniques, we aim to
                create innovative and functional landscapes that elevate the
                overall project experience. Our meticulous attention to detail
                and commitment to quality ensure that our landscapes not only
                exceed expectations but also endure over time.
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
            <h3>Our Services:</h3>
            <ol className="sec-text mt-30">
              <li className="mb-20">Site Planning</li>
              <li className="mb-20">Design</li>
              <li className="mb-20">Irrigation Engineering</li>
              <li className="mb-20">Landscape & Gardening Works</li>
              <li className="mb-20">Drawing Submittals</li>
              <li className="mb-20">Plant Specifications</li>
            </ol>
            <p className="sec-text mb-n1 mt-40">
              At Capital Engineering Consultancy, we are devoted to providing
              high-quality landscape design services that enhance the beauty of
              projects while contributing to the well-being of communities and
              the environment.
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
