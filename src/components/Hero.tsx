import Link from "next/link";


export default function Hero(){


return (

<section
className="
min-h-[80vh]
flex
flex-col
items-center
justify-center
text-center
px-6
bg-gradient-to-br
from-purple-100
via-pink-100
to-blue-100
">


<h1
className="
text-5xl
font-extrabold
max-w-4xl
text-purple-700
">

Every Child Becomes The Hero
Of Their Own Story

</h1>


<p
className="
mt-6
text-lg
max-w-2xl
text-gray-700
">

Create magical personalized children's
storybook adventures using AI.

</p>


<Link
href="/generate"
className="
mt-8
px-8
py-4
rounded-full
bg-purple-600
text-white
font-bold
hover:bg-purple-700
transition
">

Create My Story

</Link>


</section>

)

}