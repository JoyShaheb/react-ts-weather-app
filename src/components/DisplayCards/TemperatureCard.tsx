import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { FaTemperatureLow } from "react-icons/fa";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";

export const TemperatureCard = ({
  temp_max,
  temp_mix,
}: {
  temp_max: number;
  temp_mix: number;
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="capitalize">Sunrise & Sunset</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <FaTemperatureArrowDown className="w-16 h-16" />
          <CardTitle>{temp_mix}</CardTitle>
        </div>
        <div className="flex flex-col items-center gap-1">
          <FaTemperatureArrowUp className="w-16 h-16" />
          <CardTitle>{temp_max}</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};
