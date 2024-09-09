import Image from "next/image";
import { Contributions, UserItem } from "../types";

type UsersProps = {
  users: UserItem[];
  contributions: Contributions;
};

export const Users = ({ users, contributions }: UsersProps) => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 border shadow-md px-5 rounded"
    >
      {users.map((user) => {
        return (
          <li key={user.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <Image
                src={user.avatar_url}
                alt={user.login}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                width={100}
                height={24}
                priority
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {user.login}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  <a
                    href={`mailto:${user.html_url}`}
                    className="font-semibold text-sky-600"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    test@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                Contributions: {contributions?.[user.login]}
              </p>
              <p className="text-sm leading-6 text-gray-900">
                <a
                  href={user.html_url}
                  className="font-semibold text-indigo-600"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Profile <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
