import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent implements OnInit {

  provider: any;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  constructor(private service: ProviderService, private router: Router) { }

  ngOnInit(): void {
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


  createProvider(myform) {




    const provider = new FormData();
    provider.append('imageFile', this.selectedFile, this.selectedFile.name);
    provider.append('imageName',this.selectedFile.name);
    provider.append('name', myform.value.providerName);
    provider.append('email', myform.value.providerEmail);
    provider.append('address', myform.value.providerAdress);

    this.service.createProvider(provider).subscribe(
      (response) =>{
        console.log(response);
        this.router.navigate(['providerList']);
      }
    );

  }


}
