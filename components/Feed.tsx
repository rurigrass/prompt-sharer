"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

type CreatorProps = {
  _id: string;
  __v: number;
  email: string;
  image: string;
  username: string;
};

type PromptProps = {
  _id: string;
  __v: number;
  creator: CreatorProps;
  prompt: string;
  tag: string;
};

const PromptCardList = ({
  data,
  handleTagClick,
}: {
  data: PromptProps[];
  handleTagClick: any;
}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState<PromptProps[]>([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPrompts(data);
    };
    fetchPrompts();
  }, []);

  const handleSearchChange = (e: React.FormEvent) => {
    console.log("search change");
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={() => handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
