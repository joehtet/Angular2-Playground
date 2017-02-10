export class Cat {
    name: string;
    age: number;
    status: string = "Unchanged";

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    setStatus(status): void {
       this.status = status; 
    }

    getStatus(): string {
        return this.status;
    }
}
