export default function Experiences() {
  return (
    <section className="w-full center flex-col">
      <header className="w-full center sticky top-0 h-[3rem] border-y-1 border-border1 bg-bg1">
        <h1 className="text-xl font-extrabold text-primary">Education</h1>
      </header>

      <div className="w-full flex flex-col justify-center items-start pl-4 my-[2rem] ">
        <ul className="flex flex-col px-4 gap-y-2 sm:gap-y-4">
          <li className="list-disc">
            <p>B.S in Computer Science</p>
            <p className="text-sm text-text2">
              ~ Canisius College | 08/2019-05/2023
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
