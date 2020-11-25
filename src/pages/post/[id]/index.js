import { Fragment } from "react";
import { useRouter } from "next/router";

import NavigationHeader from "../../../components/navigation-header";

function PageSinglePost() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Fragment>
      <NavigationHeader />
      <h1>Post Id: {id}</h1>
    </Fragment>
  );
}

export default PageSinglePost;
