import { Component, OnInit, Input } from "@angular/core";
import { otherGroups } from "./data";
@Component({
  selector: "app-detail-silabo",
  templateUrl: "./detail-silabo.component.html",
  styleUrls: ["./detail-silabo.component.css"],
})
export class DetailSilaboComponent implements OnInit {
  @Input() semanas: any;
  @Input() groups: any;
  @Input() members: any;

  dataOtherGroups = null;
  constructor() {
    this.dataOtherGroups = otherGroups;
  }

  ngOnInit() {
    console.log("SEMANAs : ", this.semanas);
    
  }
}
