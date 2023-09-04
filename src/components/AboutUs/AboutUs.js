import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import '../../css/Typography.css';

const ContentBlock = styled.div`
    margin-bottom: 50px;
`;

const AboutUs = () => {
    const content = <>

        <ContentBlock>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                About Active Mobility Products
            </Typography>
        
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Welcome to Active Mobility Products, your reliable partner in enhancing mobility, independence,
                and overall well-being.
                Located in the heart of British Columbia, Canada, we are dedicated to providing high-quality wheelchairs
                and medical supplies to individuals seeking improved accessibility and comfort in their daily lives.
            </Typography>
        </ContentBlock>
        <ContentBlock>
            <Typography className="typography-5-bot left-center-on-screen-size" variant="h5">
                Our Story
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Founded with a deep commitment to making a positive impact on the lives of people with mobility
                challenges, Active Mobility Products has been serving the community for over a decade.
                Our journey began with a simple yet profound goal:
                to empower individuals with the tools and resources they need to live life to the fullest.
            </Typography>
        </ContentBlock>
        <ContentBlock>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                What Sets Us Apart?
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Compassionate Service
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                At Active Mobility Products, we understand that each customer's needs are unique.
                Our compassionate and experienced team takes the time to listen, learn,
                and recommend solutions tailored to your specific requirements.
                Your comfort and independence are our top priorities.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Product Excellence
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                We take pride in curating a diverse range of mobility aids and medical supplies from
                trusted manufacturers.
                We only offer products that meet the highest standards of quality, durability, and performance.
                When you choose us, you're choosing reliability.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Accessibility for All
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Our commitment to accessibility extends beyond the products we offer.
                We strive to make our services accessible to everyone in British Columbia,
                with both a physical store and an easy-to-use online platform.
                Our website is designed to provide a seamless shopping experience for all customers,
                regardless of their mobility challenges.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Education and Support
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                We believe that knowledge is power.
                Our team is not only here to help you find the right products but also to
                educate you on their proper use and maintenance.
                We're dedicated to ensuring you have the information and support you need to make informed decisions.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Community Engagement
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Active Mobility Products is more than just a store;
                we're part of the community. We actively engage with local organizations, support groups,
                and events to raise awareness about mobility challenges and promote inclusivity.
            </Typography>
        </ContentBlock>
        <ContentBlock>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                Our Mission
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Our mission is to empower individuals with mobility challenges to regain their independence
                and enhance their quality of life.
                We are driven by the belief that everyone deserves to live with dignity, comfort, and accessibility.
            </Typography>
        </ContentBlock>
        <ContentBlock>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                Join Us in Making a Difference
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                We invite you to explore our wide selection of wheelchairs, mobility scooters, medical supplies,
                and daily living aids.
                Whether you're a healthcare professional, a caregiver, or someone seeking personal solutions,
                we are here to support you every step of the way.
            </Typography>
        </ContentBlock>
    </>;
    return content;
};

export default AboutUs;