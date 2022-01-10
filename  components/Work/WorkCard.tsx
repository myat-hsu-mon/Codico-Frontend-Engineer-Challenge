import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import workStyles from "./Work.module.scss";

type WorkCardProps = {
  work: any;
};

const WorkCard: NextPage<WorkCardProps> = ({ work }) => {
  console.log("grid-size", work.grid_size);
  console.log("grid-size", typeof work.grid_size);
  return (
    <Link href={`/work/${work.slug}`} passHref>
      <div
        className={[
          workStyles.card,
          work.grid_size === 0.5 ? workStyles.gridHalf : workStyles.gridQuarter,
        ].join(" ")}
        // style={{
        //   width: work.grid_size * 100 + "%",
        //   display: "inline-block",
        //   height: "500px",
        // }}
      >
        <div className={workStyles.textContainer}>
          <h2>
            {work.categories.map((category: any) => category.name).join(", ")}
          </h2>
          <h3>{work.name}</h3>
        </div>
        <Image
          className={workStyles.image}
          src={work.images.normal}
          alt=""
          layout="fill"
          height={40}
          width={40}
        />
      </div>
    </Link>
  );
};

export default WorkCard;
