import LandingPageHeader from "../../components/landingPage/header";
import Footer from "../../components/Footer";
import LegalLayout from "../../components/legal-layout";
import { recordKeepingPolicyData } from "@/app/MockData/privacy-policy";

const Page = () => {
    return (
        <>
            <LandingPageHeader />
            <LegalLayout
                data={recordKeepingPolicyData.recordKeeping}
                heroAlt="Record-Keeping Policy"
            />
            <Footer />
        </>
    );
};

export default Page;
