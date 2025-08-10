type User = {
    id: number;
    name: string;
};

export function hello(user: User): void {
    console.log(`Hello, ${user.name}!`);
}