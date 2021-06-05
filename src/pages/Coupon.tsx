import { Coupon as ICoupon } from '@types'
import React, { useEffect, useState } from 'react'
import { couponRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'
import { toCommonDate } from '../util'
import IDViewer from 'components/IDViewer'
import ImgsViewer from 'components/ImgsViewer'


const Coupon = () => {
    const [couponList, setCouponList] = useState<ICoupon[]>([])
    const [searchList, setSearchList] = useState<ICoupon[]>([])
    const [loading, setLoading] = useState(false)

    const onSearch = (text: string) => {
        setSearchList(couponList.filter(v => (
            v.name.includes(text)
            || v.id === text
            || v.description.includes(text)
            || v.goods.includes(text)
        )))
    }
    useEffect(() => {
        getCoupons()
    }, [])

    // api
    const getCoupons = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await couponRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setCouponList(data)
            setSearchList(data)
        }
        init()
    }


    return (
        <Container>
            <HeaderWrapper>
                <Title>쿠폰</Title>
                <button onClick={() => getCoupons()}>새로고침</button>
            </HeaderWrapper>

            <label htmlFor="search">검색 <span style={{ fontSize: 13, marginLeft: 4 }}>* id는 완전 일치</span></label>
            <input
                type="text"
                name="search"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="name, id, description, goods"
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
                                <th>Img</th>
                                <th>Description</th>
                                <th>Goods</th>
                                <th>EndDate</th>
                                <th>Issued</th>
                                <th>Limit</th>
                                <th>PaymentCondition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchList.map(v => (
                                    <tr key={v.id}>
                                        <td>{v.name}</td>
                                        <td><IDViewer id={v.id} /></td>
                                        <td><ImgsViewer imgs={[v.imgs]} /></td>
                                        <td>{v.description}</td>
                                        <td>{v.goods}</td>
                                        <td>{toCommonDate(v.endDate)}</td>
                                        <td>{v.issued}</td>
                                        <td>{v.limit}</td>
                                        <td>{v.paymentCondition}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </Container>
    )
}

export default Coupon
