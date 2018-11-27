import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedViewComponent } from './components/feed-view/feed-view.component';

const routes: Routes = [
    { path: '', component: FeedViewComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
