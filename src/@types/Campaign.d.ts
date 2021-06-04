import { Coupon, PinPoint } from "@types";

declare module "@types" {
    type Campaign = {
        id: string,
        ownner: string,
        name: string,
        description: string,
        updateTime: string,
        region: string

        imgs: string[],
        users: string[]
        pinpoints: PinPoint[],
        coupons: Coupon[],
        comments: CampaignComment[]
    }
    type CampaignComment = {
        id: string,
        userId: string,
        nickname: string,
        profileImg: string,
        text: string,
        rated: number,
        imgs: string[],
        updateTime: string
    }

    // 캠페인 검색
    type SearchCampaign = {
        id: string,
        ownner: string,
        name: string,
        imgs: string[],
        description: string,
        updateTime: string,
        region: string

        pinpoints: string[],
        coupons: string[],
        pcoupons: string[],
        comments: CampaignComment[]
    }

    type CampaignSearchType = 'name' | 'region' | 'id' | 'owner';
    type CampaignSearchTypeText = {
        [key: string]: string
        name: string
        region: string
        id: string
        owner: string
    }

    type CampaignSearchCondition = 'part' | 'exact';
    type CampaignSearchParams = {
        type: CampaignSearchType,
        condition: CampaignSearchCondition,
        value: string
    }
}