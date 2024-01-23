import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React from 'react'

interface RangeSliderProps {
    min?: number,
    max?: number,
    value: number,
    onChange: (value: number) => void
}

export default function RangeSlider({
    min = 1,
    max = 10,
    value,
    onChange
}: RangeSliderProps) {

    return (
        <div className="w-[50vw] bg-white p-10 rounded-md flex items-center gap-5">
            <div className="slidervalue">{value}</div>
            <Slider
                min={0}
                max={10}
                value={value}
                onChange={(val) => {
                    onChange(val as number)
                }}
            />
            {/* <div className="slidervalue">{max}</div> */}
        </div>
    )
}
