import { Metadata } from "next";
import { Content } from "./components/Content";
import { getUsers, getUsersContributions } from "./api";
import { INITIAL_REGION, YEARS } from "./data";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Next.js",
};

export default async function Home() {
  const usersData = await getUsers({ region: INITIAL_REGION, page: 1 });

  const contributions = await getUsersContributions({
    users: usersData?.items ?? [],
    year: YEARS[0],
  });

  return (
    <Suspense fallback={<Loading />}>
      {usersData !== undefined && contributions !== undefined && (
        <Content
          initialUsersData={usersData}
          initialContributions={contributions}
        />
      )}
    </Suspense>
  );
}
