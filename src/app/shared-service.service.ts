import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";



@Injectable()
export class SharedServiceService {


  constructor(private _http: Http) { }

  url="/api/";


//lll
  sendFormData(formData,options){

    return this._http.post(this.url+"fileUpload2",formData,options)
      .map(response => {
        { return response };
      }).catch(error => Observable.throw(error.json()));


  }

//sendFormData sends data to a spring boot service.. Code snippet is given below
  //The methods signature is the important thing .. handleFileUpload2(@RequestParam("uploadfiles") MultipartFile[] multipartFiles,@RequestParam("randomText") String randomText)

//   @PostMapping(value = "/fileUpload2")
//   public void handleFileUpload2(@RequestParam("uploadfiles") MultipartFile[] multipartFiles,@RequestParam("randomText") String randomText) {
//
//   logger.info("Random Text : "+randomText);
//
//   if(multipartFiles.length==1){
//   logger.info("Array size ==1");
//
//   try {
//   for (MultipartFile uploadedFile : multipartFiles) {
//   logger.info("Uploaded file name : "+uploadedFile.getOriginalFilename());
//   File file = new File(uploadingdir + uploadedFile.getOriginalFilename());
//   uploadedFile.transferTo(file);
// }
// }catch (IOException e){
//   e.printStackTrace();
// }
//
//
// }else{
//   logger.error("Array size == "+multipartFiles.length);
//
// }
//
//
// }

}
