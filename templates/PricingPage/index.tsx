"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import Faq from "./Faq";

const PricingPage = () => {
    return (
        <Layout classHeader="!bg-greyscale-25">
            <Main />
            <Faq />
            <Join />
        </Layout>
    );
};

export default PricingPage;
