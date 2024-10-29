import React from "react";
import { Animation } from "@/components/molecules";
import { PageHeader } from "@/components/atoms";

const GuestBook = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <Animation delay={0.1}>
        <PageHeader
          title="Guestbook"
          description="This page is currently under development."
        />
      </Animation>
    </div>
  );
};

export default GuestBook;
