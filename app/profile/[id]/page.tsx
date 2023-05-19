"use client";

import { useRouter, useSearchParams } from "next/navigation";
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
  _id: string;
  __v: number;
  creator: CreatorProps;
  prompt: string;
  tag: string;
  createdAt: string;
};

type ParamsProps = {
  id: string;
};

const ProfilePage = ({ params }: { params: ParamsProps }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [prompts, setPrompts] = useState([]);
  console.log(params);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setPrompts(data);
    };

    if (params?.id) fetchPrompts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={prompts}
    />
  );
};

export default ProfilePage;
