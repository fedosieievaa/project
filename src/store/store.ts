import { makeAutoObservable } from 'mobx';

class TestStore {
    tasks: { task: string; completed: boolean }[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(task: string) {
        this.tasks.push({
            task: task,
            completed: false,
        });
    }
}

export const store = new TestStore();
