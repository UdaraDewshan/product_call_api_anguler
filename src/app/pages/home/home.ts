import { Component } from '@angular/core';
import { HomeBody } from "../../components/home-body/home-body";
import { NavBar } from "../../components/nav-bar/nav-bar";

@Component({
  selector: 'app-home',
  imports: [HomeBody, NavBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
