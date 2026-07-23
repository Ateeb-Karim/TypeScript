let number: string | number = "1a";
//this is union and  we can get either string or number or both at the same time

let apiRequest: "pending" | "success" | "error" = "pending";
//thsi is called mode . which means we can assign only one of these values to apiRequest

let array = ["1", "2", "3", "4", "5"];

let index: string | undefined;

for (const element of array) {
    if(element === '4'){
        index = element;
        break;
    }
    index = undefined;
}

// this is also example of union and if we assign nothing to variable then its value maybe any 

let xyz: any;
// OR
let abc; // auto assign :any
