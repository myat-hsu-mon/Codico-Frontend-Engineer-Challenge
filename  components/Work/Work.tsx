import type { NextPage } from "next";

import works from "../../data/works.json";
import WorkCard from "./WorkCard";
import workStyles from "./Work.module.scss";

const Work: NextPage = () => {
  return (
    <div className={workStyles.grid}>
      {works.map((work) => (
        <WorkCard key={work.name} work={work} />
      ))}
    </div>
  );
};

export default Work;
