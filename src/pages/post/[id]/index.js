import { Fragment } from "react";
import NavigationHeader from "../../../components/navigation-header";

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
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const post = await postResponse.json();

  return {
    props: {
      post,
    },
  };
}

export default PageSinglePost;
