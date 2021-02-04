import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() {  };
    searchText: string="";
    employee:any[]=[];
    department:string[]=[];
    
   
  
  ngOnInit(): void {
    this.employee = [

          { 
           name: "Employee One",
           age: 40,
           email: "one@gmail.com",
           department: ["Computer", "Physics"],
          },
       
  
          { 
           name: "Employee Two",
           age: 10,
           email: "Two@gmail.com",
           department: ["Computer"],
          },
       
          {
           name: "Employee Three",
           age: 10,
           email: "Three@gmail.com",
           department: ["Physics", "Chemistry"],
         },
  
         {
           name: "Employee Four",
           age: 60,
           email: "Four@gmail.com",
           department: ["Chemistry", "Physics"],
         },
       
         {
           name: "Employee Five",
           age: 70,
           email: "Five@gmail.com",
           department: ["Computer", "Physics", "Chemistry"],
         },
       
         {
           name: "Employee Six",
           age: 70,
           email: "Six@gmail.com",
           department: ["Computer", "Physics"],
         },
       
         { 
           name: "Employee Seven",
           age: 10,
           email: "Seven@gmail.com",
           department: ["Computer"],
          },
          { 
            name: "Employee Seven",
            age: 10,
            email: "Seven@gmail.com",
            department: ["Electronics"],
           },
         ];
       

         let deps = this.employee.map((x) => x.department);
          //console.log('All Deps - ', deps);
     
         for (const da of deps) {
           for (const d of da) {
             if (this.department.indexOf(d) === -1) {
              // console.log('Unique Dep - ', d);
               this.department.push(d);
             }
           }
         }

         
        
       }

    

       refresh(): void {
        window.location.reload();
    }
  
    

  
    }