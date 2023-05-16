"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      data list
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e: React.FormEvent) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/');
    };
    fetchPrompts();
  }, []);

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

      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
