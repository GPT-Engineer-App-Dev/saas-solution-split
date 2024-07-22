import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({ quote, name, title }) => (
  <Card>
    <CardContent className="flex flex-col items-center text-center pt-6">
      <img src="/placeholder.svg" alt={name} className="w-20 h-20 rounded-full mb-4" />
      <p className="mb-4 italic">"{quote}"</p>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </CardContent>
  </Card>
);

export default TestimonialCard;