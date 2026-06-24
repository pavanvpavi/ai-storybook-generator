"use client";

import {
useEffect,
useState
} from "react";


export default function AIImage(
{
prompt
}:{
prompt:string
}){


const [image,setImage]=useState("");

const [loading,setLoading]=useState(true);



useEffect(()=>{

async function load(){

const res =
await fetch(
"/api/generate-image",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:
JSON.stringify({
prompt
})
}
);


const data =
await res.json();


setImage(
data.image
);

setLoading(false);

}


load();


},[prompt]);



if(loading){

return (
<div>
Generating illustration...
</div>
)

}



return (

<img

src={image}

alt="AI illustration"

className="
rounded-xl
w-full
"
/>

)

}