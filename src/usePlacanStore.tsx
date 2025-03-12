import { create } from 'zustand';
import { Data, Filters } from './type';

const defaultFilter = {
    id: false,
    job: true,
    hours: true,
    schoolTier: true,
    school: true,
    years: true,
    pay: true
}

type shownData = {
    id: boolean,
    job: boolean,
    hours: boolean,
    schoolTier: boolean,
    school: boolean,
    years: boolean,
    pay: boolean,
}

type State = {
    backup: Data[],
    data: Data[],
    dropDowns: {
        school: boolean,
        schoolTier: boolean
    },
    filter: Filters | null,
    formSubmitedTimes: number,
    loc: string,
    shownData: shownData,
}

type Action = {
    setBackup(newState: Data[]): void,
    setData(newState: Data[]): void,
    setDropDownsOpen(newState: {
        school: boolean,
        schoolTier: boolean
    }): void,
    setFilter(newState: Filters | null): void,
    updateFormSubmitedTimes(newState: number): void,
    setLoc(newState: string): void,
    setShownData(newState: shownData): void,
}

const usePlacanStore = create<State & Action>(set => ({

    backup: [],
    setBackup: (newState) => set(() => ({
        backup: newState
    })),

    data: [],
    setData: (newState) => set(() => ({
        data: newState
    })),

    dropDowns: {
        school: false,
        schoolTier: false
    },
    setDropDownsOpen: (newState) => set(() => ({
        dropDowns: newState
    })),

    filter: null,
    setFilter: (newState) => set(() => ({
        filter: newState
    })),

    formSubmitedTimes: 0,
    updateFormSubmitedTimes: (newState: number) => set(() => ({
        formSubmitedTimes: newState
    })),

    loc: "/",
    setLoc: (newState) => set(() => ({
        loc: newState
    })),

    shownData: defaultFilter,
    setShownData: (newState) => set(() => ({
        shownData: newState
    })),
}))

export default usePlacanStore;