declare module "@types" {
    type Report = {
        id: string
        type: "Campaign" | "Pinpoint"
        targetId: string
        targetUser: string
        userId: string
        description: string
        date: string
        processed: false
    }
}