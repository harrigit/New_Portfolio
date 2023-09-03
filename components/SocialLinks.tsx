import React from "react";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";
import MediumIcon from "@/assets/icons/MediumIcon";

const openInNewTab = (url: string) => {
  const newTab = window.open(url, "_blank");
  if (newTab) {
    newTab.focus();
  }
};

const SocialLinks: React.FC = () => {
  const githubUrl = "https://github.com/naveed-niazi";
  const linkedinUrl = "https://www.linkedin.com/in/naveedniazi/";
  const mediumURL = "https://medium.com/@naveedniazi";

  return (
    <div className='flex justify-end space-x-4 cursor-pointer'>
      <GithubIcon onClick={() => openInNewTab(githubUrl)} />
      <LinkedinIcon onClick={() => openInNewTab(linkedinUrl)} />
      <MediumIcon onClick={() => openInNewTab(mediumURL)} />
    </div>
  );
};

export default SocialLinks;
