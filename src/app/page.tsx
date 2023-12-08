import prisma from "@/lib/db";
import UserCard from "@/app/_components/user-card";
import AddDialog from "@/app/_components/add-dialog";

export default async function Home() {
  const users = await prisma.user.findMany({})

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold">Users: </h1>
      <AddDialog />
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </ul>
      ) : (
          <p>Users not found</p>
        )
      }
    </main>
  )
}
