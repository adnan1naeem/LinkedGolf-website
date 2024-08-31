

import Header from "../../Header";
import React from "react";
import Footer from "../../Footer";
import CenteredText from "../../centeredText/CenteredText";
import DeleteAccountSteps from "../../DeletedComponent";
import Image1 from './../../../assets/images/Image1.webp'
import Image2 from './../../../assets/images/Image2.webp'
import Image3 from './../../../assets/images/Image3.webp'
import Image4 from './../../../assets/images/Image4.webp'

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
            image1={Image1}
            image2={Image2}
            image3={Image3}
            image4={Image4}
            />
            <Footer />
        </div>
    );
}
export default index