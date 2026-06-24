import { v4 as uuid } from "uuid";
import {
  Story,
  StoryInput
} from "@/types/story";


const themeContent = {

Space:{
places:[
"the Galaxy Kingdom",
"the Moon Valley",
"the Star Village"
],
objects:[
"rocket",
"space ship",
"magic telescope"
]
},

Jungle:{
places:[
"the Emerald Jungle",
"the Secret Forest",
"the Animal Kingdom"
],
objects:[
"golden tree",
"friendly animals",
"hidden waterfall"
]
},

Ocean:{
places:[
"the Blue Ocean",
"the Coral Kingdom",
"the Underwater World"
],
objects:[
"magic shell",
"friendly whale",
"colorful fish"
]
},

Magic:{
places:[
"the Crystal Castle",
"the Enchanted Forest",
"the Wizard Valley"
],
objects:[
"magic wand",
"flying dragon",
"mystery book"
]
},

Dinosaurs:{
places:[
"the Dinosaur Valley",
"the Ancient Forest",
"the Lost Jurassic Land"
],
objects:[
"friendly dinosaur",
"giant eggs",
"fossil treasure"
]
}

};



export function generateLocalStory(
input: StoryInput
): Story {


const content =
themeContent[input.theme];


const place =
content.places[
Math.floor(
Math.random()*content.places.length
)
];


const object =
content.objects[
Math.floor(
Math.random()*content.objects.length
)
];



const pages = [

`${input.childName} woke up with a dream to explore new worlds. With ${input.bestFriend}, a wonderful adventure began in ${place}.`,

`${input.childName} discovered a magical ${object}. The amazing discovery showed that curiosity can lead to incredible experiences.`,

`During the journey, ${input.childName} helped new friends and learned that kindness makes every adventure brighter.`,

`${input.childName} and ${input.bestFriend} faced a challenge together. They worked as a team and found a clever solution.`,

`At the end of the adventure, ${input.childName} returned home happily knowing that ${input.moral}.`

];


return {

id:uuid(),

title:
`${input.childName} and the ${input.theme} Adventure`,

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
`${input.childName}'s magical ${input.theme} story`,

pages:
pages.map(
(text,index)=>({

pageNumber:index+1,

text,

theme:input.theme

})
),

createdAt:
new Date().toISOString()

};

}