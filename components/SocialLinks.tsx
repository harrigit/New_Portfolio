import React from "react";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import MediumIcon from "@/assets/icons/MediumIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import SkypeIcon from "@/assets/icons/SkypeIcon";
import { CONTACT, SOCIAL_LINKS } from "@/assets/copy";
import openInNewTab from "@/utils/openInNewTab";
import UpworkIcon from "@/assets/icons/UpworkIcon";

interface Props {
  footer?: boolean;
}

const SocialLinks = ({ footer }: Props) => {
  return (
    <div className='flex justify-end space-x-4'>
      <GithubIcon className='cursor-pointer' onClick={() => openInNewTab(SOCIAL_LINKS.githubUrl)} />
      <LinkedinIcon
        className='cursor-pointer'
        onClick={() => openInNewTab(SOCIAL_LINKS.linkedinUrl)}
      />
      <MediumIcon className='cursor-pointer' onClick={() => openInNewTab(SOCIAL_LINKS.mediumURL)} />
      <UpworkIcon className='cursor-pointer' onClick={() => openInNewTab(SOCIAL_LINKS.upworkURL)} />
      {footer && (
        <>
          <SkypeIcon
            className='cursor-pointer'
            onClick={() => (window.location.href = `tel:${CONTACT.email}`)}
          />
          <EmailIcon
            className='cursor-pointer'
            onClick={() => (window.location.href = `mailto:${CONTACT.email}`)}
          />
        </>
      )}
    </div>
  );
};

export default SocialLinks;
