import { Fragment } from "react";

function PageDashboard({ user: { name, bio, blog, twitter_username } = {} }) {
  return (
    <Fragment>
      <h1>{name}</h1>
      <p>Bio: {bio}</p>
      <p>
        Blog:{" "}
        <a href={blog} target="_blank">
          {blog}
        </a>
      </p>
      <p>
        Twitter:{" "}
        <a href={`https://twitter.com/${twitter_username}`} target="_blank">
          @{twitter_username}
        </a>
      </p>
    </Fragment>
  );
}

export async function getStaticProps() {
  const userResponse = await fetch("https://api.github.com/users/IamManchanda");
  const user = await userResponse.json();

  return {
    props: {
      user,
    },
  };
}

export default PageDashboard;
