export const toCommonDate = (time: string) => {
    return time.slice(0, 10).replaceAll('-', '.');
}

export const toCommonDateTime = (time: string) => {
    return `${toCommonDate(time)} ${time.slice(11, 19)}`;
}