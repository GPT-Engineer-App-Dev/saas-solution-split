import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCard = ({ icon, title, description }) => (
  <Card className="text-center">
    <CardHeader>
      <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default FeatureCard;