export interface IProduct {
    Name: string;
    CategoryId: number;
    Price?: number;
    Image?: string;
    Id: number;
}

export interface ICategory {
    Name: string;
    Id: number;
}
