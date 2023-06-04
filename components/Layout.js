import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";


export default function Layout({children}) {

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
    <div className="bg-blue-800 w-screen h-screen flex">
        <div className="w-full flex p-4 pr-0">
          <Nav />
          <div className="bg-white flex-grow p-4 mr-4 rounded-lg shadow-lg">
            {children}
          </div>  
        </div>
      </div>
  )
}
