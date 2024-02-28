export default function About() {
  return (
    <section className="py-8" id="about">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">About me</h2>
        <div className="mt-12 pl-12 relative before:absolute before:top-0 before:left-20 before:bottom-2 before:w-1 before:bg-white">
          <div className="pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
            <h3 className="absolute -left-9 text-lg font-semibold">2017</h3>
            <p>Lulus dari SD</p>
          </div>
          <div className="pt-10 pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
            <h3 className="absolute -left-9 text-lg font-semibold">2019</h3>
            <p>Lulus dari SMP</p>
          </div>
          <div className="pt-10 pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
            <h3 className="absolute -left-9 text-lg font-semibold">2022</h3>
            <p>Lulus dari SMA</p>
          </div>
          <div className="pt-10 pl-16 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[26px]">
            <h3 className="absolute -left-9 text-lg font-semibold">2017</h3>
            <p>Menempuh jenjang perkuliahan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
