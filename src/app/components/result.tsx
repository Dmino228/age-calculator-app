"use client"

import { signal } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"
import CountUp from "react-countup"

const InitResultState: DateTime = {
    day: undefined,
    month: undefined,
    year: undefined,
}

export const result = signal(InitResultState)

export default function Result() {
    useSignals()

    return (
        <div className="text-5xl text-off-black font-bold italic leading-[1.1] mt-16 text-nowrap lg:text-8xl">
            <span className="text-primary-purple">{
                result.value.year !== undefined ?
                <CountUp
                    end={result.value.year}
                    duration={1}
                /> :
                "--"
            }</span> years <br />

            <span className="text-primary-purple">{
                result.value.month !== undefined ?
                <CountUp
                    end={result.value.month}
                    duration={1}
                /> :
                "--"
            }</span> months <br />

            <span className="text-primary-purple">{
                result.value.day !== undefined ?
                <CountUp
                    end={result.value.day}
                    duration={1}
                /> :
                "--"
            }</span> days <br />
        </div>
    )
}