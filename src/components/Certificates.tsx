export default function Certificates() {
  return (
    <section className="w-full center flex-col ">
      <header className="w-full center sticky top-0 h-[3rem] border-y-1 border-border1 bg-bg1">
        <p className="text-xl font-black text-primary">Certificates</p>
      </header>

      <div className="w-full flex flex-col justify-center items-start pl-4 gap-2 my-[2rem]">
        <ul className="flex flex-col px-4 gap-y-2 sm:gap-y-4">
          <li className="list-disc">
            <h2 className="font-bold">A+</h2>
            <p className="text-sm text-text2">~ CompTIA | 04/2026 - 04/2029</p>
          </li>
          <li className="list-disc">
            <h2 className="font-bold">CySA+</h2>
            <p className="text-sm text-text2">~ CompTIA | 02/2024 - 02/2027</p>
          </li>
          <li className="list-disc">
            <h2 className="font-bold">ISC2-CC</h2>
            <p className="text-sm text-text2">~ ISC2 | 12/2023 - 12/2026</p>
          </li>
          <li className="list-disc">
            <h2 className="font-bold">ITIL V4 Foundation</h2>
            <p className="text-sm text-text2">
              ~ PeopleCert | 10/2025 - 10/2028
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
