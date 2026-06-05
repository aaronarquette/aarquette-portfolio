export default function Home() {
  return (
    <>
      {/* //TODO: Make the total height of navbar and hero component be the height of the screen */}
      <section className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Aaron Arquette</h1>
            <p className="py-6">Full-Stack Developer</p>
            <button className="btn btn-primary">Start</button>
          </div>
        </div>
      </section>
    </>
  );
}
