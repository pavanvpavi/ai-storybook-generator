import { NextResponse } from "next/server";

import {
  generateAIStory
} from "@/lib/aiStoryGenerator";


export async function POST(
 request: Request
){

try{

const body =
await request.json();


const story =
await generateAIStory(body);


return NextResponse.json(
story
);


}
catch(error){

console.error(error);


return NextResponse.json(
{
error:
"Story generation failed"
},
{
status:500
}
);


}


}