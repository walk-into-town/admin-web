declare module "@types" {
    type Member = {
        id: string,
        pw: string,
        nickname: string,
        profileImg: string,
        selfIntroduction: string,
        isManager: boolean,

        badge: string[],
        primeBadge: string,
        comments: MemberComment[],
        coupons: MemberCoupon[],
        myCampaigns: string[],
        playingCampaigns: PlayingCampaign[]
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

    type PlayingCampaign = {
        cleard: boolean,
        id: string
    }
}