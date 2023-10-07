import PageNavbar from "../../components/Navbar"
import PageFooter from "../../components/Footer"

export default function NotFound() {
    document.title = "404 | Chat-GPT";

    return (
        <div>
            <PageNavbar />
            <div className="text-white w-full min-h-screen flex flex-col justify-center items-center text-4xl text-center">
                Sahifa topilmadi :(
            </div>
            <PageFooter />
        </div>
    );
}
