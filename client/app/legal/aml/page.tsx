import LandingPageHeader from "../../components/landingPage/header";
import Footer from "../../components/Footer";
import LegalLayout from "../../components/legal-layout";
import { amlManualData } from "@/app/MockData/aml-manual-data";

const Page = () => {
    return (
        <>
            <LandingPageHeader />
            <LegalLayout
                data={amlManualData.amlManual}
                heroAlt="cybersecurity hero image"
            />
            <Footer />
        </>
    );
};

export default Page;
