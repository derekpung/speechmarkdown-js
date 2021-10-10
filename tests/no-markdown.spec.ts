// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('no-markdown', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Text line 1

    Text line 2
  `;

  test('converts to SSML - Amazon Polly', () => {

    const options = {
      platform: 'amazon-polly'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Text line 1

      Text line 2
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
      Text line 1

      Text line 2
      </speak>
    `;

    expect(ssml).toBe(expected);
  });
  
  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Text line 1

      Text line 2
    `;

    expect(text).toBe(expected);
  });

});
