import {Component, inject} from '@angular/core';
import {
  AquaticCenterSummary
} from '../../../../aquatic-centers/presentation/components/aquatic-center-summary/aquatic-center-summary';
import {AquaticStore} from '../../../../aquatic-centers/application/aquatic-store';

/**
 * Home view for the shared presentation context.
 */
@Component({
  selector: 'app-home',
  imports: [AquaticCenterSummary],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected aquaticStore= inject(AquaticStore);

}
