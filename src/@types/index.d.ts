declare module "@types" {
    type RouteParamList = {
        "/no-match": undefined
    }

    type RegisterMember = {
        id: string,
        pw: string,
        nickname: string,
        isManager: boolean
    }

    type Coupon = {
        id: string,
        name: string,
        description: string,
        goods: string,
        endDate: string,
        issued: number,
        limit: number,
        imgs: string,
        paymentCondition: number
    }


}