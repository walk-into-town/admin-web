import { PinPoint as IPinPoint } from '@types'
import React, { useEffect, useState } from 'react'
import { pinpointRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'
import { toCommonDateTime } from '../util'


const Pinpoint = () => {
    const [pinpointList, setPinpointList] = useState<IPinPoint[]>([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPinpoint()
    }, [])
    useEffect(() => {
        console.log(input)
    }, [input])

    // api
    const getPinpoint = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await pinpointRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            console.log(data)
            setPinpointList(data)
        }
        init()
    }


    return (
        <Container>
            <HeaderWrapper>
                <Title>핀포인트</Title>
                <button onClick={() => getPinpoint()}>새로고침</button>
            </HeaderWrapper>

            <label htmlFor="search">검색</label>
            <input type="text" onChange={(e) => setInput(e.target.value)} name="search" />

            {
                loading ?
                    <p>로딩중</p>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>id</th>
                                <th>description</th>
                                <th>latitude</th>
                                <th>longitude</th>
                                <th>updateTime</th>
                                <th>imgs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pinpointList.map(v => (
                                    <tr key={v.id}>
                                        <td>{v.name}</td>
                                        <td>{v.id}</td>
                                        <td>{v.description}</td>
                                        <td>{v.latitude}</td>
                                        <td>{v.longitude}</td>
                                        <td>{toCommonDateTime(v.updateTime)}</td>
                                        <td>
                                            <div style={{ display: "flex" }}>
                                                {v.imgs.map((uri, idx) => <img src={uri} alt="pinpoint img" width={50} key={idx} />)}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </Container>
    )
}

export default Pinpoint
