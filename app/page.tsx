// import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Aaron Arquette</h1>
            <p className="py-6">Full-Stack Developer</p>
            <button className="btn btn-primary">Start</button>
          </div>
        </div>
      </section>
      <section className="hero bg-base-100 h-screen">
        <div className="hero-content flex-col">
          {/* <Image></Image> */}
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">An inspiring full-stack developer</p>
          </div>
        </div>
      </section>
    </>
  );
}
