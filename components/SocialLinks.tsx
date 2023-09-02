import React from "react";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedInIcon";

const openInNewTab = (url: string) => {
  const newTab = window.open(url, "_blank");
  if (newTab) {
    newTab.focus();
  }
};

const SocialLinks: React.FC = () => {
  const githubUrl = "https://github.com/naveed-niazi";
  const linkedinUrl = "https://www.linkedin.com/in/naveedniazi/";

  return (
    <div className='flex space-x-5 cursor-pointer'>
      <GithubIcon onClick={() => openInNewTab(githubUrl)} />
      <LinkedinIcon onClick={() => openInNewTab(linkedinUrl)} />
    </div>
  );
};

export default SocialLinks;
