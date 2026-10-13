import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface AquaticCenterResource extends BaseResource{
  id: number;
  name: string;
  activityType: string;
  capacity: number;
  latitude: number;
  longitude: number;
}
export interface AquaticCenterResponse extends BaseResponse{
  'aquatic-centers': AquaticCenterResource[];
}
