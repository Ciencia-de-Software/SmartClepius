import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-responsavel",
  templateUrl: "./responsavel.page.html",
  styleUrls: ["./responsavel.page.scss"],
})
export class ResponsavelPage implements OnInit {
  pacient = "Fulano";
  bed = "Cama 012";
  status = "Estável";

  constructor() {}

  ngOnInit() {}
}
