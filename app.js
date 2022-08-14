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



