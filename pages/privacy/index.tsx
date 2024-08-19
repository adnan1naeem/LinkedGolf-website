

import Header from "../../components/Header/Header";
import React from "react";
import Footer from "../../components/Footer/Footer";
import CenteredText from "../../components/CenteredText";
import PrivacyPolicyText from "../../components/Privacy";
import { Box } from "@mui/material";
const index = () => {
    const bulletPoints = [
        'To facilitate our Service;',
        'To provide the Service on our behalf;',
        'To perform Service-related services; or',
        'To assist us in analyzing how our Service is used.'
    ];
    const bulletPointLinks =[
        { text: 'Google Play Services', url: 'https://policies.google.com/privacy' },
        { text: 'Google Analytics for Firebase', url: 'https://firebase.google.com/policies/analytics' },
        { text: 'Firebase Crashlytics', url: 'https://firebase.google.com/support/privacy/' },
        { text: 'Facebook', url: 'https://www.facebook.com/about/privacy/update/printable' },
    ]
    return (
        <div style={{ background: "transparent", flex: 1, }}>
            <div style={{ flex: 1, background: 'linear-gradient(180deg, #EFFFE7 5%, #E7F2FF 100%)' }}>
                <Header />
                <CenteredText
                    heading="Privacy Policy"
                    description=""
                />
            </div>
            <Box sx={{ flex: 1, backgroundColor: '#DAECFD', py: { xs: 6, lg: 6 }, }}>
                <PrivacyPolicyText
                    heading="Privacy Policy"
                    description1="Matthew Quatrani built the Linked Golf app as a Freemium app. This SERVICE is provided by Matthew Quatrani at no cost and is intended for use as is."
                    description2="This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service."
                    description3="If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Linked Golf unless otherwise defined in this Privacy Policy."
                    bulletPoints={[]}
                    bulletPointLinks={[]} />
                <PrivacyPolicyText
                    heading="Information Collection and Use"
                    description1="For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Name, Date of birth, Geo location, Email address, Phone number. The information that I request will be retained on your device and is not collected by me in any way"
                    description2="The app does use third-party services that may collect information used to identify you."
                    description3="Link to the privacy policy of third-party service providers used by the app"
                    bulletPointLinks={bulletPointLinks} />
                <PrivacyPolicyText
                    heading="Log Data"
                    description1="I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics."
                    description2=""
                    description3=""
                    bulletPoints={[]} />
                <PrivacyPolicyText
                    heading="Cookies"
                    description1="Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."
                    description2="This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."
                    description3=""
                    bulletPoints={[]} />
                <PrivacyPolicyText
                    heading="Service Providers"
                    description1="I may employ third-party companies and individuals due to the following reasons:"
                    description3=""
                    bulletPoints={bulletPoints}
                    endDescription="I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
                />
                <PrivacyPolicyText
                    heading="Security"
                    description1="I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security."
                    description2=""
                    description3=""
                    bulletPoints={[]}
                    bulletPointLinks={[]}
                    endDescription=""
                />
                <PrivacyPolicyText
                    heading="Links to Other Sites"
                    description1="This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
                    description2=""
                    description3=""
                    bulletPoints={[]}
                    bulletPointLinks={[]}
                    endDescription=""
                />
                <PrivacyPolicyText
                    heading="Children’s Privacy"
                    description1="This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
                    description2=""
                    description3=""
                    bulletPoints={[]}
                    bulletPointLinks={[]}
                    endDescription=""
                />
                <PrivacyPolicyText
                    heading="Changes to This Privacy Policy"
                    description1="I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page."
                    description2="This policy is effective as of 2022-05-26"
                    description3=""
                    bulletPoints={[]}
                    bulletPointLinks={[]}
                    endDescription=""
                />
                <PrivacyPolicyText
                    heading="Contact Us"
                    description1=""
                    description2=""
                    description3=""
                    bulletPoints={[]}
                    bulletPointLinks={[]}
                    endDescription=""
                    contactInfo="If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at matthew.quatrani@gmail.com."
                />
            </Box>
            <Footer />
        </div>
    );
}
export default index