import Image from "next/image";

export default function Chatbot() {
    return (
        <>
            <div className="chatbot card">
                <div className="card-header">
                    <div className="d-flex">
                        <Image
                            src="/assets/images/user.png"
                            alt="Acidbase Logo"
                            className="user"
                            width={48}
                            height={48}
                            priority
                        />
                        <div className="ms-3">
                            <h6>Marques Brownlee</h6>
                            <p className="text-light">Chat started on May 23rd, 2024 at 08:20am GMT</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex">
                        <Image
                            src="/assets/images/user.png"
                            alt="Acidbase Logo"
                            className="user"
                            width={48}
                            height={48}
                            priority
                        />
                        <div className="ai-ques-wrapper">
                            <h6>Marques Brownlee</h6>
                            <p>
                                Well, well, if it isn't the one and only John Smith! What's up, my friend? How can I help you create an absolutely killer avatar today?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        </>
    );
}
