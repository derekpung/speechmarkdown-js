// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('number-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Your balance is: (12345)[number].
  `;
  
  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Your balance is: <say-as interpret-as="number">12345</say-as>.
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
      Your balance is: <say-as interpret-as="number">12345</say-as>.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Your balance is: 12345.
    `;

    expect(text).toBe(expected);
  });

});
