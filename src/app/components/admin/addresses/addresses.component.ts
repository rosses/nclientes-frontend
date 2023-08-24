import { Component, OnInit } from '@angular/core';
import { faAngleUp, faAngleDown, faCircleDot, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  showModalBill: boolean = false;

  faXmark = faXmark;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faCircle = faCircle;
  faCircleDot = faCircleDot;

  adminList: any[] = [
    { open: false }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleBillModal() {
    this.showModalBill = !this.showModalBill;
  }

}
