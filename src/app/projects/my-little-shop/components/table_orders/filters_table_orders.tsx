import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

interface Props {
    orderText: string;
    setOrderText: Dispatch<SetStateAction<string>>;
    date: DateRange | undefined;
    setDate: Dispatch<SetStateAction<DateRange | undefined>>;
}

const FiltersTableOrders = ({
    date,
    setDate,
    orderText,
    setOrderText,
}: Props) => {
    return (
        <div className="border border-1 border-gray-200 border-b-0 rounded-t-2xl p-3 flex">
            <div className="relative w-auto">
                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                />
                <Input
                    placeholder="Search orders..."
                    value={orderText}
                    onChange={(event) => setOrderText(event.target.value)}
                    className="pl-10 rounded-2xl"
                />
            </div>
            <div className="ml-auto">
                <div className={cn("grid gap-2")}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[300px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground text-gray-900 rounded-2xl"
                                )}
                            >
                                <CalendarIcon />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date Range  </span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={1}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
};
export default FiltersTableOrders;
