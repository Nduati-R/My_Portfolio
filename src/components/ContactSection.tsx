
import { useState } from "react";
import { Mail, MapPin, Send, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-portfolio-black/95">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Get In Touch</h2>
        <p className="text-portfolio-gray text-lg max-w-2xl mx-auto text-center mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="bg-portfolio-darkGray p-6 rounded-lg border border-portfolio-green/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-portfolio-black/50 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-portfolio-green" />
                  </div>
                  <div>
                    <p className="text-portfolio-lightGray font-medium">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-portfolio-gray hover:text-portfolio-green transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-portfolio-black/50 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-portfolio-green" />
                  </div>
                  <div>
                    <p className="text-portfolio-lightGray font-medium">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-portfolio-gray hover:text-portfolio-green transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-portfolio-black/50 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-portfolio-green" />
                  </div>
                  <div>
                    <p className="text-portfolio-lightGray font-medium">
                      Location
                    </p>
                    <p className="text-portfolio-gray">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-portfolio-green/10">
                <h4 className="text-portfolio-lightGray font-medium mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {/* Social media icons would go here */}
                  <a
                    href="#"
                    className="bg-portfolio-black/50 hover:bg-portfolio-green/20 p-2 rounded-full text-portfolio-gray hover:text-portfolio-green transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-portfolio-black/50 hover:bg-portfolio-green/20 p-2 rounded-full text-portfolio-gray hover:text-portfolio-green transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-portfolio-black/50 hover:bg-portfolio-green/20 p-2 rounded-full text-portfolio-gray hover:text-portfolio-green transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-portfolio-darkGray p-6 rounded-lg border border-portfolio-green/20"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Send Me a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-portfolio-lightGray mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-portfolio-black border-portfolio-green/20 focus:border-portfolio-green/50 text-portfolio-gray"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-portfolio-lightGray mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    required
                    className="bg-portfolio-black border-portfolio-green/20 focus:border-portfolio-green/50 text-portfolio-gray"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-portfolio-lightGray mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-portfolio-black border-portfolio-green/20 focus:border-portfolio-green/50 text-portfolio-gray"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-portfolio-lightGray mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-portfolio-black border-portfolio-green/20 focus:border-portfolio-green/50 text-portfolio-gray resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-portfolio-green hover:bg-portfolio-green/90 text-black font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
