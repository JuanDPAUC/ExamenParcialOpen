import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Reservations} from '../domain/model/reservations.entity';
import {ReservationsResource, ReservationsResponse} from './reservations-response';
import {ReservationsAssembler} from './reservations-assembler';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export class ReservationsApiEndpoint extends BaseApiEndpoint<Reservations, ReservationsResource, ReservationsResponse, ReservationsAssembler>{
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.reservationsProviderApiEndpointPath}`, new ReservationsAssembler());
  }

}
