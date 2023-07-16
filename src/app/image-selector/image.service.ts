import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { UploadedImage } from './uploaded-image.model';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url='https://localhost:7247';
  constructor(private http: HttpClient) { }



  uploadImage(file: File, fileName: string, title: string): Observable<UploadedImage> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);

    return this.http.post<UploadedImage>(`${this.url}/api/images`, formData);
  }

  

}
