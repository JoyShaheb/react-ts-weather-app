import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { type ISys } from "@/Types";

export const TimeCard = ({ sunrise, sunset }: ISys) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="capitalize">Sunrise & Sunset</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <LuSunrise className="w-16 h-16" />
          <CardTitle>{sunrise}</CardTitle>
        </div>
        <div className="flex flex-col items-center gap-1">
          <LuSunset className="w-16 h-16" />
          <CardTitle>{sunset}</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};
