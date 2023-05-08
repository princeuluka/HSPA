import { Component, Input } from "@angular/core";

@Component({
  selector : 'app-property-card',
  // template : ``,
  templateUrl : "property-card.component.html",
  //styles : ['']
  styleUrls : ["property-card.component.css"]

})
export class PropertyCardCompenent{
  @Input () property : any
}
