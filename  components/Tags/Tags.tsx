import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import categories from "../../data/categories.json";
import Tag from "./Tag";
import tagsStyles from "./Tags.module.scss";

const Tags: NextPage = () => {
  const router = useRouter();

  const onClick = (slug: string) => {
    router.push(`/work?tags=${slug}`);
  };

  return (
    <div className={tagsStyles.container}>
      <div className={tagsStyles.grid}>
        <Tag name="all" slug="all" onClick={onClick}>
          all
        </Tag>
        {categories.map((category) => (
          <Tag key={category.name} {...category} onClick={onClick}>
            {category.name}
          </Tag>
        ))}
      </div>
      <div className={tagsStyles.legend}>
        <h6>Legend</h6>
          <div className={tagsStyles.grid2}>
            <div>App</div>
            <div>Web</div>
            <div>Cms</div>
            <div>UI/UX</div>
          </div>
      </div>
    </div>
  );
};

export default Tags;
