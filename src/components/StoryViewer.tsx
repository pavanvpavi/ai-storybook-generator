"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Story
} from "@/types/story";

import ThemeIllustration from "./ThemeIllustration";


interface Props{
  story: Story;
}


export default function StoryViewer({
  story
}:Props){


const [page,setPage]=useState(0);


const pages=[
{
pageNumber:0,
text:story.cover
},
...story.pages
];


const current =
pages[page];



function next(){

if(page < pages.length-1){

setPage(page+1);

}

}



function previous(){

if(page>0){

setPage(page-1);

}

}



return (

<div className="
max-w-3xl
mx-auto
mt-10
">


<motion.div

key={page}

initial={{
opacity:0,
x:50
}}

animate={{
opacity:1,
x:0
}}

className="
bg-white
rounded-3xl
shadow-xl
p-8
"

>


<ThemeIllustration

theme={story.theme}

text={current.text}

page={page}

/>


<h2 className="
text-3xl
font-bold
text-purple-700
mt-6
">

{
page===0
?
story.title
:
`Page ${current.pageNumber}`
}

</h2>


<p className="
mt-5
text-lg
leading-8
text-gray-700
">

{
current.text
}

</p>


</motion.div>



<div className="
flex
items-center
justify-between
mt-6
">


<button

onClick={previous}

disabled={page===0}

className="
px-5
py-3
rounded-xl
bg-purple-200
disabled:opacity-40
"

>

Previous

</button>



<span className="
font-bold
">

{
page+1
}
/
{
pages.length
}

</span>



<button

onClick={next}

disabled={
page===pages.length-1
}

className="
px-5
py-3
rounded-xl
bg-purple-600
text-white
disabled:opacity-40
"

>

Next

</button>



</div>



<div className="
mt-4
h-3
bg-gray-200
rounded-full
overflow-hidden
">


<div

className="
h-full
bg-purple-600
transition-all
"

style={{
width:
`${((page+1)/pages.length)*100}%`
}}

/>


</div>



</div>


)

}