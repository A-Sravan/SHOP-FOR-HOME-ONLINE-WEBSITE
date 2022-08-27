import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/common/user';
import { Product } from 'src/app/common/product';
// import { Component, ViewChild } from '@angular/core';  
import { CSVRecord } from './CSVModel'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {


  usersData: any = {};
  singleUserGet = new User();
  users: any[];
  num: number = 0;
  num1: number = 0;
  allProduct: Product[] = [];
  count: number = 1;
  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "username": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required)
  });
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.makeRequest();
    this.onProductGet();
  }

  makeRequest() {
    this.http.get('http://localhost:8081/api/users').subscribe({
      next: data => {
        this.usersData = data;
        console.log(data);
        this.saveUsersData();
      },
      error: error => {
        console.log('There was an error!', error);
      }
    })
  }

  saveUsersData() {
    this.users = this.usersData._embedded.users;
    console.log(this.usersData._embedded.users);
  }



  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form.value);
    this.http.post('http://localhost:8081/user/', this.form.value).subscribe({
      next: data => {
        console.log(data);
        console.log("registered successfully!")
        alert("registered successfully!");
      },
      error: error => {
        console.log('There was an error!', error);
      }
    })
  }
  onClickget(result) {
    console.log("You have entered : " + result.username);
    this.http.get<User>(`http://localhost:8081/user/${result.username}`).subscribe({
      next: data => {
        this.singleUserGet = data;
        console.log(data);
      },
      error: error => {
        console.log('There was an error!', error);
      }
    })
  }
  onAddCoupons(result) {
    console.log(result.username);
    this.http.post('http://localhost:8081/discountCoupons/', { coupons: result.username }).subscribe({
      next: data => {
        console.log(data);
        console.log("coupon added succesfully")
        alert("coupon added succesfully");
      },
      error: error => {
        console.log('There was an error!', error);
      }
    })
  }

  onProductGet() {
    this.http.get<Product[]>(`http://localhost:8081/products`).subscribe({
      next: data => {
        this.allProduct = data;
        console.log(data);
        console.log(this.allProduct[0])
      },
      error: error => {
        console.log('There was an error!', error);
      }
    })
  }


  public records: any[] = [];  
  @ViewChild('csvReader') csvReader: any;  
  
  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.id = curruntRecord[0].trim();  
        csvRecord.firstName = curruntRecord[1].trim();  
        csvRecord.lastName = curruntRecord[2].trim();  
        csvRecord.age = curruntRecord[3].trim();  
        csvRecord.position = curruntRecord[4].trim();  
        csvRecord.mobile = curruntRecord[5].trim();  
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  
} 



