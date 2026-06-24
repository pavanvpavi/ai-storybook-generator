"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";


export default function Navbar(){

return (

<nav className="
w-full
flex
items-center
justify-between
px-6
py-4
bg-white/80
backdrop-blur
shadow-sm
">

<Link
href="/"
className="
flex
items-center
gap-2
font-bold
text-xl
text-purple-600
">

<BookOpen/>

StorySpark

</Link>


<div className="
flex
gap-5
text-gray-700
">

<Link href="/">
Home
</Link>

<Link href="/generate">
Create Story
</Link>

<Link href="/stories">
Saved Stories
</Link>


</div>


</nav>

)

}