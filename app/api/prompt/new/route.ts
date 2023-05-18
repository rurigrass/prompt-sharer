import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req: any) => {
  const { userId, createdAt, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
      createdAt
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log("failed to create a new prompt", { status: 500 });
  }
};
