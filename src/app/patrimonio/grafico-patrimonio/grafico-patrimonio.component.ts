import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import * as ApexCharts from 'apexcharts';
import { from } from "rxjs";

import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
    series: ApexNonAxisChartSeries | any;
    chart: ApexChart | any;
    responsive: ApexResponsive[] | any;
    labels: any[] | any;
}

@Component({
    selector: 'grafico-patrimonio',
    templateUrl: './grafico-patrimonio.component.html',
    styleUrls: ['../patrimonio.component.css'],
})
export class GraficoPatrimonioComponent implements OnInit {
    
    public chartOptions: Partial<ChartOptions>;

    @ViewChild("chart") chart: ChartComponent
    @Input() series: number[] = [];
    @Input() labels: string[] = [];
    @Input() title: string = '<title>';
    @Input("chart-width") chartWidth: string = "580";

    constructor() { }

    ngOnInit(): void {
        this.iniciarGrafico();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.iniciarGrafico();
    }

    iniciarGrafico(): void {
        this.chartOptions = {
            series: this.series,
            chart: {
                width: this.chartWidth,
                type: "pie"
            },
            labels: this.labels,
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        };
    }

}