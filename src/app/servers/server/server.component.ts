import { ActivatedRoute, Params } from '@angular/router';
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
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get param and cast to number
    const id = +this.route.snapshot.params['id'];

    // get server info
    this.server = this.serversService.getServer(id);

    // react to changes
    this.route.params.subscribe((params: Params) => this.server = this.serversService.getServer(+params['id']));
  }

}
