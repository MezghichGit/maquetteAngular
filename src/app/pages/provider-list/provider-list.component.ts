import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  providers: any;
  constructor(private service: ProviderService,private router: Router) { }


  ngOnInit(): void {
    this.refreshListProviders();
  }

  refreshListProviders() {
    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }


  updateProvider(myObj) {
    this.router.navigate(['providerEdit' + '/' + myObj['id']]);
  }

  deleteProvider(myObj) {
    //console.log(this.provider);
    this.service.deleteProvider(myObj).subscribe(response => {
      console.log(response);
      this.refreshListProviders();
    })
  }

}
