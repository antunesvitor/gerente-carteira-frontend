import { Component, OnInit } from "@angular/core";
import { SelectMultipleControlValueAccessor } from "@angular/forms";
import { Posicao } from "./models/posicao.model";
import { PatrimonioService } from "./patrimonio.service";

@Component({
    selector: 'patrimonio',
    templateUrl: './patrimonio.component.html'
})
export class PatrimonioComponent implements OnInit{

    private posicoes: Posicao[];
    public series: number[];
    public labels: string[];

    constructor(private patrimonioService: PatrimonioService) { 
        this.posicoes = [];
        this.series = [];
        this.labels = []
    }

    ngOnInit(){
        this.loadPatrimonioService();
    }

    loadPatrimonioService(){

        this.patrimonioService.getPosicaoAcionaria()
        .subscribe((data: Posicao[])=>{ 
            this.posicoes = data;
            this.series = this.posicoes.map(x=>x.valor);
            this.labels = this.posicoes.map(x=>x.papel);
        });
    }

    // getSeries() {
    //     let 
    //     console.log('series: ', series);
    //     return series;
    // }

    // getLabels(){
    //     let labels = this.posicoes.map(x=>x.papel);
    //     console.log('labels: ', labels);
    //     return labels;
    // }
}