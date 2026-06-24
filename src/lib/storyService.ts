import {
Story,
StoryInput
} from "@/types/story";


export async function createStory(
input: StoryInput
):Promise<Story>{


const response =
await fetch(
"/api/generate-story",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:
JSON.stringify(input)

}
);


if(!response.ok){

throw new Error(
"Story generation failed"
);

}


return await response.json();


}