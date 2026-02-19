


import { UserCard } from "@/component/i-tect-card/user-card";
import { UserResponse } from "../components/type/users";

const BASE_URL = process.env.NEXT_PUBLIC_API;

async function getUsers(): Promise<UserResponse[]> {
  const response = await fetch(`${BASE_URL}/api/v1/users`, {
    cache: "no-store", // or { next: { revalidate: 60 } }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default async function UserPage() {
  const users = await getUsers();

  return (
    <main>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}          
            email={user.email}     
            name={user.name}
            role={user.role}
            avatar={user.avatar}
            creationAt={user.creationAt}
          />
        ))}
      </section>
    </main>
  );
}
