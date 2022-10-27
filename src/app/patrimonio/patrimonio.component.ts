import { Component, OnInit } from "@angular/core";
import { SelectMultipleControlValueAccessor } from "@angular/forms";
import { Consolidado } from "./models/consolidado.model";
import { Panorama } from "./models/panorama.model";
import { Posicao } from "./models/posicao.model";
import { PatrimonioService } from "./patrimonio.service";

@Component({
    selector: 'patrimonio',
    templateUrl: './patrimonio.component.html',
    styleUrls : [ './patrimonio.component.css' ]
})
export class PatrimonioComponent implements OnInit{

    private posicoes: Posicao[];
    public RVseries: number[];
    public RVlabels: string[];
    public consolidado: Consolidado;
    public panorama: Panorama;

    public RVTiposSeries: number[];
    public RVTiposLabels: string[];
    public AcoesTiposSeries: number[];
    public AcoesTiposLabels: string[];
    public FIIsTiposSeries: number[];
    public FIIsTiposLabels: string[];

    constructor(private patrimonioService: PatrimonioService) { 
        this.posicoes = [];
        this.RVseries = [];
        this.RVlabels = []
    }

    ngOnInit(){
        this.loadPatrimonioService();
    }

    loadPatrimonioService(){

        this.patrimonioService.getPosicaoAcionaria()
        .subscribe((data: Posicao[])=>{ 
            this.posicoes = data;
            this.RVseries = this.posicoes.map(x=>x.valor);
            this.RVlabels = this.posicoes.map(x=>x.papel);
        });

        this.patrimonioService.getConsolidadoValores()
            .subscribe((data: Consolidado) => this.consolidado = data);

        this.patrimonioService.getPanoramaCarteria()
            .subscribe((data: Panorama) => {
                this.panorama = data;
                this.RVTiposLabels = this.panorama.rendaVariavel.map(x=>x.tipo);
                this.RVTiposSeries = this.panorama.rendaVariavel.map(x=>x.valor);
                this.AcoesTiposLabels = this.panorama.Acoes.map(x=>x.tipo);
                this.AcoesTiposSeries = this.panorama.Acoes.map(x=>x.valor);
                this.FIIsTiposLabels = this.panorama.FIIs.map(x=>x.tipo);
                this.FIIsTiposSeries = this.panorama.FIIs.map(x=>x.valor);
            });
    }
}