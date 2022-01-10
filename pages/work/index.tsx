import React from "react";
import type { NextPage } from "next";

import Seo from "../../common/Seo";
import Header from "../../common/Header";
import Tags from "../../ components/Tags/Tags";
import Work from "../../ components/Work";
import workStyles from "../../styles/Work.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Our iOS, Android &amp; Web Development Work" />
      <Header />
      <div className={workStyles.container}>
        <div className={workStyles.text}>
          <p>Here’s 5% of</p>
          <p>our published work.</p>
          <p>See 100% of our power.</p>
        </div>
        <div className={workStyles.tags}>
          <Tags />
        </div>

        <div className={workStyles.workResults}>
          <Work />
        </div>
      </div>
    </div>
  );
};

export default Home;
