import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import '../../css/Typography.css';

const ContentBlock = styled.div`
    margin-bottom: 50px;
`;

const Home = () => {
    const content = <>
        <ContentBlock>
            <Typography className="left-center-on-screen-size" variant="h5">
                Welcome to Active Mobility Products - Your Trusted Source for Wheelchairs and Medical Supplies in British Columbia!
            </Typography>

            <br />

            <Typography className="left-center-on-screen-size" variant="body1">
                At Active Mobility Products, we understand that mobility is essential to maintaining independence and quality of life.
                
            </Typography>
            <Typography className="left-center-on-screen-size" variant="body1">
                Whether you or your loved one require a wheelchair, mobility scooter, or a wide range of medical supplies,
                we are here to provide top-quality products and expert guidance to meet your unique needs.
            </Typography>
        </ContentBlock>

        <ContentBlock>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                Why Choose Active Mobility Products?
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Extensive Selection
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Our store offers a comprehensive range of mobility aids and medical supplies.
                From manual and power wheelchairs to walkers, bathroom safety equipment, and daily living aids,
                we have a wide variety of products to enhance your comfort and well-being.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Quality Assurance
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                We are committed to offering only the highest quality products from trusted brands.
                Our team carefully selects each item in our inventory to ensure durability and reliability.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Expertise and Support
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Our knowledgeable and friendly staff is here to assist you in finding the perfect solutions
                to meet your specific requirements. We'll provide guidance on product selection, customization,
                and maintenance to ensure you receive the best possible care and support.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Accessibility
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Located in beautiful British Columbia, we serve customers throughout the province.
                Our online store allows you to browse and purchase products from the comfort of your home,
                with convenient delivery options available.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">Customer Satisfaction</Typography> Your satisfaction is our priority. We strive to exceed your expectations with every interaction, whether in-store or online.

        </ContentBlock>
        <ContentBlock>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="h5">
                Explore Our Products:
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Wheelchairs
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Discover a range of manual and power wheelchairs designed for comfort, mobility, and style.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Mobility Scooters
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Gain independence and freedom with our selection of reliable mobility scooters.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Home Health Care
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Explore products like hospital beds, lift chairs, and bathroom safety equipment to make your home more
                comfortable and accessible.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Daily Living Aids
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                Enhance your daily life with products such as walking aids, reachers, and adaptive utensils.
            </Typography>

            <Typography className="typography-5-bot left-center-on-screen-size" variant="h6">
                Medical Supplies
            </Typography>
            <Typography className="typography-20-bot left-center-on-screen-size" variant="body1">
                From wound care to personal protective equipment (PPE), we have you covered with essential medical
                supplies.
            </Typography>

        </ContentBlock>
    </>;

    return content;
};

export default Home;