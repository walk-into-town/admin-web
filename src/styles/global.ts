import styled from "styled-components"

export const colorCode = {
    primary: "#4487D6",
    alert: "#0B54AB",
    sub: "#679FE2",
    light: "#95BDEE",

    background: "#F2F1F2",
    gray: "gray",
    appleRed: "#ff3b30",
}

export const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
`

export const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
`

export const Container = styled.div`
    width: 100vw;
    padding: 56px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 56px;
    & > button {
        margin-left: auto;
    }
`

export const Card = styled.div`
    background-color: white;
    border-radius: 1rem;
    padding: 40px;
`