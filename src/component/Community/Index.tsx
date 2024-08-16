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
                title="Build your golf profile. Build your network. Golf more."
                description="Linked Golf makes it super easy to connect with people you naturally meet on the golf course when being paired up with other golfers. Users can do this by scanning a QR code. This allows people to expand their golf networks even further.
                The more people in your network, the more often you can golf with a set of four because it’s easier to find people whose schedules coincide.
                Plus it makes it fun to be able to switch up who you golf with every once in a while."
                image="/Matt.png"
            />
        </div>
    );
};

export default JoinCommunity;
