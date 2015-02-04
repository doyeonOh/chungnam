'use strict';

angular.module('chungnamApp.version', [
  'chungnamApp.version.interpolate-filter',
  'chungnamApp.version.version-directive'
])

.value('version', '0.1');
