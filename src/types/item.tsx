export interface ItemRecord {
    id: string;
    name: string;
    children?: ItemRecord[];
}

export interface ItemName {
    name: string;
}