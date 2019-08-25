import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SendFileService } from '../send-file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listas = [
    {id: 1, name: 'Casa'},
    {id: 2, name: 'Apartamento'},
    {id: 3, name: 'Condomínio'}
  ]
  fileList = [
    {name: 'C33cUtA1H.png'},
    {name: 'ZJx7aJtzVT.png'},
    
  ]
  formCad: FormGroup
  filesToUpload: Array<File> = [];
  
  constructor( private sendFileSrv: SendFileService ){
    this.formCad = new FormGroup({
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      lista: new FormControl(''),
      file: new FormControl('')
    })

    this.formCad.controls['lista'].setValue( this.listas[0].id )
  }

  ngOnInit() {
  }
 

  save(){
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log('files',files);
    formData.append('name', this.formCad.value.nome)
    formData.append('sobrenome', this.formCad.value.sobrenome)
    formData.append('lista', this.formCad.value.lista)
    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i]);
    }
    console.log('form data variable :   '+ formData.toString());
    this.sendFileSrv.sendForm(formData)
                    .subscribe( r => {
                      console.log(r);
                      
                    })
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
}

openFile( file: any ){
  console.log(file);
  
  this.sendFileSrv.openFile( file.name )
}


}
