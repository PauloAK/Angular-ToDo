export interface Task {
    text : string;
    completed : boolean;
    editMode ?: boolean;
    created_at : Date;
    updated_at ?: Date;
}
