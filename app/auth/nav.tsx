import Link from "next/link";
import Login from "./login";

export default async function Nav() {
  return (
    <div className="flex justify-etween items-ccenter py-8">
      <Link href={`/`}>
        Send it
      </Link>
      <ul className="flex items-center gap-6">
        <Login />
      </ul>
    </div>
  );
}
