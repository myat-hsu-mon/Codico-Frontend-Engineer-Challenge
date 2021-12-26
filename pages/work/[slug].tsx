import type { NextPage } from "next";

import works from "../../data/works.json";
import Seo from "../../common/Seo";

const WorkProductDetail: NextPage = ({ work }: any) => {
  return (
    <div>
      <Seo title={work.slug} />
      <h1>{work.name}</h1>
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
