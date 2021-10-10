// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('expletive-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    You said (word)[bleep] and (word)[expletive] at school.
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      You said <say-as interpret-as="expletive">word</say-as> and <say-as interpret-as="expletive">word</say-as> at school.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Amazon Polly (Neural)', () => {

    const options = {
      platform: 'amazon-polly-neural'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      You said <say-as interpret-as="expletive">word</say-as> and <say-as interpret-as="expletive">word</say-as> at school.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      You said word and word at school.
    `;

    expect(text).toBe(expected);
  });

});
