import React from 'react'
import styled from 'styled-components'

interface Props {
    useVisible: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    children: JSX.Element
}

const Modal = (props: Props) => {
    const [isVisible, setIsVisible] = props.useVisible

    if (!isVisible)
        return <></>

    return (
        <Wrapper>
            <Overlay onClick={() => setIsVisible(false)} />
            <Content>
                {props.children}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 100;
`
export default Modal
