var Employe = /** @class */ (function () {
    function Employe() {
        this.empno = 101;
        this.ename = "abc";
        this.sal = 20000;
        this.attendance = 18;
    }
    //  constructor(empno: number, ename: string, sal : number, attendance: any){
    //     this.empno = empno;
    //     this.ename = ename;
    //     this.sal = sal;
    //     this.attendance = attendance;
    //  }
    Employe.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
        console.log(typeof this.attendance === "number");
    };
    return Employe;
}());
var emp = new Employe();
var emp1 = new Employe();
emp1.empno = 102;
var emp2 = new Employe();
emp2.empno = 103;
emp.print();
var emparray = [emp, emp1, emp2];
for (var index = 0; index < emparray.length; index++) {
    var element = emparray[index];
    element.print();
}
var emparray2 = [];
console.log(typeof (emparray2));
emparray2[0] = emp;
emparray2.push(emp);
emparray2.push(emp1);
emparray2.push(emp2);
for (var index = 0; index < emparray2.length; index++) {
    var element = emparray2[index];
    element.print();
}
