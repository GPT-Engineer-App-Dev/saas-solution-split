import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <div className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit" className="w-full">Send Message</Button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactSection;