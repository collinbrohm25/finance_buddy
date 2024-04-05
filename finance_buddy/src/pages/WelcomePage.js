import React from 'react';
import './WelcomePage.css'

const WelcomePage = () => {
    return (
        <div id="main">
            <img id="leftHalf" src='\images\UGA_DOG.jpg' alt="Dog" />
            <div id="rightHalf">
                <h1>Welcome to FinanceBuddy!</h1>
                <p>
                Your all purpose finance friend to help you with your CashFlow, budget, and more!
                Need help tracking your scholarship eligibility? FinanceBuddy has an all intensive
                tool to track your GPA, eligibility, and more! FinanceBuddy has everything a student
                needs to no longer worry about tracking their finances.
                </p>
            </div>
        </div>
    );
}

export default WelcomePage;