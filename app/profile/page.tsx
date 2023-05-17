"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";

type CreatorProps = {
  email: string;
  image: string;
  username: string;
  __v: number;
  _id: string;
};

type PromptProps = {
  creator: CreatorProps;
  prompt: string;
  tag: string;
  _id: string;
  __v: number;
};

const MyProfile = () => {
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);

  const handleEdit = (prompt: PromptProps) => {
    console.log("EDIT ", prompt);
  };

  const handleDelete = (prompt: PromptProps) => {
    console.log("DELETE ", prompt);
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPrompts(data);
    };
    if (session?.user.id) fetchPrompts();
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalised profile page"
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
