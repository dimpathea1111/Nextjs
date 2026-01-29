export type ProductRespone={
    id:number;
    title:string;
    slug:string;
    price:number;
    description:string;
    category:Category;
    image:string[];
}

export type Category={
    id:number;
    slug:string;
}