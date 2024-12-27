import { useState, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Toaster } from '@/components/ui/toaster';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Element } from 'react-scroll';



const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!name || !email || !message) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields!',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    console.log('Sending email...');

    try {
      const emailParams = {
        to_name: "Zubair",
        email: email,
        from_name: name,
        message: message,
      };
      console.log('emailParams:', emailParams);

      await emailjs.send(serviceID, templateID, emailParams, userID);

      console.log(name, email, message);
      toast({
        title: 'Success',
        description: 'Message sent successfully!',
        variant: 'default',
      });
      
      

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        toast({
          title: 'EmailJS Error',
          description: `EmailJS failed: ${err.text}`,
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Element name="contact-us"  className="bg-primary dark:bg-dark-primary-dark ~py-20/40">
      <Toaster />
      <div className="container">
        <h2 className="h1 mb-12 text-center">Contact Me</h2>

        <form onSubmit={handleSubmit} className="w-full mx-auto max-w-lg flex flex-col gap-4">
          <Input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            placeholder="Your Name"
            className="p-3 border rounded-md"
            autoComplete='name'
          />
          <Input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="p-3 border rounded-md"
            autoComplete='email'
          />
          <Textarea
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="p-3 border rounded-md h-40 resize-none"
          />
          <Button type="submit" disabled={isLoading} className="mt-4">
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </Element>
  );
};

export default ContactMe;
