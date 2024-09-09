"use client";

import { useState } from "react";
import { Header } from "./Header";
import { getUsers, getUsersContributions } from "../api";
import { Users } from "./Users";
import type { Contributions, UsersResponse } from "../types";
import { INITIAL_REGION, PER_PAGE, YEARS } from "../data";

import { Pagination } from "@nextui-org/react";

type ContentProps = {
  initialUsersData: UsersResponse;
  initialContributions: Contributions;
};

export const Content = ({
  initialUsersData,
  initialContributions,
}: ContentProps) => {
  const [usersData, setUsersData] = useState<UsersResponse>(initialUsersData);

  const [contributions, setContributions] =
    useState<Contributions>(initialContributions);

  const [year, setYear] = useState(YEARS[0]);

  const [region, setRegion] = useState(INITIAL_REGION);

  const [page, setPage] = useState(1);

  const refetchUsersData = async (
    region: string,
    year: number,
    page: number = 1
  ) => {
    const usersData = await getUsers({ region, page });

    if (usersData === undefined) return;

    const contributions = await getUsersContributions({
      users: usersData?.items ?? [],
      year,
    });

    setUsersData(usersData);

    if (contributions === undefined) return;

    setContributions(contributions);
  };

  const handleRegionChange = (region: string) => {
    refetchUsersData(region, year, page);

    setRegion(region);
  };

  const handleYearChange = (year: number) => {
    refetchUsersData(region, year, page);

    setYear(year);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header
        year={year}
        handleYearChange={handleYearChange}
        region={region}
        handleRegionChange={handleRegionChange}
      />

      <main>
        {usersData?.items !== undefined && contributions !== undefined && (
          <>
            <Users contributions={contributions} users={usersData.items} />

            <Pagination
              isCompact
              showControls
              size="lg"
              total={Math.ceil(usersData.total_count / PER_PAGE)}
              initialPage={1}
              onChange={(page) => {
                refetchUsersData(region, year, page);

                setPage(page);
              }}
              classNames={{
                base: "mt-4",
                wrapper: "m-auto p-0",
              }}
            />
          </>
        )}
      </main>
    </div>
  );
};
