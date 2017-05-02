import {Component, ViewChild} from '@angular/core';
import {SharedServiceService} from "./shared-service.service";
import {Observable} from "rxjs";
import {RequestOptions, Headers} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SharedServiceService]
})
export class AppComponent {
  title = 'app works!';
  attachmentFile1: File ;
  attachmentFile2: File ;

  @ViewChild("fileInput") fileInput;

  constructor(private shared_service:SharedServiceService ){}

  onSubmit1(value){

    console.log('Inside onSubmit1 :: AppComponent '+JSON.stringify(value));
    // this.shared_service.share(value);
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      this.attachmentFile1 = fi.files[0];
    }

    let file: File = this.attachmentFile1;
    // let file: File = value.file;
      let formData:FormData = new FormData();
      formData.append('uploadfiles', file, file.name);
      formData.append('randomText',value.randomText);
      let headers = new Headers();
      headers.append('enctype', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      // sendFormData

      this.shared_service.sendFormData(formData,options)
        .subscribe(
          response => {
            console.log('RESPONSE : '+response);

          },
          error => {
            console.log("ERROR :: register :: StudentRegisterComponent");
            console.log(error);

          }
        );



  }


  onSubmit2(value){

    console.log('Inside onSubmit2 :: AppComponent ');
    // this.shared_service.share(value);

    let file: File = this.attachmentFile2;
    let formData:FormData = new FormData();
    formData.append('uploadfiles', file, file.name);
    formData.append('randomText',value.randomText);
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // sendFormData

    this.shared_service.sendFormData(formData,options)
      .subscribe(
        response => {
          console.log('RESPONSE : '+response);

        },
        error => {
          console.log("ERROR :: register :: StudentRegisterComponent");
          console.log(error);

        }
      );



  }



  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      this.attachmentFile2= fileList[0];

    }
  }




}
