import { CheckCircle2, Star } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Intuitive Interface",
    description: "User-friendly design for seamless navigation and efficient task management."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-purple-600" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful data analysis tools."
  },
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Seamless Integration",
    description: "Easily connect with your favorite tools and platforms."
  }
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;