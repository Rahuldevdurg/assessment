import { Component, OnInit } from '@angular/core';
import { IEmployees } from '../model/employee.interface';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { };
    searchText: string="";

      employee = [

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
       ];
     
       ngOnInit(): void {
       }

       refresh(): void {
        window.location.reload();
    }
     
     }
     