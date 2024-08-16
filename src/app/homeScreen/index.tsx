

import Header from "@/component/Header/Header";
import MainBanner from "@/component/MainBanner/MainBanner";
import React from "react";
import GolfComponent from "@/component/rowComponent";
import CenteredComponent from "@/component/CenteredComponent";
import CenteredComponent2 from "@/component/CenteredComponent2";
import JoinCommunity from "@/component/Community/Index";
import GolfCourseCTA from "@/component/GolfCourseCTA/golfCourse";
const homeScreen = () => {
    return (
        <div style={{ background: "transparent", flex: 1 }}>
            <div style={{ flex: 1, background: 'linear-gradient(180deg, #EFFFE7 5%, #E7F2FF 100%)' }}>
                <Header />
                <MainBanner />
            </div>
            <GolfComponent />
            <JoinCommunity />
            <CenteredComponent
                backgroundImage="/whitebackground.png"
                title="Golf Buddies Fore-Life"
                description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
                image="/sidemobile.png"
            />
            <CenteredComponent2
                courses={""}
                golfer={""}
                backgroundImage=""
                backgroundcolor="#E9F3FF"
                title="Designed to help you fill out your foreee-some."
                description="Opps! We did it again. But, seriously that’s what this app is all about. We’re golfers ourselves. All we want to do is golf more and help other people golf more. It’s that simple."
                image="/bluesidemobile.png"
            />
            <CenteredComponent
                backgroundImage="/greenbg.png"
                title="Golf Buddies Fore-Life"
                description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
                image="/greensidemobile.png"
            />
            <CenteredComponent2
                courses={""}
                golfer={""}
                backgroundImage=""
                backgroundcolor="#E9F3FF"
                title="Find new golf courses or get rewarded for being a loyal customer."
                description="Okay, that was a bad joke but we couldn’t help ourselves. The point to be made is that building your golf network in the Linked Golf app allows you to maintain friendships over a lifetime. Think of how much golf can be played! Or think about how much golf you could be missing out on by not having the Linked Golf app. Just saying."
                image="/bluegolf.png"
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
        </div>
    );
}
export default homeScreen