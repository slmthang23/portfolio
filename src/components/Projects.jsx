import { Globe } from 'lucide-react';

export default function Projects() {
    return (
        <section className="w-full center flex-col">
            <header className="w-full center sticky top-0 h-[3rem] border-y-1 border-border1 bg-bg1">
                <p className="text-xl font-extrabold text-primary">Projects</p>
            </header>

            <div className="w-full flex flex-col justify-center items-start my-[2rem]">
                <ul className="flex flex-col gap-y-[2rem] px-4">
                    <li className="border-1 border-border1 pb-[1rem]">
                        <div className="border-b-1 border-border1 pb-[1rem] p-4 mb-[1rem]">
                            <h2 className="text-lg font-semibold">Pockeep</h2>
                            <p className="text-sm text-text2">
                                ~ Django & React
                            </p>
                        </div>

                        <ul className="flex flex-col gap-y-2 pl-8 p-4 mb-[1rem]">
                            <li className="list-disc">
                                A finance tracker that helps users to easily
                                monitor where their money comes from and where
                                it goes
                            </li>
                            <li className="list-disc">
                                visualizes cash flow, organizes budgets, tracks
                                debts, and monitors savings progress — all in
                                one place
                            </li>
                        </ul>
                        <a href="https://www.pockeep.com">
                            <div className="flex items-center pl-4">
                                <span className="mr-2 italic">Live Site:</span>{' '}
                                <Globe className="text-primary" />
                            </div>
                        </a>
                    </li>
                    <li className="border-1 border-border1 pb-[1rem]">
                        <div className="border-b-1 border-border1 pb-[1rem] p-4 mb-[1rem]">
                            <h2 className="text-lg font-semibold">IT Systems & Support Home Lab</h2>
                            <p className="text-sm text-text2">~ Active Directory & osTicket</p>
                        </div>

                        <ul className="flex flex-col gap-y-2 pl-8 p-4 mb-[1rem]">
                            <li className="list-disc">
                                Built a home lab environment using Windows Server to simulate enterprise IT infrastructure
                            </li>
                            <li className="list-disc">
                                Configured Active Directory with users, groups, and Group Policy Objects (GPOs)
                            </li>
                            <li className="list-disc">
                                Deployed and managed a ticketing system using osTicket to simulate helpdesk operations
                            </li>
                            <li className="list-disc">
                                Troubleshot user issues including account access, password resets, and system connectivity
                            </li>
                            <li className="list-disc">
                                Documented common issues and resolutions to improve support workflow
                            </li>
                        </ul>
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
