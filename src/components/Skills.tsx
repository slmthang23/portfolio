export default function Skills() {
  return (
    <section className="w-full center flex-col">
      <header className="w-full center sticky top-0 h-[3rem] border-y-1 border-border1 bg-bg1">
        <p className="text-xl font-black text-primary">Skills</p>
      </header>

      <div className="w-full flex flex-col justify-center items-start my-[2rem] px-4">
        <ul className="flex flex-col px-4 gap-y-2 sm:gap-y-4">
          <li className="list-disc">
            Programming:{" "}
            <span className="text-text2 italic">
              Python, TypeScript, Bash and Powershell
            </span>
          </li>
          <li className="list-disc">
            Systems:{" "}
            <span className="text-text2 italic">Windows and Linux</span>
          </li>
          <li className="list-disc">
            Networking:{" "}
            <span className="text-text2 italic">TCP/IP, DNS, DHCP, VLAN</span>
          </li>
          <li className="list-disc">
            IT Tools:{" "}
            <span className="text-text2 italic">
              {/* Active Directory, Wireshark, osTicket, Splunk and
                            pfSense */}
              Active Directory, Wireshark and osTicket
            </span>
          </li>
          <li className="list-disc">
            Development Tools:{" "}
            <span className="text-text2 italic">
              Git, Docker and GitHub Actions
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
