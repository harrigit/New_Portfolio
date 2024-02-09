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
      <a
        href={SOCIAL_LINKS.linkedinUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
      >
        <LinkedinIcon className='cursor-pointer' />
      </a>
      <a
        href={SOCIAL_LINKS.githubUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'
      >
        <GithubIcon className='cursor-pointer' />
      </a>
      <a
        href={SOCIAL_LINKS.upworkURL}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Upwork'
      >
        <UpworkIcon className='cursor-pointer' />
      </a>
      {footer && (
        <>
          <a href={`skype:${CONTACT.skype}?call`} aria-label='Skype'>
            <SkypeIcon className='cursor-pointer' />
          </a>
          <a href={`mailto:${CONTACT.email}`} aria-label='Email'>
            <EmailIcon className='cursor-pointer' />
          </a>
          <a
            href={SOCIAL_LINKS.mediumURL}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Medium'
          >
            <MediumIcon className='cursor-pointer' />
          </a>
        </>
      )}
    </div>
  );
};

export default SocialLinks;
