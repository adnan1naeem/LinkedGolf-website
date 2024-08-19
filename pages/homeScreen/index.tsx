

import Header from "../../components/Header/Header";
import MainBanner from "../..//components/MainBanner/MainBanner";
import React from "react";
import GolfComponent from "../../components/rowComponent";
import CenteredComponent from "../../components/CenteredComponent";
import CenteredComponent2 from "../../components/CenteredComponent2";
import JoinCommunity from "../../components/Community/Index";
import GolfCourseCTA from "../../components/GolfCourseCTA/golfCourse";
import Footer from "../../components/Footer/Footer";
const index = () => {
    return (
        <div style={{ background: "transparent", flex: 1,}}>
            <div style={{ flex: 1, background: 'linear-gradient(180deg, #EFFFE7 5%, #E7F2FF 100%)' }}>
                <Header />
                <MainBanner
                    title="Got Golf Buddies?"
                    description="LinkedGolf is an app designed to help you build your golf network. Get out on the course more often by scheduling outings with your buddies whose golf availability matches yours."
                    imageUrl="/MainBanner.webp"
                    showImageOnLeft={false}
                    iosButtonText="Download for iOS"
                    androidButtonText="Download for Android"
                    imageBackground={false}
                />
            </div>
            <GolfComponent />
            <JoinCommunity />
            <CenteredComponent
                backgroundImage="/whitebackground.png"
                title="Golf Buddies Fore-Life"
                description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
                image="/sidemobile.webp"
            />
            <CenteredComponent2
                courses={""}
                golfer={""}
                backgroundImage=""
                backgroundcolor="#E9F3FF"
                title="Designed to help you fill out your foreee-some."
                description="Opps! We did it again. But, seriously that’s what this app is all about. We’re golfers ourselves. All we want to do is golf more and help other people golf more. It’s that simple."
                image="/bluesidemobile.webp"
            />
            <CenteredComponent
                backgroundImage="/greenbg.png"
                title="Golf Buddies Fore-Life"
                description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
                image="/greensidemobile.webp"
            />
            <CenteredComponent2
                courses={""}
                golfer={""}
                backgroundImage=""
                backgroundcolor="#E9F3FF"
                title="Find new golf courses or get rewarded for being a loyal customer."
                description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
                image="/bluegolf.webp"
            />
            <GolfCourseCTA
                backgroundImage="/whitebackground.png"
                image='./Mask group.png'
                title="Are you a golf course owner or the one who is responsible for attracting new golfers to the course?"
                buttonText="Claim your golf course profile"
            />
            <CenteredComponent2
                backgroundImage=""
                backgroundcolor="#E9F3FF"
                title="Meet new golf buddies by joining golf communities based on your location & favorite golf courses."
                description=""
                image="/golfStyle.png"
                courses={"15000"}
                golfer={"15000"}
            />
            <MainBanner
                title="What are you waiting for?"
                description="Download the app. Tell your golf buddies. Let’s Golf!"
                imageUrl="/laymobile.webp"
                showImageOnLeft={true}
                iosButtonText="Download for iOS"
                androidButtonText="Download for Android"
                imageBackground={true}
            />
            <Footer/>
        </div>
    );
}
export default index