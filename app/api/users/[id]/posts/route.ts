import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request: any, { params }: { params: any }) => {
  try {
    await connectToDB();
    console.log("THIS IS RUNNING");

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    // if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
