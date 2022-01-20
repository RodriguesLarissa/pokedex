import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  id: number;
  routerParam: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRouterParam();
    console.log(this.id);
  }

  ngOnDestroy(): void {
    this.routerParam.unsubscribe();
  }

  getRouterParam() {
    this.routerParam = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    });
  }
}
