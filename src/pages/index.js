import { Fragment } from "react";
import NavigationHeader from "../components/navigation-header";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

function PageIndex() {
  const { data, error } = useSWR("/api/users/1", fetcher);

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Fragment>
      <NavigationHeader />
      <h1>Welcome to Mastering Next.js!</h1>
      <p>Hello {data.name}!</p>
      <p>Your Email: {data.email}</p>
    </Fragment>
  );
}

export default PageIndex;
