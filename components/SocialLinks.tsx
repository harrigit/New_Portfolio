import React from "react";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import MediumIcon from "@/assets/icons/MediumIcon";
import WhatsAppIcon from "@/assets/icons/WhatsAppIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import SkypeIcon from "@/assets/icons/SkypeIcon";
import { CONTACT } from "@/assets/copy";

const openInNewTab = (url: string) => {
  const newTab = window.open(url, "_blank");
  if (newTab) {
    newTab.focus();
  }
};

interface Props {
  footer?: boolean;
}

const SocialLinks = ({ footer }: Props) => {
  const githubUrl = "https://github.com/naveed-niazi";
  const linkedinUrl = "https://www.linkedin.com/in/naveedniazi";
  const mediumURL = "https://medium.com/@naveedniazi";

  return (
    <div className='flex justify-end space-x-4 cursor-pointer'>
      <GithubIcon onClick={() => openInNewTab(githubUrl)} />
      <LinkedinIcon onClick={() => openInNewTab(linkedinUrl)} />
      <MediumIcon onClick={() => openInNewTab(mediumURL)} />
      {footer && (
        <>
          <SkypeIcon
            onClick={() => (window.location.href = `tel:${CONTACT.email}`)}
          />
          <EmailIcon
            onClick={() => (window.location.href = `mailto:${CONTACT.email}`)}
          />
        </>
      )}
    </div>
  );
};

export default SocialLinks;
