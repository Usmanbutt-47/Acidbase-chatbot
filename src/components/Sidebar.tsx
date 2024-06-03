"use client"
import { Icon } from '@iconify/react';
import Image from "next/image";

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className='arrow-wrapper border-bottom'>
                    <Icon icon="ri:arrow-left-line" />
                </div>
                <ul className="nav flex-column sidebar-items">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <Icon icon="ri:home-line" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Icon icon="ri:mail-line" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Icon icon="ri:calendar-line" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Icon icon="ri:settings-4-line" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <Icon icon="ri:user-6-line" />
                        </a>
                    </li>
                    <li className="nav-item user-item">
                        <a className="nav-link" href="#">
                            <Image
                                src="/assets/images/user.png"
                                alt="Acidbase Logo"
                                className="user"
                                width={48}
                                height={48}
                                priority
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
