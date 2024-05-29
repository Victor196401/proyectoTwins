import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient, private apiService: ApiService){

  }

  ngOnInit(): void {

    this.apiService.getPokemons().subscribe(
      (data: any) => {
        console.log(data);

      }, (error) => {
        console.error(error);

      }
    )

  }

  title = 'proyectoTwins';
}
