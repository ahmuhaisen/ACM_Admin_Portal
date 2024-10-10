import { Type } from "@angular/core";

export interface Widget {
    id: number;
    label: string;
    icon: string;
    content: Type<unknown>;
    backgroundColor?: string;
    color?: string;
}