export interface Task {
    text : string;
    completed : boolean;
    created_at : Date;
    updated_at ?: Date;
}