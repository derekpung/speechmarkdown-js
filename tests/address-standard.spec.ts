// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('address-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    I'm at (150th CT NE, Redmond, WA)[address].
  `;

  test('converts to SSML - Amazon Polly', () => {
    
    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);
    const expected = dedent`
      <speak>
      I'm at <say-as interpret-as="address">150th CT NE, Redmond, WA</say-as>.
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
      I'm at <say-as interpret-as="address">150th CT NE, Redmond, WA</say-as>.
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      I'm at 150th CT NE, Redmond, WA.
    `;

    expect(text).toBe(expected);
  });

});
