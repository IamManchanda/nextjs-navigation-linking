import { Fragment } from "react";
import NavigationHeader from "../../../components/navigation-header";
import fetcher from "../../../utils/fetcher";

function PageSinglePost({ post: { title, body } = {} }) {
  return (
    <Fragment>
      <NavigationHeader />
      <h1>{title}</h1>
      <p>{body}</p>
    </Fragment>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const post = await fetcher(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return {
    props: {
      post,
    },
  };
}

export default PageSinglePost;
