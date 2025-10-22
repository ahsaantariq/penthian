import LandingPageHeader from "../../components/landingPage/header";
import Footer from "../../components/Footer";
import LegalLayout from "../../components/legal-layout";
import { termsAndConditionsData } from "@/app/MockData/terms-and-conditions";

const Page = () => {
    return (
        <>
            <LandingPageHeader />
            <LegalLayout
                data={termsAndConditionsData.termsAndConditions}
                heroAlt="Marketplace Rules and Terms of Use"
            />
            <Footer />
        </>
    );
};

export default Page;
