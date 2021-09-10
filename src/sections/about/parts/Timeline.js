import React from 'react'
import styled from 'styled-components'
class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selector: Object.keys(this.props.data)[0]
        }
    }

    render() {
        const TimelineContainer = styled.div`
            display: flex;
            min-height: 250px;
            margin-top: 60px;
            position: relative;
        `

        const TimelineSelectors = styled.div`
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            bottom: 50px;
            left: 20px;
            &::before {
                content: '';
                position: absolute;
                height: 100%;
                width: 20%;
                background-color: rgba(255,255,255,.5);
                z-index: -1;
                margin: auto;
                left: 40%;
                border-radius: 20px;
            }
        `
        
        const TimelineSelector = styled.button`
            width: 15px;
            height: 15px;
            border-radius: 7.5px;
            border: none;
            margin: 10px 0px;
            transition: .5s;
            &:focus {
                outline: none;
            }
            &.active, &:hover {
                background-color: #04e5e5;
            }
        `

        const Details = styled.div`
            display: block;
        `

        const Heading = styled.h4`
            font-size: 25px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 5px;
        `

        const Company = styled.h5`
            font-size: 15px;
            font-weight: 900;
            color: #04e5e5;
            margin-bottom: 5px;
        `
        const Text = styled.p`
            font-size: 12px;
            font-weight: 300;
            color: #c5c5c5;
        `

        const Years = styled.h5`
            color: #fff;
            font-weight: 900;
            letter-spacing: 2px;
            font-size: 80px;
            position: absolute;
            top: -60px;
            opacity: .1;
            @media (max-width:767px) {
                font-size: 45px;
                top: -35px;
            }
            @media (max-width:1439px) {
                font-size: 40px;
                top: -38px;
            }
        `


        const selector = this.state.selector
        let { data } = this.props

        return(
            <TimelineContainer>
                <Details>
                    <Years>{selector}</Years>
                    <Heading>{data[selector].title}</Heading>
                    <Company>{data[selector].institution}</Company>
                    <Text>
                        {data[selector].description}
                    </Text>
                </Details>
                <TimelineSelectors>
                    {Object.keys(this.props.data).map((value, index) => (
                        <TimelineSelector
                            key={index}
                            onClick={() => this.setState({selector : value})}
                            className={this.state.selector === value ? "active" : ""}
                        />
                    ))}
                </TimelineSelectors>
            </TimelineContainer>
        )
    }
}

export default Timeline