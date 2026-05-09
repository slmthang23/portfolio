import profileImg from "../assets/profile.jpg";
import myResume from "../assets/resume.pdf";
import { Phone, Mail, Link, Download } from "lucide-react";

export default function Info() {
  return (
    <section className="w-full center flex-col">
      <header className="w-full center sticky top-0 h-[3rem] border-y-1 border-border1 bg-bg1">
        <h1 className="text-xl font-black text-primary">Solomon Thang</h1>
      </header>

      <div className="center my-[2rem]">
        <div className="boxShadow">
          <div className="flex flex-col justify-center items-center gap-y-8 sm:flex-row sm:gap-x-8 sm:items-center px-4 mb-[0rem]">
            <img
              src={profileImg}
              alt="profile picture"
              className="w-[125px] sm:w-[200px]"
            />

            <ul className="flex flex-col gap-y-4 ">
              <li className="flex gap-2">
                <a href="tel:+17162752175" className="flex gap-2">
                  {" "}
                  <Phone /> : 716-275-2175
                </a>
              </li>
              <li className="flex gap-2">
                <a href="mailto:slmthang23@gmail.com" className="flex gap-2">
                  <Mail /> : slmthang23@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <a
                  href="https://github.com/slmthang23"
                  aria-label="Go to my github profile"
                  className="flex gap-2"
                >
                  <Link /> : github.com/slmthang23/
                </a>
              </li>
              <li className="flex gap-2">
                <a
                  href={myResume}
                  id="resume"
                  download="solomon-thang-resume"
                  className="center gap-2 border-1 border-border1 text-sm text-primary hover:text-gray-900 hover:bg-primary px-2 py-1 rounded-lg"
                >
                  <Download size={16} /> Resume
                </a>
              </li>
            </ul>
          </div>
          <p className="px-4 text-justify">
            <div className="border-t-1 border-border1 my-[2rem]" />
            Hi, I am <span className="text-primary">Solomon Thang</span>. I
            enjoy solving complex problems and building impactful technology
            solutions, with a strong passion for software engineering and IT
            infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
