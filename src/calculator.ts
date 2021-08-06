export class Calculator{

    public static add(val:string, val2?:string):number{
        if (!val)
            return 0;
        else if(!val2)    
            return Number.parseInt(val);
        return Number.parseInt(val) + Number.parseInt(val2);
    }
}