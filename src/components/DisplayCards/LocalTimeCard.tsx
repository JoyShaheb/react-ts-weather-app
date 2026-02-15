import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { LuClock8 } from "react-icons/lu";

export const LocalTimeCard = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="capitalize">Local Time</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center flex-col gap-2">
        <LuClock8 className="w-16 h-16" />
        <div className="">5:34 PM</div>
      </CardContent>
    </Card>
  );
};
