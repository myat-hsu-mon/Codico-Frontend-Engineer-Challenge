import type { NextPage } from "next";

import Footer from "../../common/Footer";
import layoutStyles from "./Layout.module.scss";

const Layout: NextPage = ({ children }) => (
  <div className={layoutStyles.container}>
    <main className={layoutStyles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
