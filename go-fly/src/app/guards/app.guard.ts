import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { take, map } from "rxjs/operators";
import { FlightService } from "../services/flight.service";

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate {

    constructor(
        private filghtService: FlightService,
        private db: AngularFireDatabase
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {

        return new Promise((resolve) => {
            this.db.object('data').valueChanges()
                .subscribe((data: any) => {
                    this.filghtService.storeFlightData({ data: data });
                    resolve(true);
                }, (error) => {
                    console.log(error)
                    //dispatch error
                })
        })
    }

}