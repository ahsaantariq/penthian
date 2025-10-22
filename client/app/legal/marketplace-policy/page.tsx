import LandingPageHeader from "../../components/landingPage/header";
import Footer from "../../components/Footer";
import LegalLayout from "../../components/legal-layout";
import { marketplaceRulesData } from "@/app/MockData/marketplace-policy";

const Page = () => {
    return (
        <>
            <LandingPageHeader />
            <LegalLayout
                data={marketplaceRulesData.marketplaceRules}
                heroAlt="marketplace policy hero image"
            />
            <Footer />
        </>
    );
};

export default Page;
