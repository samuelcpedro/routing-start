import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // // get param and cast to number
    // const id = +this.route.snapshot.params['id'];

    // // get server info
    // this.server = this.serversService.getServer(id);

    // // react to changes
    // this.route.params.subscribe((params: Params) => this.server = this.serversService.getServer(+params['id']));

    this.route.data.subscribe(
      (data: Data) => {
        //  data.['server'] is defined in resolve: { server: ServerResolver} on app-routing
        this.server = data['server'];
      }
    );
  }

  onEdit() {

    // need to pass an array
    // this.router.navigate([]);

    // we just want to add edit to the current path
    // this.router.navigate(['edit']);

    // we coulded add
    // this.router.navigate(['/servers', this.server.id , 'edit']);

    // we just want to add edit to the current path
    // this.router.navigate(['edit'], { relativeTo: this.route });

    // preserve information
    // preserve if we want to overwrite the new  query params
    // merge with old query param with new that we might have
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
