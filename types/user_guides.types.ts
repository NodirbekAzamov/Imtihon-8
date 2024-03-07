import { ReactNode } from "react";
import { IGuides } from "./guides.types";

export interface IUserGuides {
    guide_id: string;
    user_ids: ReactNode
}
export interface IUserGuidesId {
    id: FormDataEntryValue | null
}

