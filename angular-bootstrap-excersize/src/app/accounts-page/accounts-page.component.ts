import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.css"]
})
export class Link1Component implements OnInit {
  public title: String = "Hello";
  public isClicked: Boolean = false;

  constructor() {}

  ngOnInit() {}

  showAlert() {
    this.isClicked = true;
  }
}
