'use client'
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { generateDate, months } from "./day";
// import cn from "../utils/cn";
import Image from "next/image";
// import { Button } from "./Button";
// import { useDispatch } from "react-redux";
// import { increment } from "@/redux/Features/productSlice";
// import { ToastContainer, toast } from 'react-toastify';

// import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar({ setDatetime, position, className, duration, setStartDate, setSchedule }) {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    const [selectedTime, setSelectedTime] = useState('');
    // const dispatch = useDispatch()

    const handlerSubmit = () => {
        if (setSchedule) {
            setSchedule(true)
        }
        //     if(selectedTime != ''){
        //         dispatch(increment())
        setDatetime()
        const formattedString = dayjs(selectDate).toDate(); // Adjust the format as needed

        setStartDate(formattedString)

        //     }else {
        //   toast.error('Select Time',{position: toast.POSITION.TOP_CENTER});

        //     }
    }

    const handlerClick = (e) => {
        if (e.target === e.currentTarget) {
            setDatetime();
            console.log("close calendar")
        }
    }
    function cn(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    // console.log(selectDate)
    return (
        <div className={` z-[10000] w-full    justify-center items-center flex ${position + " " + className}`} onClick={handlerClick}>
            <div id="about" className={` w-full shadow bg-white px-4 py-4 rounded-xl`}>
                <div className="my-4 flex px-4 items-center justify-between w-full">
                    <span onClick={() => {
                        setToday(today.month(today.month() + 1));
                    }} className=" cursor-pointer hover:scale-105 transition-all">
                        <Image src={'/icons/calendarLeft.svg'} width={8} height={8} sizes="100vw" className="" alt="" />
                    </span>
                    <h1 className="select-none text-center text-orange font-bold">
                        {months[today.month()]}, {today.year()}
                    </h1>
                    <span onClick={() => {
                        setToday(today.month(today.month() + 1));
                    }} className=" cursor-pointer hover:scale-105 transition-all">
                        <Image src={'/icons/calendarRight.svg'} width={8} height={8} sizes="100vw" className="" alt="" />
                    </span>

                </div>
                <div className="grid grid-cols-7 ">
                    {days.map((day, index) => {
                        return (
                            <h1
                                key={index}
                                className="text-sm text-center h-10 w-10 grid place-content-center text-orange font-bold select-none"
                            >
                                {day}
                            </h1>
                        );
                    })}
                </div>

                <div className=" grid grid-cols-7 ">
                    {generateDate(today.month(), today.year()).map(
                        ({ date, currentMonth, today }, index) => {

                            return (
                                <div
                                    key={index}
                                    className="text-center h-10 grid place-content-center text-sm "
                                >
                                    <h1
                                        className={cn(
                                            currentMonth ? "text-orange !font-bold" : '!font-bold text-gray-300',
                                            today
                                                ? "bg-gray-400 text-white"
                                                : "",
                                            selectDate
                                                .toDate()
                                                .toDateString() ===
                                                date.toDate().toDateString()
                                                ? "bg-[#EF4D23] text-white"
                                                : "",
                                            "h-10 w-10 rounded-xxl grid place-content-center hover:bg-[#EF4D23] rounded-xl hover:text-white transition-all cursor-pointer select-none"
                                        )}
                                        onClick={() => {
                                            setSelectDate(date);
                                        }}
                                    >
                                        {date.date()}
                                    </h1>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}



