import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataServiceService } from './data-service.service'
import { FullheaderComponent } from './fullheader/fullheader.component';
import { ProductscontainerComponent } from './productscontainer/productscontainer.component';
import { ContentComponent } from './content/content.component';
import { TopmenuComponent } from './topmenu/topmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    FullheaderComponent,
    ProductscontainerComponent,
    ContentComponent,
    TopmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
