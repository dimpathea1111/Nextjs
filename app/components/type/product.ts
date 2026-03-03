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

export type ProductReques={
    title:string;
    price:number;
    description:string;
    categoryId:number;
    
}