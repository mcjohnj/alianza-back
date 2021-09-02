import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/Service/cliente.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  clients: any;

  constructor(
    public fb: FormBuilder,
    public clientesService: ClienteService,
    public clientForm: FormGroup,

  ) {

  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      sharedKey: ['', Validators.required],
      businessId: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      dataAdded: ['', Validators.required],
    });
  }

  guardar(): void {
    this.clientesService.saveClient(this.clientForm.value).subscribe(
      (resp) => {
        this.clientForm.reset();
        this.clients.push(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
