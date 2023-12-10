import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🐇" | "🎃" | "🦃" | "❤️";
const orderByAlphabet: Record<Holiday, Holiday> = {
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "🦃",
    "🦃": "❤️",
    "❤️": "🎄"
};
const orderByYear: Record<Holiday, Holiday> = {
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "❤️",
    "❤️": "🐇",
    "🐇": "🎃"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, nextHoliday] = useState<Holiday>("🎃");
    function holidayAlphaOrder(): void {
        const newHoliday = orderByAlphabet[currentHoliday];
        nextHoliday(newHoliday);
    }
    function holidayYearOrder(): void {
        const newHoliday = orderByYear[currentHoliday];
        nextHoliday(newHoliday);
    }
    return (
        <div>
            <span>Holiday: {currentHoliday}</span>
            <Button onClick={holidayAlphaOrder}>Advance by Alphabet</Button>
            <Button onClick={holidayYearOrder}>Advance by Year</Button>
        </div>
    );
}
