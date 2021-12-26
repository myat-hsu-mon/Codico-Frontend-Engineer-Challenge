import type { NextPage } from "next";
import Link from "next/link";

import workStyles from "./Work.module.scss";

type WorkCardProps = {
  work: any;
};

const WorkCard: NextPage<WorkCardProps> = ({ work }) => {
  return (
    <Link href={`/work/${work.slug}`} passHref>
      <div
        className={workStyles.card}
        style={{ background: `url(${work.images.normal})` }}
      >
        {work.name}
        {work.slug}
      </div>
    </Link>
  );
};

export default WorkCard;
