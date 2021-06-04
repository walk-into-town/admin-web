declare module "@types" {
    type Member = {
        id: string,
        pw: string,
        nickname: string,
        selfIntroduction: string,
        isManager: boolean,
        badge: string[],
        primeBadge: string,
        comments: MemberComment[],
        coupons: MemberCoupon[],
        myCampaigns: stringp[]
    }

    type MemberComment = {
        coid: string
        type: "campaign" | "pinpoint"
        id: string
    }

    type MemberCoupon = {
        id: string,
        used: boolean
    }
}