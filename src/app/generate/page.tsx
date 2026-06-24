"use client";


import {useState} from "react";
import Navbar from "@/components/Navbar";
import {
StoryTheme,
Story
} from "@/types/story";

import {
createStory
} from "@/lib/storyService";
import StoryViewer from "@/components/StoryViewer";


const themes:StoryTheme[]=[
"Space",
"Jungle",
"Ocean",
"Magic",
"Dinosaurs"
];


export default function GeneratePage(){


const [loading,setLoading]=useState(false);

const [story,setStory]=useState<Story|null>(null);



const [form,setForm]=useState({

childName:"",
age:5,
theme:"Space" as StoryTheme,
favoriteColor:"",
bestFriend:"",
moral:"Always help others"

});



function update(
key:string,
value:any
){

setForm({

...form,

[key]:value

});

}



async function generate(){


try{


setLoading(true);


const result =
await createStory(form);


setStory(result);


localStorage.setItem(
"latestStory",
JSON.stringify(result)
);



}
catch(error){

console.error(error);

alert(
error instanceof Error
? error.message
: "Could not create story"
);

}

finally{

setLoading(false);

}

}



return (

<main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">

<Navbar/>


<section className="
max-w-3xl
mx-auto
p-8
">


<h1 className="
text-4xl
font-bold
text-purple-700
text-center
">

Create Your Magical Story

</h1>



<div className="
mt-8
bg-white
rounded-3xl
shadow-lg
p-8
space-y-5
">


<input

className="
w-full
border
rounded-xl
p-3
"

placeholder="Child Name"

value={form.childName}

onChange={
(e)=>
update(
"childName",
e.target.value
)
}

/>



<input

className="
w-full
border
rounded-xl
p-3
"

type="number"

placeholder="Age"

value={form.age}

onChange={
(e)=>
update(
"age",
Number(e.target.value)
)
}

/>



<select

className="
w-full
border
rounded-xl
p-3
"

value={form.theme}

onChange={
(e)=>
update(
"theme",
e.target.value
)
}

>

{
themes.map(theme=>(

<option
key={theme}
>

{theme}

</option>

))
}


</select>




<input

className="
w-full
border
rounded-xl
p-3
"

placeholder="Favorite Color"

value={form.favoriteColor}

onChange={
(e)=>
update(
"favoriteColor",
e.target.value
)
}

/>




<input

className="
w-full
border
rounded-xl
p-3
"

placeholder="Best Friend Name"

value={form.bestFriend}

onChange={
(e)=>
update(
"bestFriend",
e.target.value
)
}

/>




<textarea

className="
w-full
border
rounded-xl
p-3
"

placeholder="Moral of the story"

value={form.moral}

onChange={
(e)=>
update(
"moral",
e.target.value
)
}

/>



<button

onClick={generate}

disabled={loading}

className="
w-full
bg-purple-600
text-white
rounded-xl
py-4
font-bold
hover:bg-purple-700
"

>

{

loading
?
"Creating Magic..."
:
"Generate Story"

}


</button>



</div>




{
story && (

<StoryViewer
story={story}
/>

)
}



</section>


</main>

)

}