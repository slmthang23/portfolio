import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [proj1, toggleProj1] = useState(false);
  const [proj2, toggleProj2] = useState(false);

  return (
    <section className="w-full center flex-col">
      <header className="w-full center sticky top-0 h-[3rem] border-y-1 border-border1 bg-bg1">
        <p className="text-xl font-black text-primary">Projects</p>
      </header>

      <div className="w-full flex flex-col justify-center items-start my-[2rem]">
        <ul className="w-full flex flex-col gap-y-[2rem] px-4">
          <li className="w-full border-1 border-border1">
            <div
              className="w-full flex justify-between items-center border-b-1 border-border1 pb-[1rem] p-4 cursor-pointer"
              onClick={() => toggleProj1((prev) => !prev)}
            >
              <div>
                <h2 className="text-lg font-bold">Pockeep</h2>
                <p className="text-sm text-text2">~ Django & React</p>
              </div>
              {proj1 ? <ChevronUp /> : <ChevronDown />}
            </div>

            {proj1 && (
              <>
                <ul className="flex flex-col gap-y-2 pl-8 p-4 mb-[1rem]">
                  <li className="list-disc">
                    A full-featured finance application to track user income, expenses, budgets, savings goals, and debts
                  </li>
                  <li className="list-disc">
                    Designed intuitive features for budgeting, goal setting, and financial tracking
                  </li>
                  <li className="list-disc">
                    Implemented data persistence and user-friendly interfaces for real-time financial insights
                  </li>
                  <li className="list-disc">
                    Focused on improving user financial awareness and decision-making
                  </li>

                  <br /> <br />

                  <li className="list-disc mt-[2rem] text-sm italic">
                    Backend: Django on Railway
                  </li>
                  <li className="list-disc text-sm italic">
                    Database: PostgreSQL on NeonDB
                  </li>
                  <li className="list-disc text-sm italic">
                    Frontend: Vite + React on Netlify
                  </li>
                </ul>
                <a href="https://www.pockeep.com">
                  <div className="flex items-center pl-4 pb-[1rem]">
                    <span className="mr-2 italic">Live Site:</span>{" "}
                    <Globe className="text-primary" />
                  </div>
                </a>
              </>
            )}
          </li>
          <li className="border-1 border-border1">
            <div
              className="flex justify-between items-center border-b-1 border-border1 p-4"
              onClick={() => toggleProj2((prev) => !prev)}
            >
              <div>
                <h2 className="text-lg font-bold">
                  Enterprise Infrastructure & Security Lab
                </h2>
                <p className="text-sm text-text2">
                  ~ Proxmox VE
                </p>
              </div>
              {proj2 ? <ChevronUp /> : <ChevronDown />}
            </div>

            {proj2 && (
              <ul className="flex flex-col gap-y-2 pl-8 p-4 mb-[1rem]">
                <li className="list-disc">
                  Built and maintained a homelab environment using Proxmox VE to simulate enterprise-level IT infrastructure and virtualization workflows
                </li>

                <h5 className="text-lg font-bold mt-[2rem] mb-[1rem]">Environment:</h5>

                <ul>
                    <li className="list-disc ml-8">1 pfSense as Router/VPN/Firewall</li>
                    <li className="list-disc ml-8">1 Windows 2025 Server for AD</li>
                    <li className="list-disc ml-8">2 Windows 11 Clients</li>
                    <li className="list-disc ml-8">1 Kali Machine</li>
                    <li className="list-disc ml-8">1 Debian Machine</li>
                  </ul>

                <h5 className="text-lg font-bold mt-[2rem] mb-[1rem]">Accomplishments:</h5>

                <li className="list-disc">
                  Configured VLANs, VPN access and Firewall Rules on pfSense to enhance network security
                </li>
                <li className="list-disc">
                  Configured Active Directory with users, groups, and Group
                  Policy Objects (GPOs)
                </li>
                <li className="list-disc">
                  Deployed and managed a ticketing system using osTicket to
                  simulate various helpdesk operations such as troubleshooting and administrations
                </li>
              </ul>
            )}
          </li>
          {/* <li className="border-1 border-border1 pb-[1rem]">
                        <div className="border-b-1 border-border1 pb-[1rem] p-4 mb-[1rem]">
                            <h2 className="text-lg font-semibold">IT & Network Infrastructure Home Lab</h2>
                            <p className="text-sm text-text2">~ pfSense, Active Directory & OpenVPN</p>
                        </div>

                        <ul className="flex flex-col gap-y-2 pl-8 p-4 mb-[1rem]">
                            <li className="list-disc">
                                Built a pfSense‑based network with multiple VLANs (Servers, Clients, VPN), including DHCP, firewall rules, and inter‑VLAN routing
                            </li>
                            <li className="list-disc">
                                Deployed Windows Server 2019/2022 as a Domain Controller with AD DS, DNS, OUs, GPOs, and domain‑joined Windows 10/11 clients
                            </li>
                            <li className="list-disc">
                                Configured WireGuard/OpenVPN remote‑access VPN integrated with pfSense, enabling secure access to internal VLANs
                            </li>
                            <li className="list-disc">
                                Implemented network segmentation and access control policies to isolate client, server, and VPN networks
                            </li>
                            <li className="list-disc">
                                Performed packet analysis and troubleshooting using Wireshark, tcpdump, and Nmap across segmented networks
                            </li>
                        </ul>
                    </li> */}
        </ul>
      </div>
    </section>
  );
}
