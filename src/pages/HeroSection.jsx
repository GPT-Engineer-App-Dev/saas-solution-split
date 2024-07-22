import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Transform Your Workflow with Our SaaS Solution</h1>
        <p className="text-xl mb-8">Streamline processes, boost productivity, and drive growth.</p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Get Started Free</Button>
      </div>
    </div>
  </section>
);

export default HeroSection;