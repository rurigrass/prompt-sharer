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
  const router = useRouter();
  const [prompts, setPrompts] = useState([]);
  console.log(prompts);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response.json();
      setPrompts(data);
    };
    if (session?.user?.id) fetchPrompts();
  }, []);

  const handleEdit = (prompt: PromptProps) => {
    console.log("EDIT ", prompt);
    router.push(`/update-prompt?id=${prompt._id}`);
  };

  const handleDelete = async (prompt: PromptProps) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this Prompt?"
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPrompts = prompts.filter(
          (item) => item._id !== prompt._id
        );
        setPrompts(filteredPrompts);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("DELETE prompt", prompt);
  };

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
