import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import '../../css/Typography.css';

const ContentBlock = styled.div`
    margin-bottom: 50px;
`;

const ContactUs = () => {
    const content = <>
        <ContentBlock>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                Contact Us
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h6">
                Email: dino@activemobility.ca
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Have questions or need assistance? Our friendly team is ready to assist you.
                Feel free to reach out through our email, and we'll get back to you promptly.
            </Typography>

            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Thank you for choosing Active Mobility Products as your trusted source for wheelchairs and medical
                supplies in British Columbia.
                We look forward to serving you and helping you achieve greater mobility and independence.
            </Typography>
        </ContentBlock>
    </>;

    return content;
}

export default ContactUs;