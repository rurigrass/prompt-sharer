type CreatorProps = {
  email: string;
  image: string;
  username: string;
  __v: number;
  _id: string;
};

type PromptProps = {
  _id: string;
  creator: CreatorProps;
  prompt: string;
  tag: string;
};

type ProfileProps = {
  name: string;
  desc: string;
  data: PromptProps;
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
  return <div>Profile</div>;
};

export default Profile;
