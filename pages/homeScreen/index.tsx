

import Header from "../../components/Header/Header";
import MainBanner from "../..//components/MainBanner/MainBanner";
import React from "react";
import GolfComponent from "../../components/rowComponent";
import CenteredComponent from "../../components/CenteredComponent";
import CenteredComponent2 from "../../components/CenteredComponent2";
import JoinCommunity from "../../components/Community/Index";
import GolfCourseCTA from "../../components/GolfCourseCTA/golfCourse";
import Footer from "../../components/Footer/Footer";
import CenterComponentBottom from "../../components/CenteredComponentBottom";
import CenteredComponent3 from "../../components/CenteredComponent3";
const index = () => {
    return (
        <div style={{ background: "transparent", flex: 1, }}>
            <div style={{ flex: 1, background: 'linear-gradient(180deg, #EFFFE7 5%, #E7F2FF 100%)' }}>
                <Header />
                <MainBanner
                    title="Got Golf Buddies?"
                    description="LinkedGolf is an app designed to help you build your golf network. Get out on the course more often by scheduling outings with your buddies whose golf availability matches yours."
                    imageUrl="/MainBanner.png"
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
                image="/sidemobile.png"
            />
            <CenteredComponent3
                descriptionstyle={true}
                backgroundImage=""
                backgroundcolor="#E9F3FF"
                title="Expand your golf network"
                description={`Linked Golf makes it super easy to connect with people you naturally meet on the golf course when being paired up with other golfers. Users can do this by scanning a QR code. This allows people to expand their golf networks even further.\n\n \n\nThe more people in your network, the more often you can golf with a set of four because it’s easier to find people whose schedules coincide.`}
                image="/bluesidemobile.png"
            />
            <CenteredComponent
                backgroundImage="/whitebackground.png"
                title="Chat"
                description="Join the conversation with other golf enthusiasts! Link Golf brings you closer to the community by enabling real-time chat with fellow registered players. Share tips, plan games, discuss courses, and make new friends—all within the app. Whether you're looking for advice, friendly competition, or just someone to share your passion for the sport, our chat feature makes it easy to stay connected."
                image="/ChatImage.png"
            />
            <CenterComponentBottom
                backgroundImage=""
                backgroundcolor="#E9F3FF"
                title="Find new golf courses or get rewarded for being a loyal customer."
                description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
                image="/MattMobile.png"
            />
            <CenteredComponent
                backgroundImage="/greenbg.png"
                title="Don’t want to be the one to schedule an event?"
                description="That’s cool, all you have to do is request to join an open outing."
                image="/greensidemobile.png"
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
            <Footer />
        </div>
    );
}
export default index