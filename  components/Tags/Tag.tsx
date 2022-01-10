import type { NextPage } from "next";
import { useRouter } from "next/router";

import tagsStyles from "./Tags.module.scss";

type Tag = {
  name: string;
  slug: string;
  onClick: Function;
};

const Tag: NextPage<Tag> = ({ name, slug, onClick }) => {
  const router = useRouter();
  const tags = router.query.tags;
  return (
    <div className={tagsStyles.tagCard}>
      <button
        onClick={() => onClick(slug)}
        className={tags === slug ? tagsStyles.current : ""}
      >
        {name}
      </button>
    </div>
  );
};

export default Tag;
