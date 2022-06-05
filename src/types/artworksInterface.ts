export interface IArtworks {
  id: string;
  title: string;
  medium: string;
  height: string;
  width: string;
  style: string;
  description: string;
  image: string;
  purchaseprice: string;
  monthlyrateprice: string;
  author: Array<{ firstname: string; surname: string }>;
}
