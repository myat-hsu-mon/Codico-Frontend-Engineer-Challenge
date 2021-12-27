import React from "react";
import type { NextPage } from "next";

import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Seo from "../../common/Seo";
import kiwi from "../../data/kiwi.json";
import works from "../../data/works.json";
import workProductDetailStyles from "../../styles/WorkProductDetail.module.scss";
import Image from "next/image";

const WorkProductDetail: NextPage = ({ work }: any) => {
  const { name, description, gallery, colour_scheme } = kiwi;
  const [activeImage, setActiveImage] = React.useState(gallery[0]?.normal);
  const [index, setIndex] = React.useState(1);
  console.log("activeImage", activeImage);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (index <= gallery.length - 1) {
        setActiveImage(gallery[index]?.normal);
        setIndex((index) => index + 1);
      } else {
        setActiveImage(gallery[0]?.normal);
        setIndex(1);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);
  console.log("kiwi", kiwi);
  return (
    <div>
      <Seo title={work.slug} />
      <div className={workProductDetailStyles.header}>
        <div>
          <Link href="/work?tags=all" passHref>
            <a>
              <span>
                <FiArrowLeft style={{ fontSize: "1.2rem" }} />
              </span>
              <span>Back to work</span>
            </a>
          </Link>
        </div>
        <button className={workProductDetailStyles.requestBtn}>
          Request a quote
        </button>
      </div>
      {/* detail part */}
      <div className={workProductDetailStyles.body}>
        <div className={workProductDetailStyles.detail}>
          <h2>{name}</h2>
          <p>{description}</p>
          <div className={workProductDetailStyles.flex}>
            <div>Key Features</div>
           <div>
             <div>Car Inspection with 204 Check Points</div>
             <div>Real-time Auction Bidding</div>
           </div>
          </div>
        </div>
        <div className={workProductDetailStyles.slider} style={{backgroundColor: colour_scheme}}>
          <Image src={gallery[0].normal} alt={name} layout="responsive" width={20} height={20}/>
        </div>
        <div className={workProductDetailStyles.arrowLeft}>
          <FiArrowLeft style={{ fontSize: "1.2rem" }} />
        </div>
        <div className={workProductDetailStyles.arrowRight}>
          <FiArrowRight style={{ fontSize: "1.2rem" }} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const slugs = works.map((work) => work.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const work = works.filter((work) => work.slug === params.slug);
  return {
    props: {
      work: work[0],
    },
  };
}

export default WorkProductDetail;
