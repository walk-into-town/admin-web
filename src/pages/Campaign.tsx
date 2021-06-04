import { Campaign as ICampaign } from '@types'
import React, { useEffect, useState } from 'react'
import { campaignRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'
import { toCommonDateTime } from '../util'

interface Props {

}

const Campaign = (props: Props) => {

    const [campaignList, setCampaignList] = useState<ICampaign[]>([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCampaigns()
    }, [])
    useEffect(() => {
        console.log(input)
    }, [input])

    // api
    const getCampaigns = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await campaignRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setCampaignList(data)
        }
        init()
    }


    return (
        <Container>
            <HeaderWrapper>
                <Title>캠페인</Title>
                <button onClick={() => getCampaigns()}>새로고침</button>
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
                                <th>ownner</th>
                                <th>description</th>
                                <th>updateTime</th>
                                <th>region</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                campaignList.map(v => (
                                    <tr key={v.id}>
                                        <td>{v.name}</td>
                                        <td>{v.id}</td>
                                        <td>{v.ownner}</td>
                                        <td>{v.description}</td>
                                        <td>{toCommonDateTime(v.updateTime)}</td>
                                        <td>{v.region}</td>

                                        {/* <td>imgs</td>
                                        <td>users</td>
                                        <td>pinpoints</td>
                                        <td>coupons</td>
                                        <td>comments</td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </Container>
    )
}

export default Campaign
