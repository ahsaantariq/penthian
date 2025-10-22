import LandingPageHeader from "../../components/landingPage/header";
import Footer from "../../components/Footer";
import LegalLayout from "../../components/legal-layout";
import { cyberSecurityData } from "@/app/MockData/cyber-security";

const Page = () => {
    return (
        <>
            <LandingPageHeader />
            <LegalLayout
                data={cyberSecurityData.cyberSecurity}
                heroAlt="cybersecurity hero image"
            />
            <Footer />
        </>
    );
};

export default Page;
