import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm,FormGroup,FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';





declare var M:any
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  selectedCourse:any = {};
  employeeData:any;

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refresh();



  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = {
        _id:"",
        name:"",
        position:"",
        office:"",
        salary:null
      }
    }

  }


  saveCourse(Course){
    if(Course._id){
      console.log(Course._id);
      this.employeeService.updateEmployee(Course).subscribe(data =>{
        console.log(data);
      })
    }else{
    this.employeeService.postEmployee(Course).subscribe(data =>{
      console.log(data);
      M.toast({html: 'Add Succefully',classes:"rounded"})
    })
    }

  }
  refresh(){
    this.employeeService.getEmployeedata().subscribe(data =>{
      console.log("my Data == "+JSON.stringify(data));
      this.employeeData = data;


    })
  }
  edit(id){
    console.log("Clicked"+id);
    this.employeeService.updateEmployee(id).subscribe(data =>{
      console.log(data);
    })

  }

  selectCourse(courses){
    this.selectedCourse = courses;
    console.log(courses)
    console.log(courses.id);

  }

  deleteCourse(id){

    this.employeeService.deleteEmployee(id).subscribe(data =>{
      this.ngOnInit();
      console.log("Deleted");

    })

  }






}


