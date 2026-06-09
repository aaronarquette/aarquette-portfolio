import Link from "next/link";

export default function NavBar() {
  // About, Projects, Tech Stacks
  return (
    <>
      <nav className="navbar fixed z-50 justify-center bg-base-200/5 backdrop-blur-sm shadow-md h-14 py-0">
        <div className="navbar-start h-full justify-center">
          <Link className="" href={'/'} >Aaron Arquette</Link>
        </div>
        <div className="navbar-center h-full">
          <Link className="btn btn-ghost h-full" href={'/about'}>About</Link>
          <Link className="btn btn-ghost h-full" href={'/projects'}>Projects</Link>
          <Link className="btn btn-ghost h-full" href={'/tech-stacks'}>Tech Stacks</Link>
        </div>
        <div className="navbar-end h-full justify-center">
          <Link className="btn btn-ghost h-full" href={'/contact'}>Contact Me</Link>
        </div>
      </nav>
    </>
  )
}