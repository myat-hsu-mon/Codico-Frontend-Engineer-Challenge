import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/work?tags=all");
  }, []);
  return <div></div>;
};

export default Index;
