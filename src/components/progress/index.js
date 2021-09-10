import React from 'react'
import styled, { keyframes } from 'styled-components'


class ProgressBar extends React.Component {

    render() {
        const { text } = this.props

        const ProgressContainer = styled.div`
            margin-bottom: 25px;
        `
        const Text = styled.span`
            font-size: 17px;
            font-family: Poppins;
            color: #fff;
        `

        const Value = styled.span`
            font-size: 17px;
            font-family: Poppins;
            color: #fff;
            float: right;
        `
        const ColorAnimation = keyframes`
            0%  {background: #04e5e5;}
            10% {background: #f37055;}
            20% {background: #ef4e7b;}
            30% {background: #a166ab;}
            40% {background: #5073b8;}
            50% {background: #04e5e5;}
            60% {background: #07b39b;}
            70% {background: #6fba82;}
            80% {background: #5073b8;}
            90% {background: #1098ad;}
            100% {background: #f37055;}
        `

        const Progress = styled.div`
            height: 5px;
            border-radius: 2.5px;
            margin-top: 10px;
            transition: 2s;
            animation: ${ColorAnimation} 10s infinite alternate;
        `


        return(
            <ProgressContainer>
                <Text>{text}</Text>
                <Value>{this.props.value}%</Value>
                <Progress style={{width: `${this.props.value}%`}}></Progress>
            </ProgressContainer>
        )
    }
}

export default ProgressBar