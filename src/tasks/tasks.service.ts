import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];
    
    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id : string) : Task {
        const found = this.tasks.find(task => task.id === id);
        if (!found) {
            throw new Error('Task not found');
        }
        return found;
    }

    createTask(title:string,description:string): Task {
        const task : Task = {
            id: uuidv4(),
            title,
            description,
        };
        this.tasks.push(task);
        return task;
    }




}
