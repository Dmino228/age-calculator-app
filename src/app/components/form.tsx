"use client"

import Image from 'next/image';
import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { ChangeEvent, FormEvent } from 'react';
import FormField from './formField';
import { result } from './result';

const InitDataState: DateTime = {
    day: undefined,
    month: undefined,
    year: undefined,
}

const initErrorState: MyError = {
    message: "",
    active: false,

    day: {
        message: "",
        active: false,
    },
    month: {
        message: "",
        active: false,
    },
    year: {
        message: "",
        active: false,
    },
}

const data = signal(InitDataState)
const error = signal(initErrorState)

function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target

    data.value = {
        ...data.value,
        [name]: value,
    }
}

function validateField(fieldName: string, errorMessage: string, minValue?: number, maxValue?: number) {
    // @ts-expect-error:
    if (!data.value[fieldName] || data.value[fieldName] < minValue || data.value[fieldName] > maxValue) {
        error.value = {
            ...error.value,
            [fieldName]: {
                message: errorMessage,
                active: true,
            }
        }
    }
}

function calculateDateDifference(startDate: Date, endDate: Date) {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth() + 1;
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { day, month, year } = data.value

    error.value = initErrorState

    validateField("day", "This field is required")
    validateField("month", "This field is required")
    validateField("year", "This field is required")

    if (!day || !month || !year) return

    validateField("day", "Must be a valid day", 1, 31)
    validateField("month", "Must be a valid month", 1, 12)

    const monthsWith30days = [4, 6, 9, 11]
    if ((monthsWith30days.includes(Number(month)) && day > 30) || 
        (year % 4 != 0 && month == 2 && day > 28) || 
        (year % 4 == 0 && month == 2 && day > 29)) {
        error.value = {
            ...error.value,
            message: "Must be a valid date",
            active: true,
        }
    }

    const date = new Date(year, month, day)
    const now = new Date()
    const diff = calculateDateDifference(date, now)

    if (diff.years < 0) {
        error.value = {
            ...error.value,
            year: {
                message: "Must be in the past",
                active: true,
            }
        }
    }

    if (error.value.active || error.value.day.active || error.value.month.active || error.value.year.active) return

    result.value = {day: diff.days, month: diff.months, year: diff.years}
}

export default function Form() {
    useSignals()

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row gap-4 lg:gap-8">
                <FormField 
                    error={error.value}
                    name="day"
                    handleChange={handleChange}
                >
                    {error.value.active && <p className="text-sm text-primary-light-red italic">{error.value.message}</p>}
                </FormField>
                <FormField 
                    error={error.value}
                    name="month"
                    handleChange={handleChange}
                />
                <FormField 
                    error={error.value}
                    name="year"
                    handleChange={handleChange}
                />
            </div>
            <div className="mt-8 mb-8 grid place-items-center relative">
                <hr className="border-light-grey w-[100%]" />
                <button className="bg-primary-purple w-20 h-20 grid place-items-center rounded-full absolute top-[-2.5rem] hover:bg-off-black transition lg:right-0 lg:w-24 lg:h-24 lg:top-[-3rem]">
                    <Image 
                        src="icon-arrow.svg" 
                        alt="icon arrow" 
                        width={50} 
                        height={50}
                    />
                </button>
            </div>
        </form>
    )
}