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
  handleEdit?: (prompt: PromptProps) => void;
  handleDelete?: (prompt: PromptProps) => void;
};

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  // const handleEdit = (prompt:PromptProps) => {console.log(prompt)};

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTagClick={() => {"clicked"}}
            handleEdit={() => handleEdit && handleEdit(prompt)}
            handleDelete={() => handleDelete && handleDelete(prompt)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
