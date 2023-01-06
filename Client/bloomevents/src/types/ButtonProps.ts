export interface ButtonProps {
    func: (e:Event) => number;
    logMessage: (message: string) => void;

    // 👇️ turn off type checking
    doSomething: (params: any) => any;
}