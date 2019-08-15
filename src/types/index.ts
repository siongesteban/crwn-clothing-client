export interface Item {
  id: number;
  imageURL: string;
  name: string;
  price: number;
}

export type Section = Pick<Item, 'id' | 'imageURL'> & {
  linkURL?: string;
  size?: string;
  title: string;
};

export type Collection = Pick<Section, 'id' | 'title'> & {
  path: string;
  items: Item[];
};
