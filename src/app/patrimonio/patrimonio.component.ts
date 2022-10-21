import { Component, OnInit } from "@angular/core";
import { SelectMultipleControlValueAccessor } from "@angular/forms";
import { Consolidado } from "./models/consolidado.model";
import { Posicao } from "./models/posicao.model";
import { PatrimonioService } from "./patrimonio.service";

@Component({
    selector: 'patrimonio',
    templateUrl: './patrimonio.component.html',
    styleUrls : [ './patrimonio.component.css' ]
})
export class PatrimonioComponent implements OnInit{

    private posicoes: Posicao[];
    public series: number[];
    public labels: string[];
    public consolidado: Consolidado;

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

        this.patrimonioService.getConsolidadoValores()
            .subscribe((data: Consolidado) => this.consolidado = data);
    }
}