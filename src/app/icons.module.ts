import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Play } from 'angular-feather/icons';

const icons = {
  Play,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
