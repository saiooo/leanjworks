import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from "../data-service.service";

declare var jQuery: any;

@Component({
  selector: 'app-fullheader',
  templateUrl: './fullheader.component.html',
  styleUrls: ['./fullheader.component.css']
})
export class FullheaderComponent implements OnInit {

  constructor(private service: DataServiceService) { }

  ngOnInit() {
  }

  showBigModal() {
    jQuery('#firstModal').modal('show');
  }

  closeBigModal() {
    jQuery('#firstModal').modal('hide', function(){
      jQuery('#secondModal').modal('show');
    });
  }

  closeSecondModal() {
    jQuery('#secondModal').modal('hide');
  }



  onSubmit(f: NgForm) {
    let values = JSON.stringify(f.value);
    this.service.success(values)
      .subscribe(data => {
        (data.toString() === "true") ? this.closeBigModal() : alert('Please check the form')
      });

  }

}
