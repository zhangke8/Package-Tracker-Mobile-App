export interface IItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  added: number;
}

export interface EditItem{
name: string;
price: number;
}