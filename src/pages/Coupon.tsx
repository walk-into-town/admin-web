import { Coupon as ICoupon } from '@types'
import React, { useEffect, useState } from 'react'
import { couponRead } from '../api'
import { Container, HeaderWrapper, Title } from 'styles/global'
import { toCommonDate } from '../util'


const Coupon = () => {
    const [couponList, setCouponList] = useState<ICoupon[]>([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCoupons()
    }, [])
    useEffect(() => {
        console.log(input)
    }, [input])

    // api
    const getCoupons = () => {
        const init = async () => {
            setLoading(true)
            const { data: { result, data, error, errdesc } } = await couponRead()
            setLoading(false)
            if (result === "failed" || data === undefined)
                return alert(`${error} ${errdesc}`)

            setCouponList(data)
        }
        init()
    }


    return (
        <Container>
            <HeaderWrapper>
                <Title>쿠폰</Title>
                <button onClick={() => getCoupons()}>새로고침</button>
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
                                <th>imgs</th>
                                <th>name</th>
                                <th>id</th>
                                <th>description</th>
                                <th>goods</th>
                                <th>endDate</th>
                                <th>issued</th>
                                <th>limit</th>
                                <th>paymentCondition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                couponList.map(v => (
                                    <tr key={v.id}>
                                        <td>
                                            {v.imgs !== "" && <img src={v.imgs} alt="쿠폰 이미지" width="50" />}
                                        </td>
                                        <td>{v.name}</td>
                                        <td>{v.id}</td>
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
