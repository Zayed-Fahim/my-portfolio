import { PageHeader } from "@/components/atoms";
import { Animation } from "@/components/molecules";
import { GuestBookPlayground } from "@/components/organisms";
import { SessionProvider } from "next-auth/react";

const GuestBook = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <Animation delay={0.1}>
        <PageHeader
          title="Guestbook"
          description="Feel free to share your suggestions, appreciation, or anything else on your mind."
        />
      </Animation>
      <SessionProvider>
        <GuestBookPlayground />
      </SessionProvider>
    </div>
  );
};

export default GuestBook;
