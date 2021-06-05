import { Campaign as ICampaign } from '@types'
import React, { useEffect, useState } from 'react'
import { campaignRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'
import { toCommonDateTime } from '../util'
import IDViewer from 'components/IDViewer'
import ImgsViewer from 'components/ImgsViewer'

interface Props {

}

const Campaign = (props: Props) => {

    const [campaignList, setCampaignList] = useState<ICampaign[]>([])
    const [searchList, setSearchList] = useState<ICampaign[]>([])
    const [loading, setLoading] = useState(false)

    const onSearch = (text: string) => {
        setSearchList(campaignList.filter(v => (
            v.name.includes(text)
            || v.id === text
            || v.ownner.includes(text)
            || v.description.includes(text)
            || v.region.includes(text)
        )))
    }

    useEffect(() => {
        getCampaigns()
    }, [])

    // api
    const getCampaigns = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await campaignRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setCampaignList(data)
            setSearchList(data)
        }
        init()
    }


    return (
        <Container>
            <HeaderWrapper>
                <Title>캠페인</Title>
                <button onClick={() => getCampaigns()}>새로고침</button>
            </HeaderWrapper>

            <label htmlFor="search">검색 <span style={{ fontSize: 13, marginLeft: 4 }}>* id는 완전 일치</span></label>
            <input
                type="text"
                name="search"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="name, id, ownner, description, region"
            />

            {
                loading ?
                    <p>로딩중</p>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Imgs</th>
                                <th>Ownner</th>
                                <th>Description</th>
                                <th>UpdateTime</th>
                                <th>Region</th>
                                <th>참여자</th>
                                <th>핀포인트</th>
                                <th>쿠폰</th>
                                <th>리뷰</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchList.map(v => (
                                    <tr key={v.id}>
                                        <td>{v.name}</td>
                                        <td><IDViewer id={v.id} /></td>
                                        <td><ImgsViewer imgs={v.imgs} /></td>
                                        <td>{v.ownner}</td>
                                        <td>{v.description}</td>
                                        <td>{toCommonDateTime(v.updateTime)}</td>
                                        <td>{v.region}</td>
                                        <td>{v.users.length}</td>
                                        <td>{v.pinpoints.length}</td>
                                        <td>{v.coupons.length}</td>
                                        <td>{v.comments.length}</td>
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
