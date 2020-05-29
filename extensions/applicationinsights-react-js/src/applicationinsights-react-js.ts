// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import '@microsoft/applicationinsights-shims';
import { IReactExtensionConfig } from "./Interfaces/IReactExtensionConfig";
import ReactPlugin from "./ReactPlugin";
import withAITracking from "./withAITracking";
import {
  AppInsightsContext,
  useAppInsightsContext
} from "./AppInsightsContext";
import useTrackEvent from "./useTrackEvent";
import useTrackMetric from "./useTrackMetric";

export {
  ReactPlugin,
  IReactExtensionConfig,
  withAITracking,
  AppInsightsContext,
  useAppInsightsContext,
  useTrackEvent,
  useTrackMetric
};
