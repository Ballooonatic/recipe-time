export interface Recipe {
    uuid: String;
    title: String;
    description: String;
    images: {
        full: String;
        medium: String;
        small: String;
    }
    servings: Number;
    prepTime: Number;
    cookTime: Number;
    postDate: Date;
    editDate: Date;
    ingredients: Ingredient[];
    directions: Direction[];
}

export interface Ingredient {
    uuid: String;
    amount: Number;
    measurement: String;
    name: String;
}

export interface Direction {
    instructions: String;
    optional: Boolean;
}