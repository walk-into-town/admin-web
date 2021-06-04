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

export const Container = styled.div`
    width: 100vw;
    padding: 58px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 56px;
    & > button {
        margin-left: auto;
    }
`