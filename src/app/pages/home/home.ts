import { Component } from '@angular/core';
import { HomeBody } from "../../components/home-body/home-body";
import { NavBar } from "../../components/nav-bar/nav-bar";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [HomeBody, NavBar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
