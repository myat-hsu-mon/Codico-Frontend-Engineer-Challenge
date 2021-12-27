import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Seo from "../../common/Seo";
import kiwi from "../../data/kiwi.json";
import works from "../../data/works.json";
import workProductDetailStyles from "../../styles/WorkProductDetail.module.scss";

const WorkProductDetail: NextPage = ({ work }: any) => {
  const { name, description, gallery, colour_scheme } = kiwi;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < gallery.length) {
        if (index !== gallery.length - 1) {
          setIndex((ind) => ind + 1);
        } else {
          setIndex(0);
        }
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index]);

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
        <div
          className={workProductDetailStyles.slider}
          style={{ backgroundColor: colour_scheme }}
        >
          {gallery.map((gal, ind) => (
            <div
              key={gal.normal}
              style={{ display: index !== ind ? "none" : "" }}
              className={workProductDetailStyles.imageContainer}
            >
              <Image
                key={gal.normal}
                src={gal.normal}
                alt={name}
                layout="responsive"
                width={20}
                height={20}
              />
            </div>
          ))}
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
