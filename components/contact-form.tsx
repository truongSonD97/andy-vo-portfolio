"use client";
import { useActionState, useEffect, useTransition } from "react";
import { sendEmail } from "@/app/actions/send-email";
import { Mail } from "lucide-react";
import { AnimatedContact } from "./animated-contact";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, null);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message, {
        position: "top-right",
        className: "bg-green-500 text-white",
      });
    }
    if (state?.status === "error") {
      toast.error(state.message, {
        position: "top-right",
        className: "bg-red-500 text-white",
      });
    }
  }, [state]);

  return (
    <AnimatedContact>
      <div className="w-full max-w-md space-y-2 ml-auto mr-auto">
        <form
          action={(formData) => {
            if (isPending) return; // prevent double submit
            startTransition(() => {
              formAction(formData);
            });
          }}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
            >
              Name
            </label>
            <input
              id="name"
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
              placeholder="Your name"
              type="text"
              required
              name="name"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
            >
              Email
            </label>
            <input
              id="email"
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
              placeholder="Your email"
              type="email"
              required
              name="email"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="job-title"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
            >
              Job Title
            </label>
            <input
              id="job-title"
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
              placeholder="Software Engineer"
              required
              name="job-title"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="budget"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
            >
              Budget
            </label>
            <input
              id="budget"
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
              placeholder="$1,000 - $5,000"
              name="budget"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
            >
              Message
            </label>
            <textarea
              id="message"
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
              placeholder="Your message"
              required
              name="message"
            />
          </div>
          <Button
            className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80 transition-all duration-300"
            size="lg"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </AnimatedContact>
  );
}
