import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LuSunrise, LuSunset } from "react-icons/lu";

export const TimeCard = ({
  sunRise,
  sunSet,
}: {
  sunRise: string;
  sunSet: string;
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="capitalize">Sunrise & Sunset</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <LuSunrise className="w-16 h-16" />
          <CardTitle>{sunRise}</CardTitle>
        </div>
        <div className="flex flex-col items-center gap-1">
          <LuSunset className="w-16 h-16" />
          <CardTitle>{sunSet}</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};
