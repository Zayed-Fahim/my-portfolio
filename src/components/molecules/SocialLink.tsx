import Link from "next/link";
import React from "react";
import { SocialButton } from "@/components/atoms";
import { ISocialLink } from "@/data/socialLinks";
import { ToolTip } from "@/components/atoms";

const SocialLink: React.FC<ISocialLink> = ({
  name,
  url,
  icon,
  tooltip,
  className,
}) => {
  return (
    <div className="group relative inline-block">
      <Link href={url} target="_blank" aria-label={name}>
        <SocialButton icon={icon} className={`${className}`} />
      </Link>
      {tooltip && <ToolTip name={name} />}
    </div>
  );
};

export default SocialLink;
