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
  createdAt: string
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
  const [prompts, setPrompts] = useState<PromptProps[]>([]);

  // Search states
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [searchedResults, setSearchedResults] = useState<PromptProps[]>([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPrompts(data);
    };
    fetchPrompts();
  }, []);

  const filterPrompts = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return prompts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);    
    setSearchText(e.target.value);
    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);        
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  // console.log("PROMPTS", prompts);
  // console.log("SEARCH TEXT", searchText);
  // console.log("SEARCH TIMEOUT", searchTimeout);
  // console.log("SEARCHED RESULTS", searchedResults);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
