import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownDirective } from "../shared/dropdown.directive";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule,DropdownDirective, RouterModule],
    templateUrl: "./header.component.html"
})
export class HeaderComponent{
    // @Output() featureSelected = new EventEmitter<string>();

    // onselect(feature: string){
    //     this.featureSelected.emit(feature)
    // }

    constructor(private dataStorageService: DataStorageService){}

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
}