type DateTime = {
    day?: number,
    month?: number,
    year?: number,
}

type MyError = {
    message: string,
    active: boolean,

    day: {
        message: string,
        active: boolean,
    },
    month: {
        message: string,
        active: boolean,
    },
    year: {
        message: string,
        active: boolean,
    },
}