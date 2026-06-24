import { HfInference } from "@huggingface/inference";

const hf = new HfInference(
  process.env.HF_TOKEN
);


export async function generateImage(
  prompt: string
) {

  try {

    const image =
      await hf.textToImage({

        model:
          "stabilityai/stable-diffusion-xl-base-1.0",

        inputs:
          `Children's storybook illustration,
          cute cartoon style,
          ${prompt},
          colorful,
          child friendly,
          high quality`

      });


    if (typeof image === "string") {

      return image;

    }


    const buffer =
      Buffer.from(
        await image.arrayBuffer()
      );


    return `data:image/png;base64,${buffer.toString("base64")}`;


  }
  catch(error){

    console.error(
      "Image generation failed",
      error
    );

    return null;

  }

}