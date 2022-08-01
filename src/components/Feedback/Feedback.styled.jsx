import styled from "styled-components";

export const FeedbackButtonsList = styled.ul`
    display: flex;
    padding-left: 0;
    list-style-type: none;
`

export const ButtonItem = styled.li`
    margin-right: 10px;
    &:last-child {
        margin-right: 0;
    }
`

export const Button = styled.button`
    width: 100px;
    height: 50px;
    font-size: 15px;
    cursor: pointer;
`