export type StoryTheme =
  | "Space"
  | "Jungle"
  | "Ocean"
  | "Magic"
  | "Dinosaurs";


export interface StoryPage {
  pageNumber: number;
  text: string;
  theme: StoryTheme;
  image?: string;
}


export interface Story {
  id: string;
  title: string;
  childName: string;
  age: number;
  theme: StoryTheme;
  favoriteColor: string;
  bestFriend: string;
  moral: string;
  cover: string;
  pages: StoryPage[];
  createdAt: string;
}


export interface StoryInput {
  childName: string;
  age: number;
  theme: StoryTheme;
  favoriteColor: string;
  bestFriend: string;
  moral: string;
}