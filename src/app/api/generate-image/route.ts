import {NextResponse} from "next/server";

import {
 generateImage
} from "@/lib/imageGenerator";


export async function POST(
 req:Request
){

try{

const {
prompt
}=await req.json();


const image =
await generateImage(prompt);


return NextResponse.json({
image
});


}
catch(error){

return NextResponse.json(
{
error:"Image generation failed"
},
{
status:500
}
);

}

}