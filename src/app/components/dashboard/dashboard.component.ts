import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
  ) { }

  isSmedDashboard = false
  isETerminDashboard = true

  ngOnInit(): void {
    /**
     * needs to check url to check which dashboard is called
     */
  }
}