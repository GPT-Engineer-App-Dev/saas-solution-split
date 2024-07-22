import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote: "This SaaS solution has revolutionized our workflow. It's intuitive, powerful, and incredibly efficient.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators"
  },
  {
    quote: "The customer support is outstanding, and the product keeps getting better with each update.",
    name: "John Smith",
    title: "CTO, Future Systems"
  },
  {
    quote: "We've seen a significant boost in productivity since implementing this solution. Highly recommended!",
    name: "Emily Johnson",
    title: "Operations Manager, Global Enterprises"
  }
];

const QuotesCarousel = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <Carousel className="max-w-xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default QuotesCarousel;