import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {

  const { data: session } = useSession();

  // Si el usuario no está logeado
  if (!session) {
    return (
      <div className="bg-blue-800 w-screen h-screen flex items-center">
        <div className="w-full text-center">
          <button 
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    )
  }

  // Si el usuario está logeado
  return (
    <div>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
