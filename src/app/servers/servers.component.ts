import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // absolute path
    // this also works
    // this.router.navigate(['/servers']);

    /**
     * relative path
     * navigate function doenst know on wich route
     * we are currently on
     * routerlink always knows what the currently loaded route is
     */
    // this.router.navigate(['servers']);

    // it breaks because path that is been build is /servers/servers
    // this.router.navigate(['servers'], { relativeTo: this.route });

    // and in here is just /servers
    // this.router.navigate(['/servers'], { relativeTo: this.route });
  }
}
