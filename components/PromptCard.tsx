"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

type CreatorProps = {
  email: string;
  image: string;
  username: string;
  __v: number;
  _id: string;
};

type PromptCardProps = {
  creator: CreatorProps;
  prompt: string;
  tag: string;
};

const PromptCard = ({
  prompt,
  handleTagClick,
  handleEdit,
  handleDelete,
}: {
  prompt: PromptCardProps;
  handleTagClick: any;
  handleEdit: any;
  handleDelete: any;
}) => {
  const [copied, setCopied] = useState("");
  
  const handleCopy = () => {
    setCopied(prompt.prompt)
    navigator.clipboard.writeText(prompt.prompt)
    setTimeout(()=> setCopied(""), 3000)
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt.creator.email}
            </p>
          </div>
        </div>
        <div
          className="copy_btn"
          onClick={handleCopy}
        >
          <Image
            src={
              copied === prompt.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copied icon"
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{prompt.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(prompt.tag)}
      >
        #{prompt.tag}
      </p>
    </div>
  );
};

export default PromptCard;
