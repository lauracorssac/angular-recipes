export interface RecipeClass {
  id: number;
  name: string;
  imageURL: string;
  descriptions: RecipeDescription[];
  nationalities: string[];
}
export interface RecipeDescription {
  title: string;
  description: string;
}
