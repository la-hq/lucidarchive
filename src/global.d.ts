/// <reference types="svelte" />

export interface Album {
    readonly uid: string;
    readonly covers: Covers;
    readonly date: Date;

    readonly genre: string;
    readonly subgenre: string;

    readonly title: string;
    readonly pseudonym: string;
    readonly primaryPseudonym: string;
    readonly artistName: string;
    readonly artistReddit: string;
    readonly artistLocation: string;

    readonly label: string;
    readonly notes: string;
    readonly translation: string;
    readonly description: string;

    readonly stream: string;
    readonly streamType: string;

    readonly citations: string[];
}

export type Covers = {
    readonly [`${number}`]: string,
    readonly full: string,
};
