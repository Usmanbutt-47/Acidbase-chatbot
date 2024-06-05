"use client"

import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Chatbot() {
    return (
        <>
            <div className="chatbot card">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <Image
                                src="/assets/images/user.png"
                                alt="Acidbase Logo"
                                className="user"
                                width={48}
                                height={48}
                                priority
                            />
                        </div>
                        <div className="col-md-8">
                            <h6>Marques Brownlee</h6>
                            <p className="text-light mb-0">Chat started on May 23rd, 2024 at 08:20am GMT</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row ai-ans-wrapper">
                        <div className="col-md-7">
                            <div className="row flex-nowrap">
                                <div className="col-md-auto">
                                    <Image
                                        src="/assets/images/user.png"
                                        alt="Acidbase Logo"
                                        className="user"
                                        width={48}
                                        height={48}
                                        priority
                                    />
                                </div>
                                <div className="col-md-auto">
                                    <h6>Acidbase AI - Marques Brownlee</h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="bg-ans position-relative">
                                            <p className="mb-0">Hey there! I'm trying to put together a really unique and personalized avatar for my online profiles. Think you can work some of that AI magic and help me out?</p>
                                            <span className="position-absolute like-icon active">
                                                <Icon icon="fluent-emoji:thumbs-up" width={24} height={24} />
                                            </span>
                                            <span className="position-absolute dislike-icon active">
                                                <Icon icon="fluent-emoji:thumbs-down" width={24} height={24} />
                                            </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                            <button className="btn text-light border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <Icon icon="ri:more-2-line" width={24} height={24} />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Report Response</a></li>
                                                <li><a className="dropdown-item" href="#">Edit Response</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <p className="bg-ans">
                                        Well, well, if it isn't the one and only John Smith! What's up, my friend? How can I help you create an absolutely killer avatar today?
                                    </p> */}
                                    <p>08:15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row user-ques-wrapper">
                        <div className="col-md-7">
                            <div className="row flex-nowrap user-ques">
                                <div className="col-md-auto">
                                    <h6>John Smith</h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="dropdown me-2">
                                            <button className="btn text-light border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <Icon icon="ri:more-2-line" width={24} height={24} />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Report Response</a></li>
                                                <li><a className="dropdown-item" href="#">Edit Response</a></li>
                                            </ul>
                                        </div>
                                        <p className="bg-ques">
                                            Hey there! I'm trying to put together a really unique and personalized avatar for my online profiles. Think you can work some of that AI magic and help me out?
                                        </p>
                                    </div>
                                    <p>08:15</p>
                                </div>
                                <div className="col-md-auto">
                                    <Image
                                        src="/assets/images/user.png"
                                        alt="Acidbase Logo"
                                        className="user"
                                        width={48}
                                        height={48}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ai-ans-wrapper">
                        <div className="col-md-7">
                            <div className="row flex-nowrap">
                                <div className="col-md-auto">
                                    <Image
                                        src="/assets/images/user.png"
                                        alt="Acidbase Logo"
                                        className="user"
                                        width={48}
                                        height={48}
                                        priority
                                    />
                                </div>
                                <div className="col-md-auto">
                                    <h6>Acidbase AI - Marques Brownlee</h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="bg-ans-gradient position-relative">
                                            <p className="mb-0">Hey there! I'm trying to put together a really unique and personalized avatar for my online profiles. Think you can work some of that AI magic and help me out?</p>
                                            <span className="position-absolute like-icon">
                                                <Icon icon="fluent-emoji:thumbs-up" width={24} height={24} />
                                            </span>
                                            <span className="position-absolute dislike-icon">
                                                <Icon icon="fluent-emoji:thumbs-down" width={24} height={24} />
                                            </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                            <button className="btn text-light border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <Icon icon="ri:more-2-line" width={24} height={24} />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Report Response</a></li>
                                                <li><a className="dropdown-item" href="#">Edit Response</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <p className="bg-ans">
                                        Well, well, if it isn't the one and only John Smith! What's up, my friend? How can I help you create an absolutely killer avatar today?
                                    </p> */}
                                    <p>08:15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row user-ques-wrapper">
                        <div className="col-md-7">
                            <div className="row flex-nowrap user-ques">
                                <div className="col-md-auto">
                                    <h6>John Smith</h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="dropdown me-2">
                                            <button className="btn text-light border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <Icon icon="ri:more-2-line" width={24} height={24} />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Report Response</a></li>
                                                <li><a className="dropdown-item" href="#">Edit Response</a></li>
                                            </ul>
                                        </div>
                                        <p className="bg-ques">
                                            Hey there! I'm trying to put together a really unique and personalized avatar for my online profiles. Think you can work some of that AI magic and help me out?
                                        </p>
                                    </div>
                                    <p>08:15</p>
                                </div>
                                <div className="col-md-auto">
                                    <Image
                                        src="/assets/images/user.png"
                                        alt="Acidbase Logo"
                                        className="user"
                                        width={48}
                                        height={48}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ai-ans-wrapper">
                        <div className="col-md-7">
                            <div className="row flex-nowrap">
                                <div className="col-md-auto">
                                    <Image
                                        src="/assets/images/user.png"
                                        alt="Acidbase Logo"
                                        className="user"
                                        width={48}
                                        height={48}
                                        priority
                                    />
                                </div>
                                <div className="col-md-auto">
                                    <h6>Acidbase AI - Marques Brownlee</h6>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="bg-ans position-relative">
                                            <p className="mb-0">Hey there! I'm trying to put together a really unique and personalized avatar for my online profiles. Think you can work some of that AI magic and help me out?</p>
                                            <span className="position-absolute like-icon">
                                                <Icon icon="fluent-emoji:thumbs-up" width={24} height={24} />
                                            </span>
                                            <span className="position-absolute dislike-icon">
                                                <Icon icon="fluent-emoji:thumbs-down" width={24} height={24} />
                                            </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                            <button className="btn text-light border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <Icon icon="ri:more-2-line" width={24} height={24} />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Report Response</a></li>
                                                <li><a className="dropdown-item" href="#">Edit Response</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <p className="bg-ans">
                                        Well, well, if it isn't the one and only John Smith! What's up, my friend? How can I help you create an absolutely killer avatar today?
                                    </p> */}
                                    <p>08:15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="position-relative mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message"></textarea>
                                <div className="position-absolute voice-icon">
                                    <Icon icon="ri:mic-line" width={28} height={28} className="cursor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
