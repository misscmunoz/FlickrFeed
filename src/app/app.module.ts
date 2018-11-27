import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { FeedViewComponent } from './components/feed-view/feed-view.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { OverlayComponent } from './components/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedViewComponent,
    FeedItemComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
