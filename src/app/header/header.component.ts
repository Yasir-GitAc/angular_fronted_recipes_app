import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownDirective } from "../shared/dropdown.directive";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule, DropdownDirective, RouterModule],
    templateUrl: "./header.component.html"
})
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();

    onselect(feature: string){
        this.featureSelected.emit(feature)
    }
}