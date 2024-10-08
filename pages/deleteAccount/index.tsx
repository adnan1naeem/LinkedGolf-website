

import Header from "../../components/Header/Header";
import React from "react";
import Footer from "../../components/Footer/Footer";
import CenteredText from "../../components/CenteredText";
import DeleteAccountSteps from "../../components/DeleteComponent";
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
            <DeleteAccountSteps 
            image1={"/Image1.webp"}
            image2={"/Image2.webp"}
            image3={"/Image3.webp"}
            image4={"/Image4.webp"}
            />
            <Footer />
        </div>
    );
}
export default index