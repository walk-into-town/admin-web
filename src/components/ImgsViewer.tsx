import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'

interface Props {
    imgs: string[]
}

const ImgsViewer = (props: Props) => {
    const [visble, setVisble] = useState(false)
    const [selectedIdx, setSelectedIdx] = useState(0)

    const onClick = (idx: number) => {
        setVisble(true)
        setSelectedIdx(idx)
    }

    return (
        <Wrapper>
            {
                props.imgs
                    .map((v, idx) => (
                        v === "" ? null : <img
                            src={v}
                            key={idx}
                            alt={"p-img"}
                            onClick={() => onClick(idx)}
                        />
                    ))
            }
            <Modal useVisible={[visble, setVisble]}>
                <Carousel>
                    {
                        selectedIdx > 0
                        && <div><span onClick={() => setSelectedIdx(selectedIdx - 1)}>이전</span></div>
                    }
                    <img
                        src={props.imgs[selectedIdx]}
                        alt={"modal-img"}
                    />
                    {
                        selectedIdx + 1 < props.imgs.length
                        && <div><span onClick={() => setSelectedIdx(selectedIdx + 1)}>다음</span></div>
                    }
                </Carousel>
            </Modal>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        margin-left: 4px;
        vertical-align: middle;
        cursor: pointer;
    }
`
const Carousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & span {
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        margin: 0 2rem 0 2rem;
    }
    & img {
        height: 60vh;
    }
`

export default ImgsViewer
