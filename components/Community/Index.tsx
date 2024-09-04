"use client";
import React from 'react';
import CenteredComponent2 from '../CenteredComponent2';
import JoinCommunitySection from './jointCommunity';

const JoinCommunity: React.FC = () => {
    return (
        <div>
            <JoinCommunitySection />
            <CenteredComponent2
                courses={""}
                golfer={""}
                backgroundImage=''
                bottomImage="/Illustration.png"
                backgroundcolor="#E6F0FF"
                title="Golf Availability"
                description={`Opps! We did it again. But, seriously that’s what this app is all about. We’re golfers ourselves. All we want to do is golf more and help other people golf more. It’s that simple.`}
                image="/Golf Availability.webp"
            />
        </div>
    );
};

export default JoinCommunity;
