import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LuGlobe } from "react-icons/lu";

export const CoordinatesCard = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="capitalize">Coordinates</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="">
          <div className="flex justify-center items-center gap-2">
            <div className="">23.7104</div>
            <LuGlobe className="w-16 h-16" />
            <div className="opacity-0">90.4074</div>
          </div>
          <div className="text-center mt-2">90.4074</div>
        </div>
      </CardContent>
    </Card>
  );
};
