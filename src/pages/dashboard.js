import { Fragment } from "react";
import useSWR from "swr";
import NavigationHeader from "../components/navigation-header";
import fetcher from "../utils/fetcher";

const userDataApiUrl = "https://api.github.com/users/IamManchanda";

function PageDashboard({ initialUserData }) {
  const { data: userData, error: userDataError } = useSWR(
    userDataApiUrl,
    fetcher,
    {
      initialData: initialUserData,
    },
  );

  if (userDataError) return <div>Failed to load.</div>;
  if (!userData) return <div>Loading...</div>;

  const { name, bio, blog, twitter_username } = userData;

  return (
    <Fragment>
      <NavigationHeader />
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
  const initialUserData = await fetcher(userDataApiUrl);

  return {
    props: {
      initialUserData,
    },
  };
}

export default PageDashboard;
