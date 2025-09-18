import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export const WeatherCard = ({
  weatherStatus,
  icon = "10d",
}: {
  weatherStatus: string;
  icon: string;
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="capitalize">{weatherStatus}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center flex-col gap-2">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          // className="w-20 h-20 border"
        />
      </CardContent>
    </Card>
  );
};
