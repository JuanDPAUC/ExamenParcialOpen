import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {AquaticCenter} from '../domain/model/aquatic-center.entity';
import {AquaticCenterResource, AquaticCenterResponse} from './aquatic-center-response';
import {resource} from '@angular/core';

export class AquaticCenterAssembler implements BaseAssembler<AquaticCenter, AquaticCenterResource, AquaticCenterResponse>{

  toEntitiesFromResponse(response: AquaticCenterResponse): AquaticCenter[] {
    console.log(response);
    return response['aquatic-centers']. map(resource => this.toEntityFromResource(resource));
  }
  toEntityFromResource(resource: AquaticCenterResource): AquaticCenter {
    return new AquaticCenter({
      id: resource.id,
      name: resource.name,
      activityType :resource.activityType,
      capacity: resource.capacity,
      latitude: resource.latitude,
      longitude: resource.longitude

    });
  }

  toResourceFromEntity(entity: AquaticCenter): AquaticCenterResource {
    return {
      id: entity.id,
      name: entity.name,
      activityType: entity.activityType,
      capacity: entity.capacity,
      latitude: entity.latitude,
      longitude: entity.longitude
    } as AquaticCenterResource;
  }

}
