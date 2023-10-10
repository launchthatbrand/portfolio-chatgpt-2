import Layout from "../layouts/Main";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Test: NextPageWithLayout = () => {
  return (
    <>
      <div className="basis-3/6">TEST CONTENT</div>
    </>
  );
};

Test.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Test;
