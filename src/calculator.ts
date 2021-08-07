export class Calculator{

    public static add(val:string):number{
        let result = 0;
        let numbers:string[];
        let delimiter = this.getDelimiter(val);
        let negativeNumber:string[] = Array<string>();
        if(val.length == 0)
            return result;
        
        numbers = delimiter[0].split(delimiter[1]);
        for(let strNum of numbers){
            let num = Number.parseInt(strNum);
            if(num < 0)
                negativeNumber.push(strNum);
            else if(num < 1000)
                result += num;
        }

        if(negativeNumber.length > 0){
            throw new TypeError("negatives not allowed: " + negativeNumber);
        }
        return result;
    }

    private static getDelimiter(val:string):string[]{
        if (val.startsWith("//")){
            return [val.substr(4), val[2]];
        }
        return [val,","];
    }
}