import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgApexchartsModule } from "ng-apexcharts";
import { GraficoPatrimonioComponent } from "./grafico-patrimonio/grafico-patrimonio.component";
import { PatrimonioComponent } from "./patrimonio.component";

@NgModule({
    imports: [
        CommonModule,
        NgApexchartsModule,
        BrowserModule,
    ],
    declarations: [
        PatrimonioComponent,
        GraficoPatrimonioComponent
    ],
    exports: [
        PatrimonioComponent
    ]
})
export class PatrimonioModule {

}