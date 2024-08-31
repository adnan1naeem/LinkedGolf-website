

import Header from "../../Header";
import React from "react";
import Footer from "../../Footer";
import CenteredText from "../../centeredText/CenteredText";
import DeleteAccountSteps from "../../DeletedComponent";

const index = () => {
    return (
        <div style={{ background: "transparent", flex: 1, }}>
            <div style={{ flex: 1, background: 'linear-gradient(180deg, #EFFFE7 5%, #E7F2FF 100%)' }}>
                <Header />
                <CenteredText
                    heading="Delete Your Account"
                    description="If you decide to delete your account, your profile, including your schedule, will be permanently removed.Below are the steps to delete your account"
                />
            </div>
            <DeleteAccountSteps />
            <Footer />
        </div>
    );
}
export default index