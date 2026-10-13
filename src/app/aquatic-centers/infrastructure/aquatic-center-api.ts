import {BaseApi} from '../../shared/infrastructure/base-api';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AquaticCenter} from '../domain/model/aquatic-center.entity';
import {AquaticCenterApiEndpoint} from './aquatic-center-api-endpoint';
import {ReservationsAssembler} from './reservations-assembler';
import {ReservationsApiEndpoint} from './reservations-api-endpoint';
import {Observable} from 'rxjs';
import {Reservations} from '../domain/model/reservations.entity';


@Injectable({providedIn: 'root'})
export class AquaticCenterApi extends BaseApi{
  private readonly aquaticCenterEndpoint: AquaticCenterApiEndpoint;
  private readonly reservationsEndpoint: ReservationsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.aquaticCenterEndpoint = new AquaticCenterApiEndpoint(http);
    this.reservationsEndpoint = new ReservationsApiEndpoint(http);

  }
  getAquaticCenters(): Observable<AquaticCenter[]>{
    return this.aquaticCenterEndpoint.getAll();
  }
  getReservations(): Observable<Reservations[]>{
    return this.reservationsEndpoint.getAll();
  }
}
