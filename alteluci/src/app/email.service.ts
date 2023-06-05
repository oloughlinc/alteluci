import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  private url: string = "http://mailthis.to/craig.oloughlin@hotmail.com";

  constructor(private http: HttpClient) { }

  SendEmail(input: any) {
    return this.http.post(this.url, input)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError(() => { new Error("Uh Oh: " + error)});
        })
      )
  }
}
