import Link from "next/link";

export default function NavBar() {
  // About, Projects, Tech Stacks
  return (
    <>
      <nav className="navbar flex justify-center bg-base-100 shadow-sm h-14 py-0">
        <div className="w-screen max-w-7xl px-2 h-full">
          <div className="navbar-start">
            <Link href={'/'} >Aaron Arquette</Link>
          </div>
          <div className="navbar-center">

          </div>
          <div className="navbar-end h-full">
            <Link className="btn btn-ghost h-full" href={'/about'}>About</Link>
            <Link className="btn btn-ghost h-full" href={'/projects'}>Projects</Link>
            <Link className="btn btn-ghost h-full" href={'/tech-stacks'}>Tech Stacks</Link>
            <Link className="btn btn-ghost h-full" href={'/contact'}>Contact Me</Link>
          </div>
        </div>
      </nav>
    </>
  )
}