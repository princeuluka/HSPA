import { Component } from "@angular/core";

@Component({
  selector : 'app-property-card',
  // template : ``,
  templateUrl : "property-card.component.html",
  //styles : ['']
  styleUrls : ["property-card.component.css"]

})
export class PropertyCardCompenent{
Property: any = {
  "Id":1,
  "Name": "Uluka Prince",
  "Type":"House",
  "Price": 12000,
}
}
