import PromptCard from "./PromptCard";

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

type ProfileProps = {
  name: string;
  desc: string;
  data: PromptProps[];
  handleEdit: () => void;
  handleDelete: () => void;
};

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <div className="mt-16 prompt_layout">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={() => {}}
            handleEdit={undefined}
            handleDelete={undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
