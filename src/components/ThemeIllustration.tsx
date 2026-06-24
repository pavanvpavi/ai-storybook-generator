"use client";

import AIImage from "./AIImage";


interface Props {

theme:string;

text:string;

page:number;

}


export default function ThemeIllustration({
theme,
text,
page
}:Props){


return (

<AIImage

prompt={`
Create a children's storybook illustration.

Theme:
${theme}

Story page:
${page}

Scene:
${text}

Style:
cute cartoon,
colorful,
friendly characters,
storybook art,
for children

`}

/>

);


}