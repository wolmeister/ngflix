import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Play,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  PlayCircle,
  X,
} from 'angular-feather/icons';

const icons = {
  Play,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  PlayCircle,
  X,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
