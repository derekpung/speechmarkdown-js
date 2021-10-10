import { Formatter } from '../Interfaces';
import { SpeechOptions } from '../SpeechOptions';
import { TextFormatter } from "./TextFormatter";
import { AmazonPollySsmlFormatter } from './AmazonPollySsmlFormatter';
import { AmazonPollyNeuralSsmlFormatter } from './AmazonPollyNeuralSsmlFormatter';

export function createFormatter(options: SpeechOptions): Formatter {
  switch(options.platform) {
      case 'amazon-polly':
        return new AmazonPollySsmlFormatter(options);
      case 'amazon-polly-neural':
        return new AmazonPollyNeuralSsmlFormatter(options);
      default:
        return new TextFormatter(options);
  }
}

export function createTextFormatter(options: SpeechOptions): Formatter {
  return new TextFormatter(options);
}
