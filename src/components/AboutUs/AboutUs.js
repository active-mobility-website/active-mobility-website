import React from 'react';
import styled from 'styled-components';
import hugosteak from '../../images/jokes/hugo-steak.jpg';

const StyledImg = styled.img`
    width: 300px;
`;

const AboutUs = () => {
    const content = <>
        <div>We are just some good ol' boys working to earn some steak.</div>
        <div>
            <br />
            <StyledImg src={hugosteak} alt="A puggle looking at steak" />
        </div>
    </>;
    return content;
};

export default AboutUs;