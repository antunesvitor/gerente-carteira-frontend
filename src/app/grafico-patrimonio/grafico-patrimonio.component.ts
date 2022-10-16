import { Component, ViewChild } from "@angular/core";
import * as ApexCharts from 'apexcharts';
import { from } from "rxjs";

import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
    series: ApexNonAxisChartSeries | any;
    chart: ApexChart| any;
    responsive: ApexResponsive[]| any;
    labels: any[]| any;
}

@Component({
    selector: 'grafico-patrimonio',
    templateUrl: './grafico-patrimonio.component.html',
    styleUrls: ['./grafico-patrimonio.component.css']
})
export class GraficoPatrimonioComponent {
    // @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(){
        this.chartOptions = {
            series: [
                7133.23,
                1725.00,
                7251.16,
                7166.36,
                1047.90,
                6446.25,
                6706.90,
                9311.52,
                9238.18,
                6658.47,
                6684.00,
                7080.72,
                6700.80,
                6999.52,
                7330.80,
                7090.20,
                7262.06
            ],
            chart: {
                width: 480,
                type: "pie"
            },
            labels: [
                "ABEV3",
                "CIEL3",
                "EGIE3",
                "FLRY",
                "ITSA4",
                "ITUB4",
                "LREN3",
                "MDIA3",
                "MGLU3",
                "MULT3",
                "PETR4",
                "PSSA3",
                "SAPR11",
                "SULA11",
                "TOTS3",
                "VIVT3",
                "WEGE3"
            ],
            responsive: [
                {
                    breakpoint: 680,
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