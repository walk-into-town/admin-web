import { Campaign, Coupon, Member, PinPoint } from "@types"
import axios, { AxiosResponse } from "axios"

type Res<T> = AxiosResponse<{
    result: "success" | "failed"
    data?: T
    error?: string
    errdesc?: string
}>

export const memberRead = async (): Promise<Res<Member[]>> => {
    return await axios.get(`/debug/scan/member`)
}
export const campaignRead = async (): Promise<Res<Campaign[]>> => {
    return await axios.get(`/debug/scan/campaign`)
}
export const pinpointRead = async (): Promise<Res<PinPoint[]>> => {
    return await axios.get(`/debug/scan/pinpoint`)
}
export const couponRead = async (): Promise<Res<Coupon[]>> => {
    return await axios.get(`/debug/scan/coupon`)
}

type MosterArray = {
    imgs: string[]
    number: number
}
export const mosterRead = async (): Promise<Res<[MosterArray]>> => {
    return await axios.get(`/debug/scan/monster`)
}