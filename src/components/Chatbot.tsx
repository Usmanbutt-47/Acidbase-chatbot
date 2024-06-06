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
                                                {/* <Icon icon="fluent-emoji:thumbs-up" width={24} height={24} /> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><path fill="#d7dbdf" d="M12.313 5.531c0-2.9 2.124-3.583 3.312-3.562c2.413 0 3.082 2.009 3.281 3.078c.248 1.33.006 4.509-.106 5.969l-.003.041a2.25 2.25 0 0 1 .515-.057h3.858c1.56 0 2.83 1.27 2.83 2.83c0 .806-.259 1.535-.765 2.05c1.044.461 1.765 1.428 1.765 2.544c0 1.023-.463 1.92-1.364 2.418c.823.511 1.364 1.366 1.364 2.332c0 1.107-.543 2.069-1.598 2.533c.375.386.598.96.598 1.794c0 1.38-.969 2.502-2.83 2.502h-3.858c-.045 0-.09 0-.134-.003h-3.131C5.609 30.172 5 23.406 5 20.656c0-5.156 2.298-6.689 4.34-8.051c.966-.644 1.875-1.25 2.457-2.183c.488-.783.515-1.5.515-4.89" /><path fill="#a6a9b0" d="M19 11c-1.02.031-4 .594-4 2.969c0 1.25.469 1.953 1.031 2.344c-.562.25-1.062 1.178-1.062 2.328c0 1.28 1.062 2.218 1.062 2.218s-1.062 1.032-1.062 2.266c0 .932.408 1.62 1.062 2.088c-.354.2-1.062.893-1.062 2.068c0 1.401 1.308 2.575 3.87 2.68c-1.248-.231-1.855-1.375-1.855-2.46c0-.358.134-.934.467-1.442H23a.5.5 0 0 0 0-1h-5.411c-.405-.53-.605-1.218-.605-1.885c0-.416.157-1.088.546-1.674H23a.5.5 0 0 0 0-1h-5.25c-.513-.55-.766-1.325-.766-2.076c0-.357.116-.905.396-1.424H23a.5.5 0 0 0 0-1h-5.173c-.564-.597-.843-1.484-.843-2.17c0-.81.443-2.6 2.016-2.81z" /></g></svg>
                                            </span>
                                            <span className="position-absolute dislike-icon">
                                                {/* <Icon icon="fluent-emoji:thumbs-down" width={24} height={24} /> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><path fill="#d7dbdf" d="M19.688 26.44c0 2.9-2.125 3.584-3.313 3.563c-2.412 0-3.082-2.01-3.281-3.078c-.248-1.33-.005-4.51.106-5.97l.003-.04a2.32 2.32 0 0 1-.515.057H8.83c-1.56 0-2.83-1.27-2.83-2.83c0-.806.259-1.535.765-2.051C5.721 15.63 5 14.663 5 13.548c0-1.023.463-1.921 1.364-2.418C5.541 10.618 5 9.764 5 8.798c0-1.108.543-2.07 1.598-2.534C6.223 5.878 6 5.304 6 4.47c0-1.379.969-2.502 2.83-2.502h3.858c.045 0 .09.001.134.004h3.131C26.391 1.8 27 8.565 27 11.315c0 5.156-2.298 6.69-4.34 8.052c-.966.644-1.875 1.25-2.457 2.183c-.488.782-.515 1.5-.515 4.89" /><path fill="#a6a9b0" d="M14.394 6.913H9a.5.5 0 0 1 0-1h5.549c.333-.509.467-1.085.467-1.443c0-1.085-.607-2.228-1.855-2.46c2.562.106 3.87 1.28 3.87 2.68c0 1.175-.708 1.869-1.062 2.068c.654.469 1.062 1.157 1.062 2.089c0 1.234-1.062 2.265-1.062 2.265s1.062.938 1.062 2.219c0 1.15-.5 2.078-1.062 2.328c.562.39 1.031 1.094 1.031 2.344c0 2.375-2.98 2.937-4 2.969v-.02c1.573-.21 2.016-2 2.016-2.81c0-.687-.28-1.574-.843-2.17H9a.5.5 0 0 1 0-1h5.62c.28-.52.396-1.067.396-1.424c0-.751-.253-1.527-.767-2.076H9a.5.5 0 0 1 0-1h5.47c.39-.586.546-1.259.546-1.674c0-.467-.14-1.258-.622-1.885" /></g></svg>
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
                                            Awesome, I'm ready for it. What did you have in mind?
                                        </p>
                                    </div>
                                    <p>08:15</p>
                                    <div className="position-relative mb-3 edit-message">
                                        <div className="position-absolute emoji-icon">
                                            <Icon icon="ri:emotion-happy-line" width={28} height={28} className="cursor" />
                                        </div>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Awesome, I'm ready for it?"></textarea>
                                        <div className="position-absolute voice-icon">
                                            <Icon icon="ri:send-plane-line" width={28} height={28} className="cursor" />
                                        </div>
                                    </div>
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
                                                {/* <Icon icon="fluent-emoji:thumbs-up" width={24} height={24} /> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><path fill="#d7dbdf" d="M12.313 5.531c0-2.9 2.124-3.583 3.312-3.562c2.413 0 3.082 2.009 3.281 3.078c.248 1.33.006 4.509-.106 5.969l-.003.041a2.25 2.25 0 0 1 .515-.057h3.858c1.56 0 2.83 1.27 2.83 2.83c0 .806-.259 1.535-.765 2.05c1.044.461 1.765 1.428 1.765 2.544c0 1.023-.463 1.92-1.364 2.418c.823.511 1.364 1.366 1.364 2.332c0 1.107-.543 2.069-1.598 2.533c.375.386.598.96.598 1.794c0 1.38-.969 2.502-2.83 2.502h-3.858c-.045 0-.09 0-.134-.003h-3.131C5.609 30.172 5 23.406 5 20.656c0-5.156 2.298-6.689 4.34-8.051c.966-.644 1.875-1.25 2.457-2.183c.488-.783.515-1.5.515-4.89" /><path fill="#a6a9b0" d="M19 11c-1.02.031-4 .594-4 2.969c0 1.25.469 1.953 1.031 2.344c-.562.25-1.062 1.178-1.062 2.328c0 1.28 1.062 2.218 1.062 2.218s-1.062 1.032-1.062 2.266c0 .932.408 1.62 1.062 2.088c-.354.2-1.062.893-1.062 2.068c0 1.401 1.308 2.575 3.87 2.68c-1.248-.231-1.855-1.375-1.855-2.46c0-.358.134-.934.467-1.442H23a.5.5 0 0 0 0-1h-5.411c-.405-.53-.605-1.218-.605-1.885c0-.416.157-1.088.546-1.674H23a.5.5 0 0 0 0-1h-5.25c-.513-.55-.766-1.325-.766-2.076c0-.357.116-.905.396-1.424H23a.5.5 0 0 0 0-1h-5.173c-.564-.597-.843-1.484-.843-2.17c0-.81.443-2.6 2.016-2.81z" /></g></svg>
                                            </span>
                                            <span className="position-absolute dislike-icon">
                                                {/* <Icon icon="fluent-emoji:thumbs-down" width={24} height={24} /> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><path fill="#d7dbdf" d="M19.688 26.44c0 2.9-2.125 3.584-3.313 3.563c-2.412 0-3.082-2.01-3.281-3.078c-.248-1.33-.005-4.51.106-5.97l.003-.04a2.32 2.32 0 0 1-.515.057H8.83c-1.56 0-2.83-1.27-2.83-2.83c0-.806.259-1.535.765-2.051C5.721 15.63 5 14.663 5 13.548c0-1.023.463-1.921 1.364-2.418C5.541 10.618 5 9.764 5 8.798c0-1.108.543-2.07 1.598-2.534C6.223 5.878 6 5.304 6 4.47c0-1.379.969-2.502 2.83-2.502h3.858c.045 0 .09.001.134.004h3.131C26.391 1.8 27 8.565 27 11.315c0 5.156-2.298 6.69-4.34 8.052c-.966.644-1.875 1.25-2.457 2.183c-.488.782-.515 1.5-.515 4.89" /><path fill="#a6a9b0" d="M14.394 6.913H9a.5.5 0 0 1 0-1h5.549c.333-.509.467-1.085.467-1.443c0-1.085-.607-2.228-1.855-2.46c2.562.106 3.87 1.28 3.87 2.68c0 1.175-.708 1.869-1.062 2.068c.654.469 1.062 1.157 1.062 2.089c0 1.234-1.062 2.265-1.062 2.265s1.062.938 1.062 2.219c0 1.15-.5 2.078-1.062 2.328c.562.39 1.031 1.094 1.031 2.344c0 2.375-2.98 2.937-4 2.969v-.02c1.573-.21 2.016-2 2.016-2.81c0-.687-.28-1.574-.843-2.17H9a.5.5 0 0 1 0-1h5.62c.28-.52.396-1.067.396-1.424c0-.751-.253-1.527-.767-2.076H9a.5.5 0 0 1 0-1h5.47c.39-.586.546-1.259.546-1.674c0-.467-.14-1.258-.622-1.885" /></g></svg>
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
                    <div className="row align-items-center mb-3">
                        <div className="col-md-8 mx-auto">
                            <div className="position-relative send-message">
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message"></textarea>
                                <div className="position-absolute voice-icon">
                                    <Icon icon="ri:mic-line" width={28} height={28} className="cursor" />
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary give-feedback-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Icon icon="ri:feedback-line" width={28} height={28} className="me-3" />
                                Give Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Icon icon="ri:feedback-line" width={28} height={28} className="me-3" />
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Send Feedback</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message" rows={4}></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary send-feedback-btn">Send Feedback
                                <Icon icon="ri:send-plane-line" width={28} height={28} className="cursor ms-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
