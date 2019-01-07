import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { TeximateModule } from 'ngx-teximate';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NguCarouselModule } from '@ngu/carousel';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    NgxPageScrollModule,
    SwiperModule,
    TeximateModule,
    NgxGalleryModule,
    AppRoutingModule,
    OwlModule,
    NguCarouselModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
