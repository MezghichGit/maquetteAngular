import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-edit',
  templateUrl: './provider-edit.component.html',
  styleUrls: ['./provider-edit.component.css']
})
export class ProviderEditComponent implements OnInit {

  public id;
  private providerToUpdate;
  public name;
  public email;
  public adress;
  public nomImage;
  selectedFile: File;
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

    this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      response => {
        //console.log(response);
        this.name = response["name"];
        this.email = response["email"];
        this.adress = response["address"];
        this.nomImage = response["nomImage"];
      }
    );
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.adress,
      'id': this.id
    }


    const provider = new FormData();
    provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    provider.append('imageName',this.selectedFile.name);
    provider.append('name', this.name);
    provider.append('email', this.email);
    provider.append('address', this.adress);
    provider.append('id', this.id);


    //this.service.updateProvider(this.providerToUpdate).subscribe(
      this.service.updateProvider(provider,this.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['providerList']);
      }
    );

  }

}
