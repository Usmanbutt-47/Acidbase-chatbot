import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";

export default function Homepage() {
    return (
        <>
            <section className="homepage-chatbot">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 ps-0">
                            <div className="d-flex">
                                <Sidebar />
                                <Chatbot />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
