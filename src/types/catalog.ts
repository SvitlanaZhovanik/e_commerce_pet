import { ObjectId } from 'mongoose';

export interface CatalogProps {
  _id: ObjectId;
  id: number;
  order: number;
  title: string;
  img: string;
  colSpan: string;
  tabletColSpan: string;
  mobileColSpan: string;
}
