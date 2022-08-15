// Math.random() * (max - min) + min

console.log("hello")

function Employee(Id,Name,Dep,Level,img) {
    this.id = Id;
    this.fullName = Name;
    this.Deparment = Dep;
    this.Level = Level;
    this.image = img;
    this.salary = calculate(Level);

    function calculate(sal){
        switch (sal) {
            case "Junior":
                return Math.round(Math.random()*500 +500);
                break;
            case "Mid-Senior":
                return Math.round(Math.random()*500 +1000);
                break;
            case "Senior":
                return Math.round(Math.random()*500 +1500);
                break;
        }
    }

    this.print =function(){
        return `I am ${this.fullName} my salary is ${this.salary} `;
    }
}
    const allEmployees = [
        new Employee(1000,"Ghazy Samer","administration","Senior"),
        new Employee(1001,"Lana Ali","finance","Senior"),
        new Employee(1002,"Tamara Ayoub","markiting","Senior"),
        new Employee(1003,"Safi Waleed","administration","Mid-Senior"),
        new Employee(1004,"Omar Zaid","develobment","Senior"),
        new Employee(1005,"Rana Saleh","develobment","Junior"),
        new Employee(1006,"Hadi Ahmad","finance","Mid-Senior"),

    ]


for( let i=0;i<allEmployees.length;i++){
    console.log(allEmployees[i].print());
}



// *****************************************
let main = document.querySelector("main")

const eTable = document.createElement('table');
eTable.setAttribute("class" , "emtable")
main.appendChild(eTable)

const tHeader = document.createElement('thead');
eTable.appendChild(tHeader);

const firstData = document.createElement("th");
tHeader.appendChild(firstData);
firstData.textContent="ID"

const secondData = document.createElement("th");
tHeader.appendChild(secondData);
secondData.textContent="FullName"

const thirdData = document.createElement("th");
tHeader.appendChild(thirdData);
thirdData.textContent="Department"

const fourthData = document.createElement("th");
tHeader.appendChild(fourthData);
fourthData.textContent="Level"

const fifthData = document.createElement("th");
tHeader.appendChild(fifthData);
fifthData.textContent="Salary"

//   Table header ends here

const arr = ['id','fullName','Deparment','Level','salary']

for (let i = 0; i < allEmployees.length ; i++) {
    
    const employeeRow = document.createElement('tr');
    eTable.appendChild(employeeRow);

    for (let c = 0; c < arr.length; c++) {
        const cell = document.createElement('td')
        employeeRow.appendChild(cell)
        cell.textContent= allEmployees[i][arr[c]]
    }

}
