import Link from "next/link";

export function DirectoryLocation({ name, count, href}) {
  return(
    <Link
      href={href}
     className="flex items-center cursor-pointer">
      <p className="font-medium text-bsae">{name}</p>
      <p className="ml-2 font-light">({count})</p>
    </Link>
  )
};