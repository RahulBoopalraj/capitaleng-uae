import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";

import SectorDetails from "./details";
import { allPortfolio } from "@/data/portfolio";
export const metadata = {
  title:
    "Project Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
