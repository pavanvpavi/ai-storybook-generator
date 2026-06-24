import Groq from "groq-sdk";
import { v4 as uuid } from "uuid";

import {
  Story,
  StoryInput
} from "@/types/story";


export async function generateAIStory(
  input: StoryInput
): Promise<Story> {


  if (!process.env.GROQ_API_KEY) {

    throw new Error(
      "GROQ_API_KEY missing"
    );

  }


  const groq = new Groq({

    apiKey:
      process.env.GROQ_API_KEY

  });



  const prompt = `

You are an expert children's story writer.

Create a personalized children's storybook.

Child Name:
${input.childName}

Age:
${input.age}

Theme:
${input.theme}

Favorite Color:
${input.favoriteColor}

Best Friend:
${input.bestFriend}

Moral:
${input.moral}


Return ONLY valid JSON.

Do not use markdown.

Format:

{
"title":"",
"cover":"",
"pages":[
{
"pageNumber":1,
"text":""
}
]
}


Rules:

- Exactly 5 pages
- Child name must appear in every page
- Best friend name must appear
- Story must match the theme
- Use simple language
- Make it magical and educational
- End positively

`;



  const response =
    await groq.chat.completions.create({

      model:
        "llama-3.1-8b-instant",

      messages:[
        {
          role:"user",
          content:prompt
        }
      ],

      temperature:0.8

    });



  const content =
    response.choices[0]
      .message
      .content;



  if(!content){

    throw new Error(
      "No AI response"
    );

  }



  const cleanedContent =
  content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

console.log("AI RESPONSE:");
console.log(cleanedContent);

const story =
  JSON.parse(cleanedContent);



  return {

    id:uuid(),

    title:
      story.title,

    childName:
      input.childName,

    age:
      input.age,

    theme:
      input.theme,

    favoriteColor:
      input.favoriteColor,

    bestFriend:
      input.bestFriend,

    moral:
      input.moral,

    cover:
      story.cover,


    pages:
      story.pages.map(
        (page:any)=>({

          pageNumber:
            page.pageNumber,

          text:
            page.text,

          theme:
            input.theme

        })
      ),


    createdAt:
      new Date()
      .toISOString()

  };


}