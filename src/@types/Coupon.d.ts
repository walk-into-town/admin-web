declare module "@types" {
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