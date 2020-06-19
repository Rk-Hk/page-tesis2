import { Component, OnInit } from "@angular/core";
import { otherGroups } from "./data";
@Component({
  selector: "app-detail-silabo",
  templateUrl: "./detail-silabo.component.html",
  styleUrls: ["./detail-silabo.component.css"],
})
export class DetailSilaboComponent implements OnInit {
  dataOtherGroups = null;
  constructor() {
    this.dataOtherGroups = otherGroups;
  }

  ngOnInit() {}
}
