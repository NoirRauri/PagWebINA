import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeModel } from 'src/app/shared/models/episodeModel';
import { EpisodeTableService } from 'src/app/shared/services/Episode-table.service';

@Component({
  selector: 'app-detalle-episode',
  templateUrl: './detalle-episode.component.html',
  styleUrls: ['./detalle-episode.component.css']
})
export class DetalleEpisodeComponent implements OnInit {

  dataSource = []

  episode: EpisodeModel;

  constructor(route: ActivatedRoute, srv: EpisodeTableService) {
    const id = route.snapshot.paramMap.get('id');

    srv.getEpisodeById(id).subscribe((result: any) => {
      this.dataSource = result;
      this.episode = result;
    })
  }

  ngOnInit(): void {
  }


}
