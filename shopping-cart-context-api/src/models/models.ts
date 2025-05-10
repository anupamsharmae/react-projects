export interface Item {
   id: string;
   name: string;
   price: number;
   quantity: number;
}

export interface ItemList{
   items: Item[]
}

export interface ProductItem {
   id:string;
   image:string;
   title:string;
   price: number;
   description: string;
}