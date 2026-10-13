import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {AquaticCenter} from '../domain/model/aquatic-center.entity';
import {AquaticCenterResource, AquaticCenterResponse} from './aquatic-center-response';
import {AquaticCenterAssembler} from './aquatic-center-assembler';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export class AquaticCenterApiEndpoint extends BaseApiEndpoint<AquaticCenter, AquaticCenterResource, AquaticCenterResponse, AquaticCenterAssembler>{
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.outdoorCenterProviderApiEndpointPath}`, new AquaticCenterAssembler());
  }

}
