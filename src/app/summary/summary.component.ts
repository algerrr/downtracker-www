import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '.././database.service';
import { Model } from ".././model";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  title = "Alger's Tournament Down Tracker";
  summaryName = 'Wildhorse Summer 2018';
  tournamentDowns = -1;
  populatedCountries: Model[] = [];
  largestCountries: Model[] = [];
  gdpCountries: Model[] = [];
  summaryData: Model[] = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit() {
    this.setPopulatedCountries();
    this.setLargestCountries();
    this.setGDPCountries();
    this.setSummaryData();
    this.setTournamentDowns();
  }

  setTournamentDowns(): void{
    this.tournamentDowns = this.dbService.getModel("United States").gdp;
  }

  setSummaryData(): void{
    this.summaryData = this.dbService.getCountries();
  }

  setPopulatedCountries(): void {
    this.populatedCountries = this.dbService.getPopulatedCountries();
  }

  setLargestCountries(): void {
    this.largestCountries = this.dbService.getLargestCountries();
  }

  setGDPCountries(): void {
    this.gdpCountries = this.dbService.getGDPCountries();
  }
}
