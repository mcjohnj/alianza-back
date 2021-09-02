import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Service/cliente.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  clients: any;
  closeResult: string = '';
  clientForm: any;

  crear() {
    this.router.navigate(['crear']);
  }
  exportar() {
    this.router.navigate(['crear']);
  }
  constructor(
    private router: Router,
    public clientService: ClienteService,
    public fb: FormBuilder
  ) {}

  guardar(): void {
    this.clientService.saveClient(this.clientForm.value).subscribe(
      (resp) => {
        this.clientForm.reset();
        this.clients.push(resp);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(
      (resp) => {
        this.clients = resp;
      },
      (error) => {
        console.error(error);
      }
    );
    this.clientForm = this.fb.group({
      sharedKey: new FormControl('',[Validators.required, Validators.minLength(3)]),
      businessId: new FormControl('',[Validators.required, Validators.minLength(2)]),
      email: new FormControl('',[Validators.required, Validators.minLength(5), Validators.email]),
      phone: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]),
      dataAdded: new FormControl('',Validators.required)
    });
  }
}
