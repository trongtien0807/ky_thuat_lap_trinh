class Employee {
    constructor (id , fullName , baseSalary , productSalary , productQuantity) {
        this.id = id
        this.fullName = fullName
        this.baseSalary = baseSalary
        this.productSalary = productSalary
        this.productQuantity = productQuantity
    };
};

// Y1 + Y2:
let allEmployee = [];
let n;
n = Number(prompt("Nhập số lượng nhân viên cần quản lý: "));
for (i = 0 ; i < n ; i++) {
    const id = Number(prompt(`Nhập ID của nhân viên thứ ${i+1}: `));
    const fullName = prompt(`Nhập Fullname của nhân viên thứ ${i+1}: `);
    const baseSalary = Number(prompt(`Nhập Base Salary của nhân viên thứ ${i+1}: `));
    const productSalary = Number(prompt(`Nhập Product Salary của nhân viên thứ ${i+1}: `));
    const productQuantity = Number(prompt(`Nhập Product Quantity của nhân viên thứ ${i+1}: `));
    const employee = new Employee (id , fullName , baseSalary , productSalary , productQuantity);
    allEmployee.push(employee);
};
console.log ("Danh Sách Nhân Viên: " , allEmployee);

// Y3:
let listSalary = [];
function totalSalary () {
    let salary;
    for (i = 0 ; i < allEmployee.length ; i++) {
        if (allEmployee[i].productQuantity === 50) {
            salary = (allEmployee[i].baseSalary + (allEmployee[i].productSalary*allEmployee[i].productQuantity));
            console.log(`Lương nhân viên ${allEmployee[i].fullName}: ` , salary);
        };
        if (allEmployee[i].productQuantity < 50) {
            salary = ((allEmployee[i].baseSalary + (allEmployee[i].productSalary*allEmployee[i].productQuantity))*0.9);
            console.log(`Lương nhân viên ${allEmployee[i].fullName}: ` , salary);
        };
        if (allEmployee[i].productQuantity > 50) {
            salary = (allEmployee[i].baseSalary + (allEmployee[i].productSalary*allEmployee[i].productQuantity)) + ((allEmployee[i].productQuantity-50)*allEmployee[i].productSalary*0.1);
            console.log(`Lương nhân viên ${allEmployee[i].fullName}: ` , salary);
        };
        listSalary.push(salary);
    };
};
totalSalary();

// Y4:
function increaseBySalary(listSalary) {
    for(let i = 0 ; i < listSalary.length ; i++) {
        if(listSalary[i] > listSalary[i+1]) {
            let temp = listSalary[i];
            listSalary[i] = listSalary[i+1];
            listSalary[i+1] = temp;
        };
    };
    console.log("Danh sách nhân viên tăng dần theo tổng lương" , listSalary);
};
increaseBySalary(listSalary);

// Y5:
function maxBySalary(listSalary) {
    let max = listSalary[0];
    for (let i = 0 ; i < listSalary.length ; i++) {
        if (listSalary[i] > max) {
            max = listSalary[i]
        };
    };
    return max;
};
console.log("Nhân viên có tổng lương cao nhất là: " , maxBySalary(listSalary));

// Y6:
let editEmployee = [];
function editInfEmployee() {
    let idChange = Number(prompt("Nhập ID cần sửa: "));
    for(let i = 0 ; i < n ; i++) {
        if(allEmployee[i].id == idChange) {
            allEmployee[i].fullName = prompt("Nhập Fullname của nhân viên: ");
            allEmployee[i].baseSalary = Number(prompt("Nhập Base Salary của nhân viên: "));
            allEmployee[i].productSalary = Number(prompt("Nhập Product Salary của nhân viên: "));
            allEmployee[i].productQuantity = Number(prompt("Nhập Product Quantity của nhân viên: "));  
        };
    const edit = new Employee (allEmployee[i].id , allEmployee[i].fullName , allEmployee[i].baseSalary , allEmployee[i].productSalary  , allEmployee[i].productQuantity);
    editEmployee.push(edit);
    };
    console.log("Danh sách nhân viên sau khi sửa: " , editEmployee);
};
editInfEmployee();

// Y7:
function deleteEmployee() {
    let idDelete = Number(prompt("Nhập ID cần xoá: "));
    for(var i = 0 ; i < n ; i++) {
        if(allEmployee[i].id == idDelete) {
            for(let j = i ; j < n - 1 ; j++) {
                allEmployee[j] = allEmployee[j+1];
            };
            allEmployee.length--
            n-- ;
        };
    };
    console.log("Danh sách nhân viên sau khi xoá: " , allEmployee);
};
deleteEmployee();