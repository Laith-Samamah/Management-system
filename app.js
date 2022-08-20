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
            case "Mid-senior":
                return Math.round(Math.random()*500 +1000);
                break;
            case "senior":
                return Math.round(Math.random()*500 +1500);
                break;
        }
    }


}
let allEmployees = [];


let form = document.getElementById("form1")

function render (event) {
event.preventDefault();
let id = event.target.id.value
let fname = event.target.fname.value
let dep = event.target.dep.value
let lvl = event.target.lvl.value
let mg = event.target.mg.value

const newEmployee = new Employee (id,fname,dep,lvl,mg);
allEmployees.push(newEmployee);
saveToLocal()
print( newEmployee );

document.getElementById("form1").reset();
}

function print (emp){
    
    document.querySelector("#main")
    
    let card = document.createElement("div")
    main.appendChild(card)
    
    
    let image= document.createElement('img')
    card.appendChild(image)
    image.setAttribute('src', emp.image )
    
    let p1= document.createElement("p")
    card.appendChild(p1)
    p1.textContent=(`Name: ${emp.fullName} | Id: ${emp.id}`)
    
    let p2= document.createElement("p")
    card.appendChild(p2)
    p2.textContent=(`Department: ${emp.Deparment} | Level: ${emp.Level}`)
    
    let p3= document.createElement("p")
    card.appendChild(p3)
    p3.textContent=(`Salary: ${emp.salary}`)
}


function saveToLocal(){
    let stringArr= JSON.stringify(allEmployees)
    localStorage.setItem('empInfo', stringArr)

}

function getFromLocal(){
    let jArr = localStorage.getItem('empInfo')
    let objArr= JSON.parse(jArr)
    allEmployees = objArr;
    objArr.forEach(element => {
        print(element)
    });

}
getFromLocal()

form.addEventListener('submit',render)




// for( let i=0;i<allEmployees.length;i++){
//     console.log(allEmployees[i].print());
// }


// // *****************************************
// let main = document.querySelector("main")

// const eTable = document.createElement('table');
// eTable.setAttribute("class" , "emtable")
// main.appendChild(eTable)

// const tHeader = document.createElement('thead');
// eTable.appendChild(tHeader);

// const firstData = document.createElement("th");
// tHeader.appendChild(firstData);
// firstData.textContent="ID"

// const secondData = document.createElement("th");
// tHeader.appendChild(secondData);




// secondData.textContent="FullName"

// const thirdData = document.createElement("th");
// tHeader.appendChild(thirdData);
// thirdData.textContent="Department"

// const fourthData = document.createElement("th");
// tHeader.appendChild(fourthData);
// fourthData.textContent="Level"

// const fifthData = document.createElement("th");
// tHeader.appendChild(fifthData);
// fifthData.textContent="Salary"

// //   Table header ends here

// const arr = ['id','fullName','Deparment','Level','salary']

// for (let i = 0; i < allEmployees.length ; i++) {
    
//     const employeeRow = document.createElement('tr');
//     eTable.appendChild(employeeRow);

//     for (let c = 0; c < arr.length; c++) {
//         const cell = document.createElement('td')
//         employeeRow.appendChild(cell)
//         cell.textContent= allEmployees[i][arr[c]]
//     }

// }
