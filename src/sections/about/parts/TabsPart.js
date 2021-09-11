import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from 'components/progress'
import Timeline from 'sections/about/parts/Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `
        const Text = styled.p`
            font-size: 22px;
            font-weight: bold;
            color: #fff;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Skills
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""} onClick={() => this.setState({tab: "experience"})}>
                        Experience
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""} onClick={() => this.setState({tab: "education"})}>
                        Education
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <Text>
                            Front-End
                        </Text>
                        <Progress value={90} text="Javascript" />
                        <Progress value={85} text="React" />
                        <Progress value={50} text="JQuery" />
                        <Progress value={90} text="Bootstrap" />
                        <Progress value={95} text="HTML/CSS" />
                        <Text>
                            Back-End
                        </Text>
                        <Progress value={90} text="C# OOP" />
                        <Progress value={85} text="ASP.NET Core" />
                        <Progress value={80} text="MS SQL" />
                        <Progress value={60} text="Signal-R" />
                        <Progress value={80} text="Entity Framework Core" />
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "experience" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "April 2021" :  {
                                    title: "ReactJS Defense Project",
                                    institution: "Software University",
                                    description: `EndlessTV is a free platform where you can watch your favorite movies with just a click of
                                    button. All you need is a quick registration and you'll have access to various movie genres,
                                    top rated movies or even the latest hits. Once you've picked your movies, EndlessTV
                                    provides an option to put them in a neat Favorites list. There is also a comment section in
                                    each movie, so you can share your movie experience with others.`
                                },
                                "August 2021" : {
                                    title: "ASP.NET Core Defense Project",
                                    institution: "Software University",
                                    description: `Jobzy is a freelance marketplace with users an having option to choose between being
                                    employers or freelancers. Depending on the created account, users can send offers or post
                                    jobs. After successfully accepting an offer by the employers, an automatic contract is
                                    generated to ease the communication between both parties. Completing the contract can
                                    be done by card payment, by which the freelancer gets paid.`
                                },
                            }
                        }
                    />
                    </Tab>
                    <Tab style={{
                            display: this.state.tab === "education" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "2019 - 2021" :  {
                                    title: "Full Stack .NET Web Developer",
                                    institution: "Software University"
                                },
                                "2011 - 2015" : {
                                    title: "Operational Accounting",
                                    institution: "High School Degree"
                                },
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart